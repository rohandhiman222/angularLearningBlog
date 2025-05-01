import { Component } from '@angular/core';
import { AsidebarComponent } from '../../layout/asidebar/asidebar.component';
import { BLOG_POSTS } from './blog-posts';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [AsidebarComponent, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  posts = BLOG_POSTS;
}
