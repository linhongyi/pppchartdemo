import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-verticalbarchart',
  templateUrl: './verticalbarchart.component.html',
  styleUrls: ['./verticalbarchart.component.css']
})
export class VerticalbarchartComponent implements OnInit {

  single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }
];

  multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];

  view:[number,number] = [700, 400];

  // options
 
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(public propertyService:PropertyService) { 
    // Object.assign(this, { single })
  }

  ngOnInit() {
  }

 
  onSelect(event) {
    console.log(event);
  }
}