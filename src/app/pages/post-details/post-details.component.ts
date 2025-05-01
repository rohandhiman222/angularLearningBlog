import { Component } from '@angular/core';
import { AsidebarComponent } from '../../layout/asidebar/asidebar.component';
import { PrismHighlighterComponent } from '../../prism-highlighter/prism-highlighter.component';

@Component({
  selector: 'app-post-details',
  imports: [AsidebarComponent, PrismHighlighterComponent],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent {
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
}
