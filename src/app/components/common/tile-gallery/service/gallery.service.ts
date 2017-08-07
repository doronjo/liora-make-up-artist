import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DJGalleryService {
  private _galleryItemSource: Subject<any> = new Subject<boolean>();
  public galleryItem: Observable<any> = this._galleryItemSource.asObservable();

  public galleryItemSelected(galleryItem: any): void {
    this._galleryItemSource.next(galleryItem);
  }

}