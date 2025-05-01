import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import 'tailwindcss/tailwind.css'; // 👈 Force include Tailwind

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
