"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronRight, BarChart3, RefreshCcw } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

// Data maturity levels
const MATURITY_LEVELS = [
  {
    id: "reactive",
    label: "Reactive",
    description:
      "Your organization collects data primarily in response to external requirements or crises. Data is used sporadically and not integrated into decision-making processes.",
    recommendations: [
      "Establish basic data collection processes",
      "Identify key metrics aligned with organizational goals",
      "Develop a data governance framework",
      "Provide basic data literacy training to staff",
    ],
  },
  {
    id: "compliant",
    label: "Compliant",
    description:
      "Your organization has established data collection processes to meet regulatory requirements. Data is collected consistently but primarily used for reporting rather than improvement.",
    recommendations: [
      "Integrate data into regular decision-making processes",
      "Develop standardized data analysis procedures",
      "Improve data quality assurance measures",
      "Expand data collection beyond compliance requirements",
    ],
  },
  {
    id: "strategic",
    label: "Strategic",
    description:
      "Your organization uses data strategically to inform decisions and improve programs. Data collection and analysis are aligned with organizational goals and used for continuous improvement.",
    recommendations: [
      "Implement advanced analytics capabilities",
      "Develop predictive models for program outcomes",
      "Create data sharing mechanisms across departments",
      "Establish a data-driven culture throughout the organization",
    ],
  },
  {
    id: "transformative",
    label: "Transformative",
    description:
      "Your organization has a sophisticated data ecosystem that drives innovation and transformation. Data is fully integrated into all aspects of operations and used to create new opportunities.",
    recommendations: [
      "Explore cutting-edge data science techniques",
      "Develop AI/ML capabilities for program optimization",
      "Share data insights with the broader field",
      "Continuously refine data systems for maximum impact",
    ],
  },
]

// Quiz questions based on program evaluation principles
const QUESTIONS = [
  {
    id: "q1",
    question: "How does your organization primarily use data in program evaluation?",
    options: [
      { value: "reactive", label: "We collect data mainly when required by funders or regulations" },
      { value: "compliant", label: "We regularly collect data for compliance and basic reporting" },
      { value: "strategic", label: "We use data to inform strategic decisions and program improvements" },
      { value: "transformative", label: "Data drives all aspects of our program design and implementation" },
    ],
  },
  {
    id: "q2",
    question: "How would you describe your organization's data collection processes?",
    options: [
      { value: "reactive", label: "Ad hoc and inconsistent, often in response to specific requests" },
      { value: "compliant", label: "Standardized processes focused on meeting reporting requirements" },
      { value: "strategic", label: "Comprehensive systems aligned with organizational goals" },
      { value: "transformative", label: "Sophisticated, integrated systems that capture diverse data points" },
    ],
  },
  {
    id: "q3",
    question: "How does your organization approach data analysis?",
    options: [
      { value: "reactive", label: "Basic analysis performed occasionally, usually by external parties" },
      { value: "compliant", label: "Regular analysis focused on required metrics and indicators" },
      { value: "strategic", label: "In-depth analysis to identify trends and inform program adjustments" },
      { value: "transformative", label: "Advanced analytics including predictive modeling and machine learning" },
    ],
  },
  {
    id: "q4",
    question: "How is data used in decision-making processes?",
    options: [
      { value: "reactive", label: "Rarely consulted, decisions are primarily based on intuition or experience" },
      { value: "compliant", label: "Considered alongside other factors but not central to decisions" },
      { value: "strategic", label: "Regularly used to inform strategic planning and program design" },
      { value: "transformative", label: "Central to all decision-making, with robust evidence-based processes" },
    ],
  },
  {
    id: "q5",
    question: "How would you describe your organization's data infrastructure?",
    options: [
      { value: "reactive", label: "Minimal, relying on basic tools like spreadsheets" },
      { value: "compliant", label: "Adequate systems for required data collection and reporting" },
      { value: "strategic", label: "Robust systems with integration across departments" },
      { value: "transformative", label: "State-of-the-art infrastructure supporting advanced analytics" },
    ],
  },
  {
    id: "q6",
    question: "How does your organization approach data quality?",
    options: [
      { value: "reactive", label: "Limited attention to data quality issues" },
      { value: "compliant", label: "Basic quality checks to ensure accuracy for reporting" },
      { value: "strategic", label: "Comprehensive quality assurance processes" },
      { value: "transformative", label: "Sophisticated validation systems with continuous improvement" },
    ],
  },
  {
    id: "q7",
    question: "How would you describe staff data literacy in your organization?",
    options: [
      { value: "reactive", label: "Limited, with few staff having data skills" },
      { value: "compliant", label: "Basic understanding among key staff responsible for reporting" },
      { value: "strategic", label: "Good data literacy across the organization with specialized expertise" },
      { value: "transformative", label: "High level of data literacy throughout with continuous learning" },
    ],
  },
]

export function DataMaturityQuiz() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [answers, setAnswers] = React.useState<Record<string, string>>({})
  const [currentAnswer, setCurrentAnswer] = React.useState<string | null>(null)
  const [quizComplete, setQuizComplete] = React.useState(false)
  const [result, setResult] = React.useState<{
    level: (typeof MATURITY_LEVELS)[number]
    scores: Record<string, number>
  } | null>(null)

  const handleNext = () => {
    if (currentAnswer) {
      // Save the current answer
      setAnswers((prev) => ({
        ...prev,
        [QUESTIONS[currentQuestion].id]: currentAnswer,
      }))

      if (currentQuestion < QUESTIONS.length - 1) {
        // Move to next question
        setCurrentQuestion((prev) => prev + 1)
        setCurrentAnswer(null)
      } else {
        // Quiz is complete, calculate results
        calculateResults()
      }
    }
  }

  const calculateResults = () => {
    const newAnswers = { ...answers, [QUESTIONS[currentQuestion].id]: currentAnswer as string }

    // Count occurrences of each maturity level
    const scores: Record<string, number> = {
      reactive: 0,
      compliant: 0,
      strategic: 0,
      transformative: 0,
    }

    Object.values(newAnswers).forEach((answer) => {
      scores[answer]++
    })

    // Determine the dominant maturity level
    let maxScore = 0
    let dominantLevel = "reactive"

    Object.entries(scores).forEach(([level, score]) => {
      if (score > maxScore) {
        maxScore = score
        dominantLevel = level
      }
    })

    const resultLevel = MATURITY_LEVELS.find((level) => level.id === dominantLevel)

    setResult({
      level: resultLevel!,
      scores,
    })

    setQuizComplete(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setCurrentAnswer(null)
    setQuizComplete(false)
    setResult(null)
  }

  const progressPercentage = ((currentQuestion + 1) / QUESTIONS.length) * 100

  return (
    <Card className="max-w-3xl mx-auto">
      {!quizComplete ? (
        <>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>
                Question {currentQuestion + 1} of {QUESTIONS.length}
              </span>
              <Badge variant="outline" className="ml-2">
                {Math.round(progressPercentage)}% Complete
              </Badge>
            </CardTitle>
            <Progress value={progressPercentage} className="mt-2" />
          </CardHeader>
          <CardContent>
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-medium mb-4">{QUESTIONS[currentQuestion].question}</h2>
              <RadioGroup value={currentAnswer || ""} onValueChange={setCurrentAnswer}>
                <div className="space-y-4">
                  {QUESTIONS[currentQuestion].options.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-2 rounded-md p-3 border hover:bg-muted/50 transition-colors"
                    >
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="flex-grow cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </motion.div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleNext} disabled={!currentAnswer} className="flex items-center">
              {currentQuestion < QUESTIONS.length - 1 ? "Next" : "See Results"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </>
      ) : (
        <>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Your Data Maturity Assessment Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center mb-4">
              <Badge className="text-lg py-2 px-4">{result?.level.label} Maturity Level</Badge>
            </div>

            <p className="text-muted-foreground mb-6">{result?.level.description}</p>

            <div className="space-y-4">
              <h3 className="font-medium flex items-center">
                <BarChart3 className="mr-2 h-5 w-5" />
                Your Maturity Profile
              </h3>

              {MATURITY_LEVELS.map((level) => {
                const score = result?.scores[level.id] || 0
                const percentage = (score / QUESTIONS.length) * 100

                return (
                  <div key={level.id} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{level.label}</span>
                      <span className="text-sm text-muted-foreground">
                        {score}/{QUESTIONS.length} responses
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                )
              })}
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="font-medium">Recommendations for Improvement</h3>
              <ul className="space-y-2">
                {result?.level.recommendations.map((recommendation, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{recommendation}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={resetQuiz} variant="outline" className="flex items-center">
              <RefreshCcw className="mr-2 h-4 w-4" />
              Retake Assessment
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  )
}
