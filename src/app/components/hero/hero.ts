import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTypedJsModule } from 'ngx-typed-js'; 

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgxTypedJsModule, TranslateModule], 
  templateUrl: './hero.html',
})
export class Hero {}