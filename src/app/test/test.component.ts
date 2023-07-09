import { NgIf } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'mr-test',
  standalone: true,
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  imports: [NgIf],
})
export class TestComponent {
  @Input({ transform: booleanAttribute }) test = false;
}
