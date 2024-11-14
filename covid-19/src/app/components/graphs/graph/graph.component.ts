import { Section1Component } from './../../sections/section1/section1.component';
import { Component, OnInit, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
    color='var(--color)'
    backround = 'var(--backround)'
    cardBackround = 'var(--card-backround)'
  startDate!: Date
  endDate!: Date
  data1: [number, number][] = [];
  data2: [number, number][] = [];
  data3: [number, number][] = [];
  constructor(private elementRef: ElementRef, private section1Component:Section1Component) {}
  isShowData!: boolean[]
  ngOnInit(): void {
    this.section1Component.startDate.subscribe((date)=>{
        this.startDate=date
        this.initializeChart()
    })
    this.section1Component.endDate.subscribe((date)=>{
        this.endDate=date
    })
    this.section1Component.checkBoxSelection.subscribe((selection)=>{
       this.isShowData=selection
       this.initializeChart()
    })

    this.initializeChart()

  }

  initializeChart(): void {
        this.data1 =this.isShowData[2]? this.generateData1(this.startDate, this.endDate):[];
    this.data2 =this.isShowData[1]? this.generateData2(this.startDate, this.endDate):[];
    this.data3 =this.isShowData[0]? this.generateData3(this.startDate, this.endDate):[];
    let dataforticks:any[] = [];
    if (this.data1.length !== 0) {
      dataforticks = this.data1;
    } else if (this.data2.length !== 0) {
      dataforticks = this.data2;
    } else if (this.data3.length !== 0) {
      dataforticks = this.data3;
    }
    const tickPositions = this.generateTickPositions(dataforticks);
    const options: Highcharts.Options = {

        chart: {
          type: 'area',
         backgroundColor: this.backround
          
        },
        title: {
          text: undefined,
        },
        legend: {
          enabled: false,
        },
        yAxis: {
    
          title: {
            text: 'מספר המאושפזים',
        style:{
            color:this.color
        }
          },
          color:'white',
          tickAmount: 6,

   labels:{
  style:{
  color:this.color
  }
   }
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
            format: '{value:%d.%m}',
       style:{
        color:this.color
       }
          },
          tickPositions: tickPositions,
          tickColor:this.color,
          crosshair: {
            width: 1,
            color: 'grey',
            zIndex: 3,
          },
          lineColor:this.color
        },
        tooltip: {
          shared: true,
          useHTML: true,
          formatter: function () {
            const weekdays = [
              'יום א',
              'יום ב',
              'יום ג',
              'יום ד',
              'יום ה',
              'יום ו',
              'שבת',
            ];
            const date = new Date(Number(this.x));
            const day = weekdays[date.getDay()];
            let tooltip =
              '<div style="padding:3px;font-size: 13px;text-align: right;"><b>' +
              day +
              ', ' +
              Highcharts.dateFormat('%d.%m.%y', Number(this.x)) +
              '</b></div>'; // Header
            if (this.points) {
              let points = this.points;
              let totalValue = 0;
              let totalCount = 0;
              points.forEach(function (point) {
                let value = Math.abs(point.y ?? 0);
                let colorCircle =
                  '<div style="background-color:' +
                  point.color +
                  '; border-radius:50%; width: 10px;height: 10px; margin-left: 5px;"> </div>';
                tooltip +=
                  '<div style="text-align: right;display:flex; align-items: center; justify-content: right;">' +
                  point.series.name +
                  '<b style="margin-left: 3px;">' +
                  value +
                  '</b>' +
                  colorCircle +
                  '</div>';
  
              });
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
        plotOptions: {
          area: {
            stacking: 'normal',
            lineColor: 'white',
            lineWidth: 0.1,
                states: {
                  hover: {
                      enabled: true, // Enable hover effect for the marker
                      lineWidthPlus: 0, // Prevent line width from changing on hover
   
                  }
                }
              
            },
          },
        series: [
          {
            name: 'קשה',
            type: 'area',
            data: this.data1,
            color: 'rgba(0, 127, 127, 0.9)',
            shadow: false,
            marker: {
              enabled: false,
              symbol: 'circle',
              lineColor: 'white',
              lineWidth: 0.1,
              radius: 2,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
            lineColor: 'rgb(0, 127, 127)',
            lineWidth: 2,
          },
          {
            name: 'בינוני',
            type: 'area',
            data: this.data2,
            color: 'rgb(182, 202, 81, 0.9)',
            marker: {
              enabled: false,
              symbol: 'circle',
              lineColor: 'white',
              lineWidth: 0.1,
  
              radius: 2,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
            lineColor: 'rgb(182, 202, 81)',
            lineWidth: 2,
          },
          {
            name: 'קל',
            type: 'area',
            data: this.data3,
            color: 'rgb(80, 203, 253,0.9)',
            shadow: false,
            marker: {
              enabled: false,
              symbol: 'circle',
              lineColor: 'white',
              lineWidth: 0.1,
              radius: 2,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
            lineColor: 'rgb(80, 203, 253)',
            lineWidth: 2,
          },
        ],
      };
  
      Highcharts.chart(
        this.elementRef.nativeElement.querySelector('#container10'),
        options
      );

  }
  
  generateData1(startDate: Date, endDate: Date): [number, number][] {
    const data: [number, number][] = [];
    const start = startDate.getTime();
    const end = endDate.getTime();

    for (let i = start; i <= end; i += 24 * 3600 * 1000) {
      const timestamp = i;
      const value = Math.floor(Math.random() * 50) + 120; // Random value for demonstration
      data.push([timestamp, value]);
    }

    return data;
  }

  generateData2(startDate: Date, endDate: Date): [number, number][] {
    const data: [number, number][] = [];
    const start = startDate.getTime();
    const end = endDate.getTime();

    for (let i = start; i <= end; i += 24 * 3600 * 1000) {
      const timestamp = i;
      const value = Math.floor(Math.random() * 20);
      data.push([timestamp, value]);
    }

    return data;
  }
  generateData3(startDate: Date, endDate: Date): [number, number][] {
    const data: [number, number][] = [];
    const start = startDate.getTime();
    const end = endDate.getTime();

    for (let i = start; i <= end; i += 24 * 3600 * 1000) {
      const timestamp = i;
      const value = Math.floor(Math.random() * 30) + 20;
      data.push([timestamp, value]);
    }

    return data;
  }

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
