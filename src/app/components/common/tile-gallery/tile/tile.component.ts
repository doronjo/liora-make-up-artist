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
  public   id:string;
  constructor(private _djGalleryService : DJGalleryService){
    this.src = '';
    this.id = this.generateUniqID();
  }

  public getSrc(){
    return this.src;
  }
  public ngOnInit(){
    console.log(this.src);
  }

  public itemSelected(){
    var galleryItem = {
      id:this.id,
      src: this.src,
      title:this.title,
      description:this.description
    }
    this._djGalleryService.galleryItemSelected(galleryItem);
  }

  private generateUniqID(){

    var ts = new Date().toString();
			 var parts = ts.split( "" ).reverse();
			 var id = "";
			 
			 for( var i = 0; i < parts.length; ++i ) {
				var index = this._getRandomInt( 0, parts.length - 1 );
				id += parts[index];	 
			 }
			 
			 return id;
  }
  private _getRandomInt( min, max ) {
			return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
	}
}  