import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnInit, OnDestroy } from '@angular/core';

import { CompHostDirective } from '../../directives/comp-host.directive';
import { Comp } from '../../models/comp';
import { CompService } from '../../services/comp.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit, AfterViewInit, OnDestroy {
  comps: Comp[];
  @ViewChild(CompHostDirective) compHost: CompHostDirective;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private _compService : CompService) { }
	
  ngOnInit() {
    this.comps = this._compService.getComps();
    this.loadComponent(1);
  }
  
  ngAfterViewInit() {
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent(compIndex : number) {
    let comp = this.comps[compIndex - 1];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp.component);

    let viewContainerRef = this.compHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = comp.data;
  }

  switchComponents(comp : number){
    this.loadComponent(comp);
  }

}
