import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  activeDropdown: 'framework' | 'language' | null = null;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.activeDropdown = null; // close dropdowns when opening menu
  }

  toggleDropdown(menu: 'framework' | 'language') {
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }
}
