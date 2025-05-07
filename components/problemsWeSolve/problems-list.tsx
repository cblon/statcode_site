import type { Problem } from "./types/problem"

interface ProblemsListProps {
  problems: Problem[]
}

export default function ProblemsList({ problems }: ProblemsListProps) {
  if (problems.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-500">No problems found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {problems.map((problem, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
          <h3 className="text-xl font-bold mb-2">{problem.title}</h3>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-700">Cause:</h4>
            <p className="text-gray-600">{problem.cause}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700">Solution:</h4>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              {problem.solutions.map((solution, idx) => (
                <li key={idx} className="text-gray-600">
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
