import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhForumComponent } from './ah-forum.component';

describe('AhForumComponent', () => {
  let component: AhForumComponent;
  let fixture: ComponentFixture<AhForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
