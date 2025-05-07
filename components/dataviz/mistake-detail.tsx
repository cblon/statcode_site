"use client"


import { X } from "lucide-react"


export interface Mistake {
    title: string
    description: string
    impacts: string[]
    solutions: string[]
  }


  
interface MistakeDetailProps {
  mistake: Mistake | null
  onClose: () => void
}

export function MistakeDetail({ mistake, onClose }: MistakeDetailProps) {
  if (!mistake) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 shadow-md h-full dark:bg-gray-950  dark:border-white">
        <h2 className="text-xl font-bold text-gray-800 mb-4 dark:text-white">Data Design Mistakes</h2>
        <p className="text-gray-600 dark:text-white">
          Select a segment from the chart to learn about common mistakes in program design and evaluation.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-md relative dark:bg-gray-950 dark:border-white">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
        <X size={20} />
      </button>

      <h2 className="text-xl font-bold text-gray-800 mb-2 dark:text-white">{mistake.title}</h2>
      <p className="text-gray-600 mb-4 dark:text-white">{mistake.description}</p>

      <h3 className="text-lg font-semibold text-gray-700 mb-2 dark:text-white">Impact</h3>
      <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1 dark:text-white">
        {mistake.impacts.map((impact, i) => (
          <li key={i}>{impact}</li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-gray-700 mb-2 dark:text-white">Solutions</h3>
      <ul className="list-disc pl-5 text-gray-600 space-y-1 dark:text-white">
        {mistake.solutions.map((solution, i) => (
          <li key={i}>{solution}</li>
        ))}
      </ul>
    </div>
  )
}

