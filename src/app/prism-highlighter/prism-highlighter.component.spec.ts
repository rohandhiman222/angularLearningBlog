import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismHighlighterComponent } from './prism-highlighter.component';

describe('PrismHighlighterComponent', () => {
  let component: PrismHighlighterComponent;
  let fixture: ComponentFixture<PrismHighlighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrismHighlighterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrismHighlighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
