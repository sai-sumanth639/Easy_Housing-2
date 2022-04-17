import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyHousingComponent } from './easy-housing.component';

describe('EasyHousingComponent', () => {
  let component: EasyHousingComponent;
  let fixture: ComponentFixture<EasyHousingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyHousingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
