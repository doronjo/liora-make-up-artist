import { Component } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';  
import {DJGalleryService} from '../service/gallery.service';
@Component({
  selector:'dj-gallery',
  templateUrl: './gallery.component.html',
  styleUrls:['./gallery.component.scss'],

})
export class DJGalleryComponent {
  
  private galleryItemSubscription:Subscription;
  public isGalleryPopupOpen = false;
  public selectedItem:any = {};

  constructor(private _djGalleryService : DJGalleryService){

    this.galleryItemSubscription = this._djGalleryService.galleryItem.subscribe(
      (item)=>{
        this.selectedItem = item;
        this.openGalleryPopup(item);
    });
  }

  public openGalleryPopup(item){
    this.isGalleryPopupOpen = true;
    console.log(item);
  }

  public closeGalleryPopup(){
    this.isGalleryPopupOpen = false;
  }
}  