import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TestComponent } from './test/test.component';

@Component({
  standalone: true,
  selector: 'mr-root',
  templateUrl: './app.component.html',
  imports: [NgOptimizedImage, TestComponent],
})
export class AppComponent {}
