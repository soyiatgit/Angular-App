import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.css']
})
export class AverageComponent implements OnInit {
	
  @Input() data : any;
  
  constructor() { }

  ngOnInit() {
  }

}
