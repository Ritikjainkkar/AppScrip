import React, {useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
export default function Graph() {
  const {data, selectedState } = useSelector((state) => state.states);
  const [total, setTotal] = useState([]);
  const [recovered, setRecovered] = useState([]);

  const putData = () => {
    selectedState.map(((st) => {
      const covid = data[st].total;
      setTotal((old) => [...old , covid.confirmed]);
      setRecovered((old) => [...old , covid.recovered]);
    }))
  }

  useEffect(() => {
    putData();
  },[ selectedState ])

  return (
    <div>
      <Bar 
        data={{
          labels: selectedState,
          datasets: [
          {
            label: 'Recovered',
            labels: selectedState,
            data: recovered,
            backgroundColor: [
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 206, 86, 1)',
            ],
          },
          {
            label: 'Total Cases',
            labels: selectedState,
            data: total,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
            ],
          }
        ]
      }}
      options= {{
        indexAxis: 'y',
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
      }}
      />
    </div>
  )
}
