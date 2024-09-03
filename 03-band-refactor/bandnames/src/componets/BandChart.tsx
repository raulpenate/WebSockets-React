import Chart from "chart.js/auto";
import { useRef, useEffect, useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import useSocketHook from "../interfaces/useSocketHook";
import Band from "../interfaces/band";

const BandChart: React.FC = () => {
  const { socket } = useContext<useSocketHook>(SocketContext);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null); // Ref to store the Chart instance
  const [bands, getBands] = useState<Band[]>([]);

  useEffect(() => {
    socket?.on("band-list", (data) => {
      getBands(data);
    });
  });

  useEffect(() => {
    if (canvasRef.current) {
      // If a chart instance already exists, destroy it before creating a new one
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        chartRef.current = new Chart(ctx, {
          type: "bar",
          options: {
            indexAxis: "y",
            responsive: true,
            maintainAspectRatio: true,
            color: '#fff'
          },
          data: {
            labels: bands?.map((row) => row.name),
            datasets: [
              {
                label: "# of votes",
                data: bands?.map((row) => row.votes),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
              },
            ],
          },
        });
      }
    }

    // Cleanup function to destroy the chart instance on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  });

  return (
    <div className="box">
      <canvas className="bar-size" ref={canvasRef}></canvas>
    </div>
  );
};

export default BandChart;
