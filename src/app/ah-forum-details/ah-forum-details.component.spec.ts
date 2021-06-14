import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhForumDetailsComponent } from './ah-forum-details.component';

describe('AhForumDetailsComponent', () => {
  let component: AhForumDetailsComponent;
  let fixture: ComponentFixture<AhForumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhForumDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
