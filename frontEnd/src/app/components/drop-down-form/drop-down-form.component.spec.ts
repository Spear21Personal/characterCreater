import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownFormComponent } from './drop-down-form.component';

describe('DropDownFormComponent', () => {
  let component: DropDownFormComponent;
  let fixture: ComponentFixture<DropDownFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DropDownFormComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(DropDownFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
