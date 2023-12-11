import React ,{useState,useEffect }from 'react'
import {Chart as ChartJs , BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar} from  'react-chartjs-2'

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement
)
export default function BarChart() {

    const [chart,setChart] =useState([])

    var baseUrl ="https://api.coinranking.com/v2/coins/?limit=10"
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    var apiKey ="****************"

    useEffect(() => {
        const fetchCoins = async () => {
          await fetch(`${proxyUrl}${baseUrl}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': `${apiKey}`,
              'Access-Control-Allow-Origin': "*"
            }
          })
            .then((response) => {
              if (response.ok) {
                response.json().then((json) => {
                  console.log(json.data);
                  setChart(json.data)
                });
              }
            }).catch((error) => {
              console.log(error);
            });
        };
        fetchCoins()
      }, [baseUrl, proxyUrl, apiKey])



      console.log("chart", chart);
      var data = {
        labels: chart?.coins?.map(x => x.name),
        datasets: [{
          label: `${chart?.coins?.length} Coins Available`,
          data: chart?.coins?.map(x => x.price),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      };

     var options={
        maintainAspectRatio:false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        legend:{
            lable:{
                fontSize: 25
            }
        }
      }
  return (
    <div>
       
    <Bar
    data={data}
    height={400}
    options={options}
    />
  

    </div>
  )
}

// coinranking3f1802d96d73cb4cd1869eab8b6fe50bf87c2f1b600425df