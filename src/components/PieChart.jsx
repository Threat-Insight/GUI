import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "../css/components-css/PieChart.css";

const PieChart = () => {
  const [data, setData] = useState({
    labels: ["Legitimate", "Phishing"],
    datasets: [
      {
        data: [1],
        backgroundColor: ["#36b78e", "#f43755"],
        hoverBackgroundColor: ["#36a28c", "#f43755"],
      },
    ],
  });

  const fetchCounts = async () => {
    try {
      const responseLegit = await fetch(
        "http://localhost:5000/scan/legitimateCount"
      );
      const dataLegit = await responseLegit.json();

      const responsePhishing = await fetch(
        "http://localhost:5000/scan/phishingCount"
      );
      const dataPhishing = await responsePhishing.json();

      const legitCount = dataLegit.legitimateCount || 0;
      const phishingCount = dataPhishing.phishingCount || 0;

      if (legitCount === 0 && phishingCount === 0) {
        setData({
          labels: ["Legitimate"],
          datasets: [
            {
              data: [1],
              backgroundColor: ["#36b78e"],
              hoverBackgroundColor: ["#36a28c"],
            },
          ],
        });
      } else {
        setData({
          labels: ["Legitimate", "Phishing"],
          datasets: [
            {
              data: [legitCount, phishingCount],
              backgroundColor: ["#36b78e", "#f43755"],
              hoverBackgroundColor: ["#36a28c", "#f43755"],
            },
          ],
        });
      }
    } catch (error) {
      console.error("Error fetching counts:", error);
    }
  };

  useEffect(() => {
    fetchCounts();
    const intervalId = setInterval(fetchCounts, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="pie-chart-container">
      <Pie
        data={data}
        options={{
          plugins: {
            legend: {
              labels: {
                generateLabels: (chart) => {
                  const { data } = chart;
                  return data.labels.map((label, i) => ({
                    text: label,
                    fillStyle: data.datasets[0].backgroundColor[i],
                    strokeStyle: data.datasets[0].backgroundColor[i],
                    lineWidth: 0,
                    fontColor: "#fff",
                    font: {
                      weight: "bold",
                      size: 14,
                    },
                  }));
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
