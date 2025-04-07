import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrinfosComponent } from './usrinfos.component';

describe('UsrinfosComponent', () => {
  let component: UsrinfosComponent;
  let fixture: ComponentFixture<UsrinfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsrinfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsrinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
