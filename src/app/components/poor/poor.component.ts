import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poor',
  templateUrl: './poor.component.html'
})
export class PoorComponent implements OnInit {
	
  @Input() data : any;
  
  constructor() { }

  ngOnInit() {
  }

}
