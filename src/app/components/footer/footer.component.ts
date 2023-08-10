import { Component , HostBinding} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  one="primary"
  @HostBinding('style.bakground') bgname='black';
  
}
