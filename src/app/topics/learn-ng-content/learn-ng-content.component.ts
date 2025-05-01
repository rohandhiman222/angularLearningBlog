import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-learn-ng-content',
  standalone: true,
  imports: [
    MarkdownModule,

    // Import necessary components here
  ],
  providers: [MarkdownService],
  templateUrl: './learn-ng-content.component.html',
  styleUrls: ['./learn-ng-content.component.css'],
})
export class LearnNgContentComponent {
  codeHere: any = `class MyClass {.forRoot()
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax`;

  markdown = `## Markdown __rulez__!
---

### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`

### Lists
1. Ordered list
2. Another bullet point
   - Unordered list
   - Another unordered bullet

### Blockquote
> Blockquote to the max`;

  markdownPath = '/assets/sample.md';

  constructor(
    private markdownService: MarkdownService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Customize heading renderer if needed
    // this.markdownService.renderer.heading = ({
    //   tokens,
    //   depth,
    // }: {
    //   tokens: any[];
    //   depth: number;
    // }) => {
    //   const text =
    //     tokens[0]?.text || tokens.map((token) => token.text || '').join('');
    //   const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    //   return `<h${depth} id="${escapedText}"><a class="anchor" href="#${escapedText}"><span class="header-link"></span></a>${text}</h${depth}>`;
    // };
  }

  onLoad(): void {
    console.log('Markdown loaded');
  }

  onError(error: string | Error): void {
    console.error('Markdown error:', error);
  }
}
