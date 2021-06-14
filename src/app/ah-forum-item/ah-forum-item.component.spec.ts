import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhForumItemComponent } from './ah-forum-item.component';

describe('AhForumItemComponent', () => {
  let component: AhForumItemComponent;
  let fixture: ComponentFixture<AhForumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhForumItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
