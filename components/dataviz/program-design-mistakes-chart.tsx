"use client"

import { useEffect,useState , useRef } from "react"
import * as d3 from "d3"



export interface Mistake {
  title: string
  description: string
  impacts: string[]
  solutions: string[]
}

export const mistakes: Mistake[] = [
  {
    title: "Needs Assessment",
    description:
      "Programs often skip thorough needs evaluations before diving into design, leading to interventions that miss critical contextual factors.",
    impacts: [
      "Misaligned data objectives",
      "Wasted resources on unnecessary interventions",
      "Failure to address root causes",
    ],
    solutions: [
      "Conduct stakeholder interviews and surveys",
      "Analyze existing data and research",
      "Use participatory assessment methods",
      "Document baseline conditions",
    ],
  },
  {
    title: "Fidelity",
    description:
      "Programs are evaluated based on outcomes, but there's little focus on whether implementation followed the intended model.",
    impacts: [
      "Inability to determine why programs succeed or fail",
      "Difficulty replicating successful programs",
      "Misleading evaluation results",
    ],
    solutions: [
      "Develop implementation checklists",
      "Conduct regular process evaluations",
      "Train staff on fidelity monitoring",
      "Document adaptations and deviations",
    ],
  },
  {
    title: "Data Collection",
    description:
      "Rushed evaluations often gather all data simultaneously, limiting the ability to analyze trends or adjust based on emerging insights.",
    impacts: [
      "Missing important temporal patterns",
      "No opportunity for mid-course corrections",
      "Recall bias in retrospective data collection",
    ],
    solutions: [
      "Design longitudinal data collection plans",
      "Implement regular monitoring checkpoints",
      "Use digital tools for continuous data collection",
      "Plan for interim analyses",
    ],
  },
  {
    title: "Timing and Scope",
    description:
      "Evaluations often occur too late to inform program design or focus on broad activities instead of individual interventions.",
    impacts: [
      "Missed opportunities for improvement",
      "Inability to attribute outcomes to specific components",
      "Wasted evaluation resources",
    ],
    solutions: [
      "Integrate evaluation planning from the start",
      "Match evaluation methods to program lifecycle stage",
      "Focus on evaluating specific program components",
      "Use developmental evaluation approaches",
    ],
  },
  {
    title: "Recommendations",
    description: "Findings lead to vague or impractical recommendations that stakeholders struggle to implement.",
    impacts: [
      "Evaluation reports that sit on shelves",
      "Stakeholder frustration and disengagement",
      "Continued ineffective practices",
    ],
    solutions: [
      "Involve implementers in developing recommendations",
      "Prioritize recommendations by feasibility and impact",
      "Provide specific action steps for each recommendation",
      "Create implementation timelines and resource requirements",
    ],
  },
  {
    title: "Sustainability",
    description:
      "Programs don't assess whether initiatives can continue without external support, leading to short-lived impact.",
    impacts: ["Program collapse after funding ends", "Loss of community trust", "Wasted initial investment"],
    solutions: [
      "Assess institutional capacity from the beginning",
      "Develop sustainability plans with stakeholders",
      "Build local ownership and capacity",
      "Identify diverse funding sources",
    ],
  },
  {
    title: "Scalability and Differences",
    description:
      "Successful programs are replicated without adapting to the unique characteristics of new locations, leading to failures in implementation.",
    impacts: [
      "Poor results in new contexts",
      "Wasted resources on inappropriate models",
      "Loss of credibility for the approach",
    ],
    solutions: [
      "Document core components vs. adaptable elements",
      "Conduct context assessments before scaling",
      "Pilot adaptations before full implementation",
      "Create flexible implementation guides",
    ],
  },
]


interface ProgramDesignMistakesChartProps {
  selectedMistake: number | null
  setSelectedMistake: (index: number | null) => void
}

export function ProgramDesignMistakesChart({ selectedMistake, setSelectedMistake }: ProgramDesignMistakesChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isDarkModeCircle, setIsDarkModeCircle] = useState<boolean>(false);

  useEffect(() => {
    // Check if dark mode is enabled when the component mounts
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial dark mode preference
    setIsDarkMode(darkModeQuery.matches);
    setIsDarkModeCircle(darkModeQuery.matches);
    // Listen for changes to dark mode preference
    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      setIsDarkModeCircle(e.matches);
    };

    darkModeQuery.addEventListener("change", handleDarkModeChange);

    // Cleanup listener when the component unmounts
    return () => {
      darkModeQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);




  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

     // Set text color based on dark mode
     const textColor = isDarkMode ? "#000000" : "#8b8b8b";
     const circleColor =  isDarkModeCircle ? "#000000" : "#8b8b8b6d";

    const width = svgRef.current.clientWidth
    const height = svgRef.current.clientHeight
    const radius = (Math.min(width, height) / 2) * 0.8

    let centerX = width / 2
    let centerY = height / 2
    let gWidth = width
    let gHeight = height
    let scale = 1
    let textScaleCenter= "16px"
     let textScale= "14px"

    // Override translation on small screens (width < 768px)
    if (width < 468) {
      centerX = 381.5
      centerY = 300
      gWidth = 620
      gHeight = 620
      scale= 2
      textScaleCenter = "10px"
     textScale= "10px"

    }

    // Create a group element for the chart
    const chart = svg.append("g")
      .attr("transform", `translate(${centerX}, ${centerY}) scale(${scale})`)
      // .attr("transform", `translate(${width / 2}, ${height / 2})`)
      .attr("width", `${gWidth}`)
      .attr("height", `${gHeight}`);


    // Create the central circle
    chart
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", radius * 0.2)
      .attr("fill", circleColor)
      .attr("stroke", "#d1d5db")
      .attr("stroke-width", 2)

    // Add central text
    chart
      .append("text")
      .attr("x", 0)
      .attr("y", 0)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("font-size", textScaleCenter)
      .attr("font-weight", "bold")
      .attr("fill", textColor)
      .text("Program Design")

    chart
      .append("text")
      .attr("x", 0)
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("font-size", textScaleCenter)
      .attr("font-weight", "bold")
      .attr("fill", textColor)
      .text("Mistakes")

    // Create the segments for each mistake
    const pie = d3.pie<any>().value(1).padAngle(0.03).sort(null)

    const arc = d3
      .arc<any>()
      .innerRadius(radius * 0.3)
      .outerRadius(radius * 0.7)

    const colorScale = d3
      .scaleOrdinal<string>()
      .domain(mistakes.map((_, i) => i.toString()))
      .range(["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#06b6d4"])

    const segments = chart
      .selectAll(".segment")
      .data(pie(mistakes))
      .enter()
      .append("g")
      .attr("class", "segment")
      .on("click", (event, d) => {
        setSelectedMistake(d.index)
      })

    segments
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => colorScale(d.index.toString()))
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .attr("opacity", (d) => (selectedMistake === null || selectedMistake === d.index ? 1 : 0.3))
      .attr("cursor", "pointer")
      .transition()
      .duration(500)
      // @ts-ignore
      .attrTween("d", (d) => {
        const interpolate = d3.interpolate(
          { startAngle: d.startAngle, endAngle: d.startAngle },
          { startAngle: d.startAngle, endAngle: d.endAngle },
        )
        return (t) => arc(interpolate(t))
      })

    // Add labels for each segment
    const labelArc = d3
      .arc<any>()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.5)

    segments
      .append("text")
      .attr("transform", (d) => `translate(${labelArc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#fff")
      .attr("pointer-events", "none")
      .text((d) => d.index + 1)

    // Add outer labels - positioned outside the chart with text wrapping
    const labelWidth = 140
    const labelHeight = 70

    segments
      .append("foreignObject")
      .attr("width", labelWidth)
      .attr("height", labelHeight)
      .attr("transform", (d) => {
        const midAngle = (d.startAngle + d.endAngle) / 2
        // Position labels outside the chart area
        const labelDistance = radius * 0.85

        // Calculate position based on angle
        let x = Math.sin(midAngle) * labelDistance
        let y = -Math.cos(midAngle) * labelDistance

        // Adjust x position to account for label width
        if (midAngle < Math.PI) {
          // Right side labels
          x = x
        } else {
          // Left side labels
          x = x - labelWidth
        }

        // Adjust y position to center the label vertically
        y = y - labelHeight / 2

        return `translate(${x}, ${y})`
      })
      .attr("opacity", (d) => (selectedMistake === null || selectedMistake === d.index ? 1 : 0.5))
      .append("xhtml:div")
      .style("font-size", textScale)
      .style("font-weight", "500")
      .style("color", textColor)
      .style("text-align", (d) => {
        const midAngle = (d.startAngle + d.endAngle) / 2
        return midAngle < Math.PI ? "left" : "right"
      })
      .style("width", `${labelWidth}px`)
      .style("height", `${labelHeight}px`)
      .style("display", "flex")
      .style("align-items", "center")
      .style("justify-content", (d) => {
        const midAngle = (d.startAngle + d.endAngle) / 2
        return midAngle < Math.PI ? "flex-start" : "flex-end"
      })
      .style("background-color", "rgba(134, 133, 133, 0)")
      .style("padding", "4px")
      .style("border-radius", "4px")
      .html((d, i) => mistakes[i].title)

    // Add hover effects
    segments
      .on("mouseover", function (event, d) {
        if (selectedMistake !== null && selectedMistake !== d.index) return

        d3.select(this)
          .select("path")
          .transition()
          .duration(200)
          .attr("transform", () => {
            const midAngle = (d.startAngle + d.endAngle) / 2
            return `translate(${Math.sin(midAngle) * 10}, ${-Math.cos(midAngle) * 10})`
          })
      })
      .on("mouseout", function (event, d) {
        d3.select(this).select("path").transition().duration(200).attr("transform", "translate(0, 0)")
      })
  }, [selectedMistake, setSelectedMistake])

  return <svg ref={svgRef} className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet" />
}


