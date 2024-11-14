import { Section3Component } from './../../sections/section3/section3.component';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-active-patients-age-and-vaccination-graph',
  templateUrl: './active-patients-age-and-vaccination-graph.component.html',
  styleUrl: './active-patients-age-and-vaccination-graph.component.scss',
})
export class ActivePatientsAgeAndVaccinationGraphComponent implements OnInit {
  constructor( private section3Component:Section3Component){}
  color='var(--color)'
  backround = 'var(--backround)'
  cardBackround = 'var(--card-backround)'
  data1:number[]=[12, 20, 20, 1, 10, 15, 12, 16, 19, 1]
  data2:number[]=[16, 50, 10, 30, 9, 15, 12, 58, 36, 4]
  data3:number[]=[16, 50, 50, 32, 4, 10, 46, 10, 6, 14]
  ngOnInit(): void {
    this.initializeChart();
    this.section3Component.data1.subscribe((data)=>{
    this.data1=data

    })
    this.section3Component.data2.subscribe((data)=>{
      this.data2=data

      })
      this.section3Component.data3.subscribe((data)=>{
        this.data3=data
        this.initializeChart();
        })
  }

  initializeChart(): void {
    const options: Highcharts.Options = {
      chart: {
        type: 'column',
        backgroundColor:this.backround
      },
      legend: {
        rtl: true,
        align: 'right',
        verticalAlign: 'top',
        layout: 'horizontal',
        x: 0,
        y: 20,
        symbolPadding: 5,
        symbolWidth: 12, // Adjust the width of the color point symbol

        itemStyle: { 
               symbol: 'circle',
          // Adjust the width of each legend item to provide space for the color point
          whiteSpace: 'nowrap', // Prevent the legend item from wrapping
          textOverflow: 'ellipsis', // Add ellipsis (...) if the text overflows
          cursor: 'default',
          color:this.color
        },
      },
      title: {
        text: undefined,
      },
      subtitle: {
        text: '',
        align: 'left',
      },
      xAxis: {
        title: {
          text: 'קבוצת גיל',
          style:{
            color:this.color
          }
        },
        categories: [
          '5-11',
          '12-15',
          '16-19',
          '20-29',
          '30-39',
          '40-49',
          '50-59',
          '60-69',
          '70-79',
          '80+',
        ],
        crosshair: {
          width: 1,
          color: 'grey',
          zIndex: 3,
        },
        accessibility: {
          description: 'Age',
        },
        gridLineWidth: 1,
        labels: {
          rotation: -45, // Rotate the labels by -45 degrees
          align: 'right', // Align the labels to the right side of the category
          style: {
            fontSize: '12px', // Adjust font size if needed
            fontFamily: 'Arial', // Adjust font family if needed
            whiteSpace: 'nowrap', // Prevent the labels from wrapping
            color:this.color
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'מספר חולים פעילים',
          style:{
            color:this.color
          }
        },
        labels: {
          style:{
            color:this.color
          },
          formatter: function () {
            return this.value.toLocaleString(); // Format the yAxis labels without 'k'
          },
        },
        gridLineWidth: 1,
        tickAmount: 6,
      },
      plotOptions: {
        series: {
          states: {
            inactive: {
              opacity: 1, // Set the opacity to 1 for the inactive state
            },
          },
        },
        column: {
          pointPadding: 0, // Set pointPadding to 0 to remove padding between bars
          borderWidth: 0,
          events: {
            legendItemClick: function () {
              return false;
            },
          },
        },
        bar: {
          // Adjust options for the bar type
          borderRadius: 0, // Example customization, you can add more as needed
          borderWidth: 0,
        },
      },
      tooltip: {

          shared: true, // Enable shared tooltip for multiple series
          headerFormat: '<div style="font-size: 13px;text-align: right;"><b>{point.key}</b></div>', // Customize the header format
          pointFormat: '<div  style="text-align: right;display:flex; align-items: center; justify-content: right;"> {series.name} <b style="margin-left: 3px;">{point.y}</b><div style="background-color:{series.color}; border-radius:50%; width: 10px;height: 10px; margin-left: 5px;"> </div> </div>', // Customize the point format
          useHTML: true, // Allow HTML formatting in the tooltip
          style:{
            color:this.color
           },
        backgroundColor:this.cardBackround,
         borderColor:'white',
         borderWidth:1

        // formatter: function () {
        //   // Check if this.point.y is defined
        //   if (this.point.y !== undefined) {
        //     return '<div class="tooltip-container">' +
        //              '<span class="tooltip-category"><b>' + this.point.category + '</b></span><br/>' +
        //              '<span class="tooltip-name" style="color:' + this.series.color + '"></span><b>' + this.series.name + '<br/>' +
        //              '<span class="tooltip-population">Population: ' + Math.abs(this.point.y) + '%</span>'+
        //            '</div>';
        //   } else {
        //     return ''; // Or handle the case when this.point.y is undefined
        //   }
        // }
      },

      series: [
        {
          name: 'לא מחוסנים',
          type: 'column', // Specify type here
          data: this.data1,
          color: 'rgb(80, 203, 253)',
          states: {
            hover: {
              enabled: false, // Disable the hover effect for the male series
            },
          },
        },
        {
          name: 'מחוסנים ללא תוקף',
          type: 'column', // Specify type here
          data: this.data2,
          color: 'rgb(182, 202, 81)',
          states: {
            hover: {
              enabled: false, // Disable the hover effect for the male series
            },
          },
        },
        {
          name: 'מחוסנים',
          type: 'column', // Specify type here
          data: this.data3,
          color: 'rgb(0, 127, 127)',
          states: {
            hover: {
              enabled: false, // Disable the hover effect for the male series
            },
          },
        },
      ],
    };

    Highcharts.chart('container', options);
  }
}
