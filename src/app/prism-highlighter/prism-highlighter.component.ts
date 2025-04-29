import { Component, Input } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
@Component({
  selector: 'app-prism-highlighter',
  imports: [HighlightModule],
  templateUrl: './prism-highlighter.component.html',
  styleUrl: './prism-highlighter.component.css',
  standalone: true,
})
export class PrismHighlighterComponent {
  @Input() code: string = '';
  @Input() language: string = 'typescript';
}
