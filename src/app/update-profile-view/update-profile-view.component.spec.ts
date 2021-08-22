import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileViewComponent } from './update-profile-view.component';

describe('UpdateProfileViewComponent', () => {
  let component: UpdateProfileViewComponent;
  let fixture: ComponentFixture<UpdateProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
