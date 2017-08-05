import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.css']
})
export class GoodComponent implements OnInit {
	
  @Input() data : any;
  
  constructor() { }

  ngOnInit() {
  }

}
