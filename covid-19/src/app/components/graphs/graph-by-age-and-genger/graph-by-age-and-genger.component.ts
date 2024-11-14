import { Section6Component } from './../../sections/section6/section6.component';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph-by-age-and-genger',
  templateUrl: './graph-by-age-and-genger.component.html',
  styleUrls: ['./graph-by-age-and-genger.component.scss']
})
export class GraphByAgeAndGengerComponent implements OnInit {
  color='var(--color)'
  backround = 'var(--backround)'
  cardBackround = 'var(--card-backround)'
  data1!:number[]
  data2!:number[]
  constructor(private section6Component:Section6Component){}
  ngOnInit(): void {
    this.initializeChart();
    this.section6Component.data1.subscribe((data)=>{
     this.data1=data
     this.initializeChart();
    })
    this.section6Component.data2.subscribe((data)=>{
      this.data2=data
      this.initializeChart();
     })
  }
 getPoint(point:number){
  console.log(point);
  
  return point
 }
  initializeChart(): void {
    // Age categories
    const categories = [
      '0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90+'
    ];

    const options: Highcharts.Options = {
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
          // Adjust the width of each legend item to provide space for the color point
            whiteSpace: 'nowrap', // Prevent the legend item from wrapping
            textOverflow: 'ellipsis', // Add ellipsis (...) if the text overflows
            cursor: 'default',
            color:this.color
        }
      },
      chart: {
        type: 'bar',
        // backgroundColor: '#374F60',
        backgroundColor:this.backround
      },   
      title: {
        text: undefined
    },
   
      accessibility: {
        point: {
          valueDescriptionFormat: '{index}. Age {xDescription}, {value}%.'
        }
      },
      xAxis: [{
        title: {
          text: 'קבוצת גיל',
          style:{
            color:this.color
          }
        },
 
        categories: categories,
        reversed: false,
        labels: {
          step: 1,
          style:{
            color:this.color
          }
        },
        crosshair: {
          width: 1,
          color:'grey',
          zIndex: 3
      },
        accessibility: {
          description: 'Age (male)'
        },
        gridLineWidth: 1      
      }, // mirror axis on right side

  
      ],
      yAxis: {
        title: {
          text: 'סה"כ %',
          style:{
            color:this.color
          }
        },
        labels: {
          formatter: function () {
            // Ensure that only positive values are displayed
            return Math.abs(Number(this.value)) + '';
          },
          style:{
            color:this.color,
          }
          
        },
        accessibility: {
          description: 'Percentage population',
          rangeDescription: 'Range: 0 to 30%'
        },
        
        gridLineWidth: 1, 
        tickInterval: 10 

      },

      plotOptions: {
        series: {
          states: {
            inactive: {
              opacity: 1 // Set the opacity to 1 for the inactive state
            }
          },
          events: {
            legendItemClick: function () {
                return false; 
            }
        },
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            
             formatter: function () {
              // Ensure that only positive values are displayed
              return Math.abs(Number(this.y)) + '%';
            }, // Display the percentage value
            inside: false, // Display the label outside the bar
            style:{


            }
          }
        },
        bar: { // Adjust options for the bar type
          borderRadius: 0, // Example customization, you can add more as needed
          borderWidth:0,
    
        },
        
      },

      tooltip: {
      
        shared: true, // Enable shared tooltip for multiple series
        useHTML: true,
formatter: function() {
          let tooltip = '<div style="font-size: 13px;text-align: right;"><b>' + this.x + '</b></div>'; // Header
          if (this.points) {
            let points = this.points;
            points.forEach(function(point) {
              let value = Math.abs(point.y ?? 0); // Using nullish coalescing operator to handle undefined or null
              let colorCircle = '<div style="background-color:' + point.color + '; border-radius:50%; width: 10px;height: 10px; margin-left: 5px;"> </div>';
              tooltip += '<div style="text-align: right;display:flex; align-items: center; justify-content: right;">' + point.series.name + '<b style="margin-left: 3px;">' + value + '%' + '</b>' + colorCircle + '</div>';
            });
          }
          return tooltip;
        },
        style:{
          color:this.color,
         },
      backgroundColor:this.cardBackround,
       borderColor:'white',
       borderWidth:1
      },

      series: [{
        type: 'bar', // Specify the type here
        name: 'נשים',
        data: this.data1,
        color: 'rgb(182, 202, 81)',
        states: {
          hover: {
            enabled: false // Disable the hover effect for the male series
          }
        },
        tooltip: {
    valuePrefix: '',
    valueSuffix: ' '
},


      }, {
        type: 'bar', // Specify the type here
        name: 'גברים',
        data: this.data2,

        color: 'rgb(80, 203, 253)',
   
        states: {
          hover: {
            enabled: false // Disable the hover effect for the male series
          }
        },
              tooltip: {
              
          valuePrefix: '',
          valueSuffix: ' '
      },



      }]
    };

    Highcharts.chart('containerr', options);
  }
}