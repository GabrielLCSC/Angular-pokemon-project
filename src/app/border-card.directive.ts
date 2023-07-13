import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;
  private defaultBorderStyle: string = 'dotted';
  private initialBorderStyle: string = 'double';


  constructor(private el: ElementRef) {
    this.setBorder('solid');
    this.setBorderColor('#f5f5f5');
    this.setHeight(180);
  }

  @Input('appBorderCard') borderColor: string; // alias
  @Input() borderStyle: string = this.defaultBorderStyle;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorderColor(this.borderColor || this.defaultColor);
    this.setBorder(this.borderStyle || this.defaultBorderStyle);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorderColor(this.initialColor);
    this.setBorder(this.initialBorderStyle);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
  setBorderColor(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

  setBorder(style: string) {
    this.el.nativeElement.style.borderStyle = `${style}`;
}
}
