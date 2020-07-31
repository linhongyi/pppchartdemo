import { Component, OnInit } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { PropertyService } from "../property.service";

@Component({
  selector: "app-horizontalbarchart",
  templateUrl: "./horizontalbarchart.component.html",
  styleUrls: ["./horizontalbarchart.component.css"]
})
export class HorizontalbarchartComponent implements OnInit {
  single = [
    {
      name: "Germany",
      value: 8940000
    },
    {
      name: "USA",
      value: 5000000
    },
    {
      name: "France",
      value: 7200000
    }
  ];

  view: [number, number] = [700, 400];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = "Country";
  showYAxisLabel: boolean = true;
  xAxisLabel: string = "Population";

  panelOpenState = false;

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  constructor(public propertyService:PropertyService) {
    // Object.assign(this, { this.single });
  }

  ngOnInit() {}

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }

  
}
