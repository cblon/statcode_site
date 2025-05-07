"use client"

import type { Problem } from "./types/problem"

interface AlphabetFilterProps {
  selectedLetter: string
  onLetterSelect: (letter: string) => void
  onViewAll: () => void
  problems?: Problem[]
}

export default function AlphabetFilter({
  selectedLetter,
  onLetterSelect,
  onViewAll,
  problems = [],
}: AlphabetFilterProps) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  // Create a set of first letters from all problems
  const availableLetters = new Set(problems.map((problem) => problem.title.charAt(0).toUpperCase()))

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {alphabet.map((letter) => {
          const hasProblems = availableLetters.has(letter)
          return (
            <button
              key={letter}
              className={`w-8 h-8 flex items-center justify-center rounded ${
                selectedLetter === letter
                  ? "bg-black text-white"
                  : hasProblems
                    ? "bg-gray-100 hover:bg-gray-200"
                    : "bg-gray-100 text-gray-400 cursor-default"
              }`}
              onClick={() => hasProblems && onLetterSelect(letter)}
              disabled={!hasProblems}
            >
              {letter}
            </button>
          )
        })}
      </div>

      <div className="flex justify-center">
        <button
          className={`px-4 py-2 border rounded transition ${
            selectedLetter === "all" ? "bg-black text-white" : "border-gray-300 hover:bg-gray-100"
          }`}
          onClick={onViewAll}
        >
          View All
        </button>
      </div>
    </div>
  )
}
