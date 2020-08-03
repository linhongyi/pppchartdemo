import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Years';
  maxRadius: number = 25;
  minRadius: number = 5;
  yScaleMin: number = 70;
  yScaleMax: number = 85;
  // xScaleMin: number = 70;
  // xScaleMax: number = 200;
  roundDomains : boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  bubbleData = [
  {
    name: 'Germany',
    series: [
      {
        name: '2010',
        x: '2010',
        y: 80.3,
        r: 80.4
      },
      {
        name: '2000',
        x: '2000',
        y: 80.3,
        r: 78
      },
      {
        name: '1990',
        x: '1990',
        y: 75.4,
        r: 79
      }
    ]
  },
  {
    name: 'United States',
    series: [
      {
        name: '2010',
        x: '2010',
        y: 78.8,
        r: 310
      },
      {
        name: '2000',
        x: '2000',
        y: 76.9,
        r: 283
      },
      {
        name: '1990',
        x: '1990',
        y: 75.4,
        r: 253
      }
    ]
  },
  {
    name: 'France',
    series: [
      {
        name: '2010',
        x: '2010',
        y: 81.4,
        r: 63
      },
      {
        name: '2000',
        x: '2000',
        y: 79.1,
        r: 59.4
      },
      {
        name: '1990',
        x: '1990',
        y: 77.2,
        r: 56.9
      }
    ]
  },
  {
    name: 'United Kingdom',
    series: [
      {
        name: '2010',
        x: '2010',
        y: 80.2,
        r: 62.7
      },
      {
        name: '2000',
        x: '2000',
        y: 77.8,
        r: 58.9
      },
      {
        name: '1990',
        x: '1990',
        y: 75.7,
        r: 57.1
      }
    ]
  }
];

  view:[number,number] = [800, 400];


  constructor(public propertyService:PropertyService) {
    // Object.assign(this, { bubbleData });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit() {
  }

}