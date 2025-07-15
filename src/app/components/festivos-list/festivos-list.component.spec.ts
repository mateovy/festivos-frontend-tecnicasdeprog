import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivosListComponent } from './festivos-list.component';

describe('FestivosListComponent', () => {
  let component: FestivosListComponent;
  let fixture: ComponentFixture<FestivosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestivosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestivosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
