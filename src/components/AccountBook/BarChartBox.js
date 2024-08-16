import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
  );

function BarChartBox(){
     const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Monthly Sales',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(233,229,223,1)',
          borderRadius:20,
          borderSkipped: false,
          barThickness:15,
        },
      ],
    };

  // 그래프 옵션, x축과 y축을 숨기기 위한 설정 포함
  const options = {
    scales: {
      x: {
        display: false, // x축 숨기기
      },
      y: {
        display: false, // y축 숨기기
      },
    },
    plugins: {
      legend: {
        display: false, // 범례 숨기기 (필요에 따라)
      },
    },
  };
    return(
      <div>
      <Bar data={data} options={options} />
    </div>
    )
}
export default BarChartBox;