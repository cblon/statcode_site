"use client"

import { useEffect, useRef } from "react"
import * as d3 from "d3"

// Define the data structure
interface SensoryData {
  name: string
  value: number
  children?: SensoryData[]
}

const SensoryTreemap = () => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove()

    // Define the data
    // @ts-ignore
    const data: SensoryData = {
      name: "Human Sensory Bandwidth",
      children: [
        {
          name: "Seeing",
          value: 10000000, // 10 Mb/s
        },
        {
          name: "Touch",
          value: 1000000, // 1 Mb/s
        },
        {
          name: "Hearing and smell",
          value: 200000, // 100,000 b/s each (combined)
        },
        {
          name: "Taste",
          value: 1000, // 1,000 b/s
        },
      ],
    }

    // Set up dimensions
    const width = svgRef.current.clientWidth
    const height = width * 0.8 // Adjust aspect ratio to match the image
    const labelPadding = 150 // Space for labels on the right

    // Create the SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width + labelPadding, height])
      .style("font", "14px sans-serif")

    // Create the treemap layout
    const treemap = d3.treemap<SensoryData>().size([width, height]).paddingOuter(1).paddingInner(1).round(true)

    // Create the hierarchy and compute the treemap layout
    const root = d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => (b.value || 0) - (a.value || 0))

    treemap(root)

    // Color scale
    // const color = d3
    //   .scaleOrdinal()
    //   .domain(["Seeing", "Touch", "Hearing and smell", "Taste"])
    //   .range(["#d13b2e", "#d13b2e", "#d13b2e", "#d9a41b"])

    // Use complementary colors for each sensory input
    const color = d3
      .scaleOrdinal()
      .domain(["Seeing", "Touch", "Hearing and smell", "Taste"])
      .range(["#4a6bdf", "#2ecc71", "#e67e22", "#f1c40f"])

    // Create the leaf nodes
    const leaf = svg
      .selectAll("g.node")
      .data(root.leaves())
      .join("g")
      .attr("class", "node")
    // @ts-ignore
      .attr("transform", (d) => `translate(${d.x0},${d.y0})`)

    // Add rectangles to each leaf
    leaf
      .append("rect")
      // @ts-ignore
      .attr("width", (d) => Math.max(0, d.x1 - d.x0))
      // @ts-ignore
      .attr("height", (d) => Math.max(0, d.y1 - d.y0))
      .attr("fill", (d) => String(color(d.data.name)))
      .attr("stroke", "white")
      .attr("stroke-width", 1)

    // Add labels and connecting lines
    const labelData = [
      {
        name: "Seeing 10 Mb/s",
        // @ts-ignore
        x: root.leaves()[0].x1,
        // @ts-ignore
        y: root.leaves()[0].y0 + (root.leaves()[0].y1 - root.leaves()[0].y0) / 2,
        anchor: "start",
      },
      {
        name: "Touch 1 Mb/s",
        // @ts-ignore
        x: root.leaves()[1].x1,
        // @ts-ignore
        y: root.leaves()[1].y0 + (root.leaves()[1].y1 - root.leaves()[1].y0) / 2,
        anchor: "start",
      },
      {
        name: "Hearing and smell,\n100,000 b/s each",
        // @ts-ignore
        x: root.leaves()[2].x1,
        // @ts-ignore
        y: root.leaves()[2].y0 + (root.leaves()[2].y1 - root.leaves()[2].y0) / 2,
        anchor: "start",
      },
      {
        name: "Taste 1,000 b/s",
        // @ts-ignore
        x: root.leaves()[3].x1,
        // @ts-ignore
        y: root.leaves()[3].y0 + (root.leaves()[3].y1 - root.leaves()[3].y0) / 2,
        anchor: "start",
      },
    ]

    // Add connecting lines
    svg
      .selectAll(".line")
      .data(labelData)
      .join("line")
      .attr("class", "line")
      .attr("x1", (d) => d.x)
      .attr("y1", (d) => d.y)
      .attr("x2", (d) => d.x + 20)
      .attr("y2", (d) => d.y)
      .attr("stroke", "black")
      .attr("stroke-width", 1)

    // Add the labels
    svg
      .selectAll(".label")
      .data(labelData)
      .join("g")
      .attr("class", "label")
      .attr("transform", (d) => `translate(${d.x + 25}, ${d.y})`)
      .each(function (d) {
        const lines = d.name.split("\n")
        const text = d3.select(this)

        lines.forEach((line, i) => {
          text
            .append("text")
            .attr("x", 0)
            .attr("y", i * 18) // Line height of 18px
            .attr("text-anchor", d.anchor)
            .attr("font-size", "14px")
            .attr("font-weight", "bold")
            .text(line)
        })
      })
  }, [])

  return (
    <div className="relative">
      <svg ref={svgRef} className="w-full" style={{ height: "auto", aspectRatio: "4/3" }} />
    </div>
  )
}

export default SensoryTreemap
