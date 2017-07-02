
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { MaterializeModule } from 'ng2-materialize';
import { AppComponent } from './components/app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }