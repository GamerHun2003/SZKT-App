import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmessageComponent } from './loginmessage.component';

describe('LoginmessageComponent', () => {
  let component: LoginmessageComponent;
  let fixture: ComponentFixture<LoginmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginmessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
