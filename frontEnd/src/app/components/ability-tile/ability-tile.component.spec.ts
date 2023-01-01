import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityTileComponent } from './ability-tile.component';

describe('AbilityTileComponent', () => {
  let component: AbilityTileComponent;
  let fixture: ComponentFixture<AbilityTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
