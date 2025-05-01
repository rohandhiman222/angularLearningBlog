import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-asidebar',
  imports: [ProfileComponent],
  templateUrl: './asidebar.component.html',
  styleUrl: './asidebar.component.css',
})
export class AsidebarComponent {}
