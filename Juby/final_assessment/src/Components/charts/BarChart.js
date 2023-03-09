import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const employeeData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Working",
        backgroundColor: "green",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 100, 81, 56],
      },
      {
        label: "Leave",
        backgroundColor: "red",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [20, 10, 30, 8, 15],
      },
    ],
  };
  return (
    <div style={{ height: "1000px", width: "1000px" }}>
      <Bar
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

export default BarChart;
