import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './components/app/app.component';
import { UsersComponent } from './components/users/users.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { HeaderComponent } from './components/header/header.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { UsersService } from './services/users.service';
import { CompService } from './services/comp.service';
import { InitialsPipe } from './pipes/initials.pipe';
import { HostComponent } from './components/host/host.component';
import { CompHostDirective } from './directives/comp-host.directive';
import { PoorComponent } from './components/poor/poor.component';
import { AverageComponent } from './components/average/average.component';
import { GoodComponent } from './components/good/good.component';
import { ReactiveFormComponent } from './components/reactiveForm/reactiveForm.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUsersComponent,
    HeaderComponent,
    DialogComponent,
    InitialsPipe,
    HostComponent,
    CompHostDirective,
    PoorComponent,
    AverageComponent,
    GoodComponent,
    ReactiveFormComponent
  ],
  entryComponents: [ 
	PoorComponent,
	AverageComponent,
	GoodComponent 
  ],
  imports: [
    BrowserModule,
	FormsModule,
  AppRoutingModule,
  ReactiveFormsModule
  ],
  providers: [UsersService, CompService],
  bootstrap: [AppComponent]
})
export class AppModule { }
