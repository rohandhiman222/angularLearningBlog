import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

import { CommonModule } from '@angular/common';
import {
  heroHome,
  heroUsers,
  heroCog,
  heroQuestionMarkCircle,
  heroChevronDown,
  heroChevronUp,
  heroChevronLeft,
  heroChevronRight,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  providers: [
    provideIcons({
      heroHome,
      heroUsers,
      heroCog,
      heroQuestionMarkCircle,
      heroChevronDown,
      heroChevronUp,
      heroChevronLeft,
      heroChevronRight,
    }),
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  isCollapsed = false;
  openSubmenuIndex: number | null = null;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSubmenu(index: number) {
    this.openSubmenuIndex = this.openSubmenuIndex === index ? null : index;
  }

  menuItems = [
    { title: 'Dashboard', route: '/dashboard', icon: 'heroHome' },
    { title: 'Users', route: '/users', icon: 'heroUsers' },
    {
      title: 'Settings',
      route: '/settings',
      icon: 'heroCog',
      children: [
        { title: 'Ng Content', route: '/learn-ng-content' },
        { title: 'Security', route: '/settings/security' },
      ],
    },
    { title: 'Help', route: '/help', icon: 'heroQuestionMarkCircle' },
  ];
}
