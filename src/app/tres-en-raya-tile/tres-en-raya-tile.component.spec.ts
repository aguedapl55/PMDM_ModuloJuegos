import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresEnRayaTileComponent } from './tres-en-raya-tile.component';

describe('TresEnRayaTileComponent', () => {
  let component: TresEnRayaTileComponent;
  let fixture: ComponentFixture<TresEnRayaTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TresEnRayaTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TresEnRayaTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
