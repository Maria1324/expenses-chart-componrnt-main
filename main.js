const labels = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun',
  ];
const lableChart= '';
  const data = {
    labels: labels,
    options: {
        legend: {
           display: false
        },
        
   },
    datasets: [{
        
      base: '',
      backgroundColor: ['hsl(10, 79%, 65%)','hsl(10, 79%, 65%)','hsl(186, 34%, 60%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)'],
      hoverBackgroundColor:['hsl(10, 79%, 65%, 60%)','hsl(10, 79%, 65%, 60%)','hsl(186, 34%, 60%, 60%)', 'hsl(10, 79%, 65%, 60%)', 'hsl(10, 79%, 65%, 60%)'],
      borderColor:'hsl(10, 79%, 65%)',
      borderRadius:5,
      borderSkipped: false,
      data: [ 17.45, 34.91, 52.36, 31.07, 23.39,43.28,25.48]
        
    }]
  };

const titleTooltip=(titleTooltips)=>{
    return lableChart;
}
const lableTooltip=(titleTooltips)=>{
    return labels+$;
}

const config = {
    type: 'bar',
    data: data,
    options: {
        
        scales: {
          
            y: {
                beginAtZero:true,
                ticks:{
                    display:false,
                },
                grid:{
                    drawTicks:false,
                    drawBorder:false,
                    display:false,
                    drawOnChartArea:false,
                }
            },
            x:{
                beginAtZero:true,
                
                grid:{
                    drawTicks:false,
                    drawBorder:false,
                    drawOnChartArea:false,
                    display:false,
                }
            }
            
        },
        plugins:{
            tooltip:{
                yAlign:'bottom',
                displayColors:false,
                callbacks:{
                    title: titleTooltip,
                    lable:lableTooltip,
                }
            },
            legend:{
                display:false,
            }
        }
    },
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  )