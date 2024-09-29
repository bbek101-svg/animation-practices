import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'border-naimation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './border-naimation.component.html',
  styleUrl: './border-naimation.component.scss'
})
export class BorderNaimationComponent {

  myArray: number[] = Array.from<number>([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

  @ViewChildren('box') elemRef: QueryList<ElementRef>;
  constructor(private renderer: Renderer2) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.elemRef.forEach(element => {
      const el = element.nativeElement
      this.renderer.setStyle(el, 'background', `radial-gradient(200px circle at ${event.clientX - el.offsetLeft}px ${event.clientY - el.offsetTop}px, #9171f8, transparent)`);
    })
  }
}
