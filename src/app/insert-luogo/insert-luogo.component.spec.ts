import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InsertLuogoComponent } from './insert-luogo.component';

describe('InsertLuogoComponent', () => {
  let component: InsertLuogoComponent;
  let fixture: ComponentFixture<InsertLuogoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertLuogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertLuogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
