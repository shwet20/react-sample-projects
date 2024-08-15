import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Graph = () => {
  const chartRef = useRef(null);

  const randomNumbers = () => {
    const a = [];
    for (let i = 0; i < 300; i++) {
      a[i] = i;
    }

    let tmp, current, top = a.length;
    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = a[current];
        a[current] = a[top];
        a[top] = tmp;
      }
    }
    return a;
  };

  useEffect(() => {
    Highcharts.setOptions({
      colors: ['#66ffff', '#9999ff', '#66ff99']
    });

    const options = {
      chart: {
        type: 'areaspline',
        zoomType: 'x'
      },
      title: { text: null },
      legend: { enabled: false },
      xAxis: {
        type: 'datetime',
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        min: 0.5,
        max: 11,
        plotLines: [{
          color: 'red',
          dashStyle: 'solid',
          value: 3,
          width: 1
        }]
      },
      yAxis: {
        title: { text: null }
      },
      tooltip: { shared: true },
      credits: { enabled: false },
      plotOptions: {
        areaspline: { fillOpacity: 0.8 },
        series: {
          marker: { enabled: false },
          lineWidth: 0
        }
      },
      series: [
        { name: 'Failing', data: randomNumbers() },
        { name: 'Unknown', data: randomNumbers() },
        { name: 'Passing', data: randomNumbers() }
      ]
    };

    if (chartRef.current) {
      Highcharts.chart(chartRef.current, options);
    }
  }, []);

  return <div id="areaChart" ref={chartRef} style={{ height: '100%', width: '100%', margin: '0 auto' }} />;
};

export default Graph;
