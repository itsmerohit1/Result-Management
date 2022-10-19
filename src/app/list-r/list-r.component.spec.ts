import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRComponent } from './list-r.component';

describe('ListRComponent', () => {
  let component: ListRComponent;
  let fixture: ComponentFixture<ListRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
