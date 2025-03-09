"use client";

import { useEffect, useRef } from "react";

export const SavingsChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Sample data for the chart
    const data = [
      0.3, 0.5, 0.4, 0.2, 0.3, 0.2, 0.4, 0.5, 0.3, 0.2, 0.3, 0.2, 0.4, 0.3, 0.5,
      0.2, 0.3, 0.4, 0.2, 0.3, 0.8, 0.3,
    ];

    const barWidth = canvas.width / data.length - 6; // Slightly more spacing
    const maxValue = Math.max(...data);

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw bars with shadow
    data.forEach((value, index) => {
      const x = index * (barWidth + 6);
      const height = (value / maxValue) * canvas.height * 0.8;
      const y = canvas.height - height;

      // Add shadow to all bars
      ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
      ctx.shadowBlur = 4;
      ctx.shadowOffsetY = 2;

      // Highlight the bar that's higher (representing today)
      if (value === 0.8) {
        // Create gradient for highlighted bar
        const gradient = ctx.createLinearGradient(x, y, x, canvas.height);
        gradient.addColorStop(0, "#22c55e"); // Green-500
        gradient.addColorStop(1, "#15803d"); // Green-700
        ctx.fillStyle = gradient;
      } else {
        ctx.fillStyle = "#dcfce7"; // Green-100
      }

      // Draw more rounded bars
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, height, 8);
      ctx.fill();

      // Reset shadow for next iteration
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
    });
  }, []);

  return (
    <div className="mt-4 h-40 w-full">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ display: "block" }}
      />
    </div>
  );
};
