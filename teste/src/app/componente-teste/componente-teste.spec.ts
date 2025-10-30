import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTeste } from './componente-teste';

describe('ComponenteTeste', () => {
  let component: ComponenteTeste;
  let fixture: ComponentFixture<ComponenteTeste>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteTeste]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteTeste);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
