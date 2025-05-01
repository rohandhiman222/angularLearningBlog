import { Component } from '@angular/core';
import { PrismHighlighterComponent } from '../../prism-highlighter/prism-highlighter.component';
import { CardComponent } from '../../shareui/card/card.component';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-learn-ng-content',
  imports: [PrismHighlighterComponent, CardComponent, MarkdownComponent],
  providers: [
    // Provide MarkdownService if you need it in your component
  ],
  templateUrl: './learn-ng-content.component.html',
  styleUrl: './learn-ng-content.component.css',
  standalone: true,
})
export class LearnNgContentComponent {
  codeHere: any = `class MyClass {
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
}
