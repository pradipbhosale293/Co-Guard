import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinatorComponent } from './vacinator.component';

describe('VacinatorComponent', () => {
  let component: VacinatorComponent;
  let fixture: ComponentFixture<VacinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
