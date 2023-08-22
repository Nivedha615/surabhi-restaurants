import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AdminadduserComponent } from './adminadduser.component';

describe('AdminadduserComponent', () => {
  let component: AdminadduserComponent;
  let fixture: ComponentFixture<AdminadduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminadduserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminadduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have mat-toolbar as header',() =>{
    let toolbar = fixture.debugElement.query(By.css('mat-form-field'))
    expect(toolbar).toBeTruthy();
  });
});
