import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentTableComponent } from './main-content-table.component';

describe('MainContentTableComponent', () => {
  let component: MainContentTableComponent;
  let fixture: ComponentFixture<MainContentTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainContentTableComponent]
    });
    fixture = TestBed.createComponent(MainContentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
