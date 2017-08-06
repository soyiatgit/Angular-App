import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './components/lazy/lazy.component';
import { LinkComponent } from './components/lazylink/lazylink.component';

const routes: Routes = [
		{ path: '', redirectTo: 'lazyModule', pathMatch: 'full'},
		{ path: 'lazyModule', component: LazyComponent },
		{ path: 'lazyRoute', component: LinkComponent }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes) //a second param {enableTracing : true } logs all events in a route change
    ], 
    exports: [
        RouterModule
    ]
})
export class LazyRoutingModule { }
