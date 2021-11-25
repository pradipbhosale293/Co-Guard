import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVacinationComponent } from './search-vacination.component';

describe('SearchVacinationComponent', () => {
  let component: SearchVacinationComponent;
  let fixture: ComponentFixture<SearchVacinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchVacinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVacinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
