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

    const barWidth = canvas.width / data.length - 4;
    const maxValue = Math.max(...data);

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw bars
    data.forEach((value, index) => {
      const x = index * (barWidth + 4);
      const height = (value / maxValue) * canvas.height * 0.8;
      const y = canvas.height - height;

      // Highlight the bar that's higher (representing today)
      if (value === 0.8) {
        ctx.fillStyle = "#1a73e8"; // Blue color for highlighted bar
      } else {
        ctx.fillStyle = "#d1e3ff"; // Light blue for other bars
      }

      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, height, 4);
      ctx.fill();
    });
  }, []);

  return (
    <div className="mt-4 h-32 w-full">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ display: "block" }}
      />
    </div>
  );
};
