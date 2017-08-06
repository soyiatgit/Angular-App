import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './components/lazy/lazy.component';
import { LinkComponent } from './components/lazylink/lazylink.component';

@NgModule({
  declarations: [
    LazyComponent,
	LinkComponent
  ],
  imports: [
    CommonModule,
	LazyRoutingModule
  ]
})
export class LazyModule { }
