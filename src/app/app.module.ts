
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { MaterializeModule } from 'ng2-materialize';
import { AppComponent } from './components/app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialsComponent } from './components/socials/socials.component';
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
    FooterComponent,
    SocialsComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }