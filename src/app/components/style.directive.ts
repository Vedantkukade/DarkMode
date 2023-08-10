import { AfterViewInit, Directive ,ElementRef,HostBinding,HostListener, ViewChild} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective{
  
  constructor() { 
    
  }
  



  @HostBinding('class') classname='light';
  

  @HostListener('click') onClick(){

   

    if(this.classname=="light"){
      this.classname="dark";
      
    }else{
      this.classname="light";
      
    }
    
  }
}
