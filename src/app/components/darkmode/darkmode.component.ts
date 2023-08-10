import { Component, HostListener, ViewChild } from '@angular/core';
import { ScrollbarComponent } from '../scrollbar/scrollbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css']
})
export class DarkmodeComponent {

  x = "primary"

  @ViewChild("scroll") bar!: ScrollbarComponent;
  @ViewChild("foot") footer!: FooterComponent;
  darkMode: boolean = false;

  @HostListener('window:keydown.control.d', ['$event'])
  switchdar(event: KeyboardEvent) {

    if (event.target instanceof HTMLButtonElement) {

      this.darkMode = !this.darkMode;

      if (this.bar.bgname == 'rgba(0, 0, 0, 0.068)') {

        this.x = "accent";
        this.bar.bgname = 'rgba(0, 0, 0, 0.600)';
        this.footer.one = 'accent';
      } else {

        this.x = "primary";
        this.bar.bgname = 'rgba(0, 0, 0, 0.068)';
        this.footer.one = 'primary';
      }

    }
  }

  switchdark() {

    this.darkMode = !this.darkMode;

    if (this.bar.bgname == 'rgba(0, 0, 0, 0.068)') {

      this.x = "accent";
      this.bar.bgname = 'rgba(0, 0, 0, 0.600)';
      this.footer.one = 'accent';
    } else {

      this.x = "primary";
      this.bar.bgname = 'rgba(0, 0, 0, 0.068)';
      this.footer.one = 'primary';
    }






  }

}



