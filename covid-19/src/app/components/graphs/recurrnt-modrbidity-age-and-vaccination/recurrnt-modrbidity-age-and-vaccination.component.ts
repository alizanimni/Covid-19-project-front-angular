import { Section7Component } from './../../sections/section7/section7.component';
import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-recurrnt-modrbidity-age-and-vaccination',
  templateUrl: './recurrnt-modrbidity-age-and-vaccination.component.html',
  styleUrl: './recurrnt-modrbidity-age-and-vaccination.component.scss'
})
export class RecurrntModrbidityAgeAndVaccinationComponent implements OnInit {
constructor(private section7Component:Section7Component){}
color='var(--color)'
backround = 'var(--backround)'
cardBackround = 'var(--card-backround)'
 data1:number[] =[4, 4, 6, 15, 12,86,102,63,89,45]
 data2:number[] =[5, 3, 12, 6, 11,111,156,16,86,95]
  ngOnInit(): void {
    this.initializeChart();
    this.section7Component.data1.subscribe((data)=>{
     this.data1=data
     console.log(data);
     this.initializeChart();
     
    })
    this.section7Component.data2.subscribe((data)=>{
      this.data2=data
      console.log(data);
      this.initializeChart();
      
     })
  }
// data1:number[] =[4, 4, 6, 15, 12,86,102,63,89,45]
// data2:number[] =[5, 3, 12, 6, 11,111,156,16,86,95]

  initializeChart(): void {
    // Age categories
    const categories = [
      '0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90+'
    ];

    const options: Highcharts.Options = {
      chart: {
        type: 'bar',
        backgroundColor:this.backround
    },
    legend: {
      
      rtl: true,
      align: 'right',
      verticalAlign: 'top',
      layout: 'horizontal',
      x: 0,
      y: 20,
      
      symbolPadding: 2,
      symbolWidth: 12, // Adjust the width of the color point symbol
      itemStyle: {
        // Adjust the width of each legend item to provide space for the color point
        whiteSpace: 'nowrap', // Prevent the legend item from wrapping
        textOverflow: 'ellipsis', // Add ellipsis (...) if the text overflows
        cursor: 'default' ,
        color:this.color
      },
    },
    title: {
        text: undefined,

    },
    xAxis: {
      title:{
        text: 'קבוצת גיל',
        style:{
          color:this.color
        }
      },
        categories: ['80+', '70-79', '60-69', '50-59', '40-49','30-39','20-29','16-19','12-15','5-11'],
        crosshair: {
          width: 1,
          color:'grey',
          zIndex: 3
      },
      gridLineWidth:1,
      labels:{
        style:{
          color:this.color
        }
      }
    },
    yAxis: {

        min: 0,
        title: {
            text:'מספר בחולים בתחלואה חוזרת',
            style:{
                color:this.color
            }
        },
        tickAmount: 6,
        tickColor:this.color,
        labels:{
          style:{
            color:this.color
          }
        }
    },
    plotOptions: {

        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: false // Disable data labels
            },
            states: {
              inactive: {
                
                opacity: 1 // Set the opacity to 1 for the inactive state
              }
            },

        },
        
        column:{
          borderWidth: 0,
          pointPadding: 0 ,

        },
        bar:{
          borderRadius:0,
          borderWidth: 0,         
        }
        
    },
    tooltip:{
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
    },
    // style="color:{series.color}
    series: [{
      
        name:'לא מחוסנים',
        type: 'bar',
        data: this.data1,
        color: 'rgb(80, 203, 253)',
        states: {
          hover: {
            enabled: false // Disable the hover effect for the male series
          }
        },
    }, {

        name: 'מחוסנים', 
        type: 'bar',
        data: this.data2,
        color: 'rgb(0, 127, 127)',
        states: {
          hover: {
            enabled: false
          }
        },
    }]
}

    Highcharts.chart('container5', options);

    document.getElementById('customButton')?.addEventListener('click', () => {
      // Your button click event handling code here
      console.log('Button clicked');
  });
  }
}
