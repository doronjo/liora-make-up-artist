import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';  
import { DJGalleryService } from '../service/gallery.service';
import { DJTileComponent } from '../tile/tile.component';
import _ from 'lodash';

@Component({
  selector:'dj-gallery',
  templateUrl: './gallery.component.html',
  styleUrls:['./gallery.component.scss'],

})
export class DJGalleryComponent implements AfterContentInit{
  
  private galleryItemSubscription:Subscription;
  @ContentChildren(DJTileComponent) galleryItems: QueryList<DJTileComponent>
  private galleryItemsArray:Array<any>;
  public isGalleryPopupOpen = false;
  public selectedItem:any = {};
  public selectedItemIndex:number;

  constructor(private _djGalleryService : DJGalleryService){
    this.galleryItemsArray = new Array<any>();
    this.galleryItemSubscription = this._djGalleryService.galleryItem.subscribe(
      (item)=>{
        this.selectedItem = item;
        console.log(this.galleryItemsArray);
        console.log(this.selectedItem);
        this.selectedItemIndex = this.galleryItemsArray.findIndex((item)=>{ return item.id ===this.selectedItem.id});
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

  public back(event:any){
    event.stopPropagation();
    if(this.galleryItemsArray[this.selectedItemIndex -1]){
      this.selectedItem = this.galleryItemsArray[this.selectedItemIndex -1];
      this.selectedItemIndex --;
    }
  }

  public forward(event:any){
    event.stopPropagation();
    if(this.galleryItemsArray[this.selectedItemIndex +1]){
      this.selectedItem = this.galleryItemsArray[this.selectedItemIndex +1];
      this.selectedItemIndex ++;
    }
    console.log("forward");
  }

  public ngAfterContentInit(){
    this.galleryItems.forEach((item)=>{
      this.galleryItemsArray.push({id:item.id,title:item.title,description: item.description, src:item.src});
    })
  }

}  