import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function LineChart() {
  const employeeData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        // fill: true,
        label: "Working",
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 2,
        data: [65, 59, 45, 81, 56],
      },
      {
        // fill: true,
        label: "Leave",
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 2,
        data: [20, 10, 70, 8, 15],
      },
    ],
  };

  return (
    <div style={{ height: "1000px", width: "700px" }}>
      <Line
        data={employeeData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Employee Attendence Details",
              fontSize: 30,
            },
            legend: {
              display: true,
              position: "top",
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;
