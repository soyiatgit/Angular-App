import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private _route : ActivatedRoute, private _router : Router) { }

	  ngOnInit() {
	  }
	
	positive(){
		this._router.navigate([{ outlets: { dialog: null }}]);
	}
	
	negative(){
		this._router.navigate([{ outlets: { dialog: null }}]);
	}
	
}
