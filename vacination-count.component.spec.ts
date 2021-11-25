import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinationCountComponent } from './vacination-count.component';

describe('VacinationCountComponent', () => {
  let component: VacinationCountComponent;
  let fixture: ComponentFixture<VacinationCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinationCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinationCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
