import React from "react";
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

ChartJS.register(ArcElement);

function PieChart({rest,consumed}){
    const data = {
        labels:['rest','consumed'],
        datasets : [
            {
                data:[rest,consumed],
                backgroundColor:[
                    'rgba(233, 230, 223, 0.8)',
                    'rgba(255, 205, 78, 0.8)',
                ],
                borderColor:[
                    'rgba(255, 205, 78, 1)', // 선택 사항: 세그먼트 테두리 색상
                    'rgba(233, 230, 223, 1)', // 선택 사항: 세그먼트 테두리 색상
                ],
                borderWidth:0,
            }
        ]
    };
    const options = {
        rotation: 50,
        circumference: 360,
    }

    return(
        <div style={{width:'30px', height:'30px'}}>
            <Pie data={data} options={options} rest={rest} consumed={consumed}/>
        </div>
    )
}
export default PieChart;