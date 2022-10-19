import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRComponent } from './delete-r.component';

describe('DeleteRComponent', () => {
  let component: DeleteRComponent;
  let fixture: ComponentFixture<DeleteRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
