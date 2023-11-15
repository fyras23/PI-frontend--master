import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceCandidatComponent } from './espace-candidat.component';

describe('EspaceCandidatComponent', () => {
  let component: EspaceCandidatComponent;
  let fixture: ComponentFixture<EspaceCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceCandidatComponent]
    });
    fixture = TestBed.createComponent(EspaceCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
