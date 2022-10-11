import { Directive, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDirectivas]'
})
export class DirectivasDirective implements OnInit{
 

    @HostListener('mouseleave') mouseleave(){
    console.log('Mouse en posición');
   this.renders.setStyle(this.element.nativeElement,"color", "red");
   this.renders.setStyle(this.element.nativeElement,"font-size", "150px");
   this.renders.setStyle(this.element.nativeElement,"transition-property", "font-size");
   this.renders.setStyle(this.element.nativeElement,"transition-duration", "2s");
   this.renders.setStyle(this.element.nativeElement,"transition-timing-function", "linear");
   this.renders.setStyle(this.element.nativeElement,"transition-delay", "1s");

   
  }

  @HostListener('click') mouseClick(){
    console.log('Presiono el mouse');
    this.renders.setStyle(this.element.nativeElement,"color", "blue");
    this.renders.setStyle(this.element.nativeElement,"font-size", "10px");
 
    
   }
 


  constructor(private renders: Renderer2, private element: ElementRef) { }
  
  ngOnInit(): void {

  }
  

}
