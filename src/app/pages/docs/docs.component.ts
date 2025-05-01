import { Component } from '@angular/core';
import { PrismHighlighterComponent } from '../../prism-highlighter/prism-highlighter.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-docs',
  imports: [PrismHighlighterComponent, SidebarComponent],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css',
})
export class DocsComponent {
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
