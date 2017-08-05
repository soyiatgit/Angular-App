import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {


	  public visible = false;
	  private visibleAnimate = false;

	  constructor(){}

	  public show(): void {
		this.visible = true;
		setTimeout(() => this.visibleAnimate = true, 100);
	  }

	  public hide(): void {
		this.visibleAnimate = false;
		setTimeout(() => this.visible = false, 300);
	  }

	  public onContainerClicked(event: MouseEvent): void {
		if ((<HTMLElement>event.target).classList.contains('modal')) {
		  this.hide();
		}
	  }
	
}
