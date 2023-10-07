import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAnimaitionComponent } from './svg-animaition.component';

describe('SvgAnimaitionComponent', () => {
  let component: SvgAnimaitionComponent;
  let fixture: ComponentFixture<SvgAnimaitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SvgAnimaitionComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SvgAnimaitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
