

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-percentage-of-positive-subjects-graph',
  templateUrl: './percentage-of-positive-subjects-graph.component.html',
  styleUrls: ['./percentage-of-positive-subjects-graph.component.scss'],
})
export class PercentageOfPositiveSubjectsGraphComponent implements OnInit {
  color='var(--color)'
backround = 'var(--backround)'
cardBackround='var(--card-backround)'
  startDate: Date = new Date('2023-01-01');
  endDate: Date = new Date('2023-02-01');
  data1: [number, number][] = [];
  data2: [number, number][] = [];
  ngOnInit(): void {
    this.data1 = this.generateData(this.startDate, this.endDate);
    this.data2 = this.generateData(this.startDate, this.endDate);
    this.initializeChart();
  }

  initializeChart(): void {
    const tickPositions = this.generateTickPositions(this.data1);
    const options: Highcharts.Options = {
      chart: {
        type: 'line',
        backgroundColor:this.backround
      },
      legend: {
        enabled: false,
      },
      title: {
        text: undefined,
      },
      xAxis: {
        title: {
          text: 'תאריך',
          style:{
            color:this.color
          }
        },
        
        type: 'datetime',
        labels: {
          format: '{value:%d.%m}', // Format xAxis labels as day and month
          style:{
            color:this.color
          }
        },
        tickPositions: tickPositions,
        crosshair: {
          width: 1,
          color: 'grey',
          zIndex: 3,
        },
      },
      yAxis: {
        title: {
          text: 'אחוז נבדקים חיוביים',
          style:{
            color:this.color
          }
        },
        labels: {
          format: '{value}%', // Format yAxis labels
          style:{
            color:this.color
          }
        },
        tickAmount:5
      },
      plotOptions: {
        series: {
          events: {
            legendItemClick: function () {
              return false;
            },
          },
        },
      },
      tooltip: {
        shared: true,
        useHTML:true,
        formatter: function () {
          const weekdays = ['יום א', 'יום ב', 'יום ג', 'יום ד', 'יום ה', 'יום ו', 'שבת']; // Hebrew weekdays
  const date = new Date(Number(this.x));
  const day = weekdays[date.getDay()]; // Get Hebrew weekday
  let tooltip = '<div style="padding:3px;font-size: 13px;text-align: right;"><b>' + day + ', ' + Highcharts.dateFormat('%d.%m.%y', Number(this.x)) + '</b></div>'; // Header
          if (this.points) {
            let points = this.points;
            let totalValue = 0;
            let totalCount = 0;
            points.forEach(function(point) {
              let value = Math.abs(point.y ?? 0).toFixed(2);
              let colorCircle = '<div style="background-color:' + point.color + '; border-radius:50%; width: 10px;height: 10px; margin-left: 5px;"> </div>';
              tooltip += '<div style="text-align: right;display:flex; align-items: center; justify-content: right;">' + point.series.name + '<b style="margin-left: 3px;">' + value + '%' + '</b>' + colorCircle + '</div>';
              totalValue += Number(value); // Summing up the values
              totalCount++; // Counting the number of points
            });
            const averageValue = totalValue / totalCount; // Calculating the average
            tooltip += '<div style="text-align: right;display:flex; align-items: center; justify-content: right;margin-right:14px">סה"כ נבדקים חיוביים<b style="margin-left: 3px;">' + averageValue.toFixed(2) + '%' + '</b></div>';
          }
          return tooltip;
        },
        style:{
         color:this.color
        },
     backgroundColor:this.cardBackround,
      borderColor:'white',
      borderWidth:1
      },
      series: [
        {
          
          name: 'PCRחיוביים ב',
          type: 'line',
          data: this.data1,

          color: 'rgb(80, 203, 253)',
          states: {
            hover: {
              enabled: true, // Disable the hover effect for the male series
            },
          },
          marker: {
            enabled: false, // Enable markers
            symbol: 'circle', // Use circle as marker symbol
            radius: 2, // Set marker radius
            states: {
              hover: {
                enabled: true, // Enable marker hover effect
              },
            },
          },
        },
        {
          name: 'חיוביים באנטיגן מוסדי',
          type: 'line',
          data: this.data2,
          color: 'rgb(182, 202, 81)',
          states: {
            hover: {
              enabled: true, // Disable the hover effect for the male series
            },
          },
          marker: {
            enabled: false, // Enable markers
            symbol: 'circle', // Use circle as marker symbol
            radius: 2, // Set marker radius
            states: {
              hover: {
                enabled: true, // Enable marker hover effect
              },
            },
          },
        },
      ],
    };

    Highcharts.chart('container3', options);
  }

  // Generate sample data for the given date range
  generateData(startDate: Date, endDate: Date): [number, number][] {
    const data: [number, number][] = [];
    const start = startDate.getTime();
    const end = endDate.getTime();

    for (let i = start; i <= end; i += 24 * 3600 * 1000) {
      const timestamp = i;
      const value = Math.random() * 30; // Random value for demonstration
      data.push([timestamp, value]);
    }

    return data;
  }

  // Generate tick positions for the x-axis based on the data points
  generateTickPositions(data: [number, number][]): number[] {
    const tickPositions: number[] = [];
    const numTicks = 9;
    const step = Math.ceil(data.length / (numTicks - 1));

    for (let i = 0; i < data.length; i += step) {
      tickPositions.push(data[i][0]);
    }

    return tickPositions;
  }
}

