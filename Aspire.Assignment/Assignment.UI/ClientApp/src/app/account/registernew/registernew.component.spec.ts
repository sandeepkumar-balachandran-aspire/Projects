import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisternewComponent } from './registernew.component';

describe('RegisternewComponent', () => {
  let component: RegisternewComponent;
  let fixture: ComponentFixture<RegisternewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisternewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisternewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
