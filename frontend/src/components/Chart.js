import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const Chart=(props)=>{
    const options = {
        legend: {
          display: false,
          position: "right"
        },
        elements: {
          arc: {
            borderWidth: 8
          }
        }
      };
    
      const data = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ["PF", "MMD", "UPND", "OTHER"],
        datasets: [
          {
            data: props.objects,
            backgroundColor: [
                'green',
                'blue',
                'red',
                'gray'
              ],
          }
        ]
      };
    return(
<div>
 <Doughnut data={data} options={options} />
</div>
    )

}
export default Chart;