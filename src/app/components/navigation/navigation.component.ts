import { Component, HostListener } from '@angular/core';

@Component({
  selector:'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls:['./navigation.component.scss'],
})
export class NavigationComponent {
   
  public isScrollOver:boolean = false;
  constructor(){}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
     this.isScrollOver = window.pageYOffset > 170
  }
}   


