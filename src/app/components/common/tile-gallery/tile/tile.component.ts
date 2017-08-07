import { Component, Input , OnInit, OnChanges} from '@angular/core';
import {DJGalleryService} from '../service/gallery.service';

@Component({
  selector:'dj-tile',
  templateUrl: 'tile.component.html',
  styleUrls:['tile.component.scss'],

})
export class DJTileComponent implements OnInit {
  @Input() src:string;
  @Input() description:string;
  @Input() title:string;

  constructor(private _djGalleryService : DJGalleryService){
    this.src = '';
  }

  public getSrc(){
    return this.src;
  }
  public ngOnInit(){
    console.log(this.src);
  }

  public itemSelected(){
    var galleryItem = {
      src: this.src,
      title:this.title,
      description:this.description
    }
    this._djGalleryService.galleryItemSelected(galleryItem);
  }
}  