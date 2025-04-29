import { Component } from '@angular/core';
import { PrismHighlighterComponent } from '../../prism-highlighter/prism-highlighter.component';

@Component({
  selector: 'app-learn-ng-content',
  imports: [PrismHighlighterComponent],
  templateUrl: './learn-ng-content.component.html',
  styleUrl: './learn-ng-content.component.css',
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
}
