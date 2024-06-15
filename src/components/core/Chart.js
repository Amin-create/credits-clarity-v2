 
import { Doughnut, Line } from "react-chartjs-2";
import {ArcElement, Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

function Chart({ data, type }) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    ChartJS.register(ArcElement, Tooltip, Legend);
    console.log("yydata", data)
    const creditScore = {
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [
                {
                    label: 'Sales',
                    data: [100, 250, 200, 350, 300],
                    fill: false,
                    borderColor: 'blue',
                    backgroundColor: 'blue',
                    borderWidth: 2,
                    pointBackgroundColor: 'white',
                    pointBorderColor: 'blue',
                    pointHoverBackgroundColor: 'blue',
                    pointHoverBorderColor: 'white',
                },
                {
                    label: 'Expenses',
                    data: [50, 100, 80, 120, 110],
                    fill: false,
                    borderColor: 'red',
                    backgroundColor: 'red',
                    borderWidth: 2,
                    pointBackgroundColor: 'white',
                    pointBorderColor: 'red',
                    pointHoverBackgroundColor: 'red',
                    pointHoverBorderColor: 'white',
                },
            ],
        },
        options: {
            scales: {
                x: {
                    type: 'category',
                    labels: ['January', 'February', 'March', 'April', 'May'],
                },
            },
        }
    }
    return (
        <div className={`
        ${type === 'Meter' && 'max-h-[140px]'}
        ${type === 'Doughnut' && 'max-h-[140px]'}
        ${type === 'line' && 'w-full'}

        ${type === 'Slider' && 'max-h-[240px]'}
        `}>
            {type === "Meter" && <Doughnut data={data.data} options={data.options} />}
            {type === "Doughnut" && <Doughnut data={data.data} options={data.options} />}
            {type === "line" && <Line data={data.data} options={data.options} />}

            {type === "Slider" && <Doughnut data={data.data} options={data.options} />}
        </div>
    )
}
export default Chart