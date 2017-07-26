import { Component } from '@angular/core';

@Component({
  selector:'app-footer',
  templateUrl: './footer.component.html',
  styleUrls:['./footer.component.scss'],
})
export class FooterComponent {
    
    public isMenuOpen;

    constructor(){
        this.isMenuOpen = false;
    }

    public toggleMenu(){
        this.isMenuOpen = !this.isMenuOpen;
        console.log(this.isMenuOpen);
    }
}   