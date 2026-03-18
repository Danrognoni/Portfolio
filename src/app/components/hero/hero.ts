import { Component } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js'; 

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgxTypedJsModule], 
  templateUrl: './hero.html',
})
export class Hero {}