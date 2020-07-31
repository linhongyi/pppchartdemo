import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { MatSelectionListChange } from "@angular/material/list";
import { PropertyService } from "./property.service";


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public name = "Angular " + VERSION.major;
  public selected: string = "HorizontalBarChart";
  public charts = [
    "HorizontalBarChart",
    "VerticalBarChart",
    "PipChart1",
    "PipChart2",
    "PipGridChart",
    "BubbleChart",
    "LineChart"
  ];

  constructor(public router: Router, public propertyService:PropertyService) {
    this.router.navigate(["/HorizontalBarChart"]);
  }

  listChangeValue(e) {

    var change:MatSelectionListChange = e;
    this.router.navigate(["/" + change.option.value]);
  }
}
