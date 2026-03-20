import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-blog',
  imports: [TranslateModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  
public showPost = false;

  togglePost() {
    this.showPost = !this.showPost;
  }
}
