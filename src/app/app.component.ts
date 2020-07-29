import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  public name = 'Angular ' + VERSION.major;
  public selected:string = 'HorizontalBarChart';


  constructor(public router:Router)
  {
    
  }

  changeValue()
  {
     this.router.navigate(['/'+this.selected]);
  }
}
