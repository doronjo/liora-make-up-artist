
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { MaterializeModule } from 'ng2-materialize';
import { AppComponent } from './components/app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialsComponent } from './components/socials/socials.component';
import { HomeComponent } from './components/home/home.component';
import { MakeupComponent } from './components/makeup/makeup.component';
import { DJTileComponent } from './components/common/tile-gallery/tile/tile.component';
import { DJGalleryComponent } from './components/common/tile-gallery/gallery/gallery.component';
import { DJGalleryService } from './components/common/tile-gallery/service/gallery.service';
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
    HomeComponent,
    DJGalleryComponent,
    DJTileComponent,
    MakeupComponent
  ],
  providers:[
    DJGalleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }