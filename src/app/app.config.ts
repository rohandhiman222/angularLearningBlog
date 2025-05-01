import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHighlightOptions } from 'ngx-highlightjs';

import { routes } from './app.routes';
import { provideMarkdown } from 'ngx-markdown';
import { HttpClient, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'), // ✅ this is missing in your case
      languages: {
        xml: () => import('highlight.js/lib/languages/xml'),
        typescript: () => import('highlight.js/lib/languages/typescript'),
        javascript: () => import('highlight.js/lib/languages/javascript'),
        json: () => import('highlight.js/lib/languages/json'),
      },
      themePath: 'felipec.min.css', // Ensure this file exists in your assets
    }),
    provideRouter(routes),

    provideHttpClient(), // This provides HttpClient
    provideMarkdown(), // This configures ngx-markdown with HttpClient
  ],
};
