import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiseIssueComponent } from './rise-issue.component';

describe('RiseIssueComponent', () => {
  let component: RiseIssueComponent;
  let fixture: ComponentFixture<RiseIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiseIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiseIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
