import { Injectable } from '@angular/core';

@Injectable()
export class PropertyService {

  public showXAxis:boolean = true;
  public showYAxis:boolean = true;
  
  constructor() { }

 onToggleShowXAxisChange() {
    this.showXAxis = !this.showXAxis;
  }

  onToggleShowYAxisChange() {
    this.showYAxis = !this.showYAxis;
  }

}