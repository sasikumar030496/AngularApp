import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRouterComponent } from './my-router.component';

describe('MyRouterComponent', () => {
  let component: MyRouterComponent;
  let fixture: ComponentFixture<MyRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
