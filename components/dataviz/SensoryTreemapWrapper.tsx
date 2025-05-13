"use client"

import dynamic from "next/dynamic"

// Dynamically import the SensoryTreemap component with no SSR
const SensoryTreemap = dynamic(() => import("./SensoryTreemap"), { ssr: false })

export default function SensoryTreemapWrapper() {
  return (
    <div className="my-8 ">
      <SensoryTreemap />
    </div>
  )
}
