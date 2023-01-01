import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharcterGenComponent } from './charcter-gen.component';

describe('CharcterGenComponent', () => {
  let component: CharcterGenComponent;
  let fixture: ComponentFixture<CharcterGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharcterGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharcterGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
