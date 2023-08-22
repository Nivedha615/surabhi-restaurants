import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TodaybillComponent } from './todaybill.component';

describe('TodaybillComponent', () => {
  let component: TodaybillComponent;
  let fixture: ComponentFixture<TodaybillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaybillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaybillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have mat-toolbar as header',() =>{
    let toolbar = fixture.debugElement.query(By.css('mat-toolbar'))
    expect(toolbar).toBeTruthy();
  });
});
