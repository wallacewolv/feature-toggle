import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletadorComponent } from './boletador.component';

describe('BoletadorComponent', () => {
  let component: BoletadorComponent;
  let fixture: ComponentFixture<BoletadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
