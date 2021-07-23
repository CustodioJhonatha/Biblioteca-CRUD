import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLayoutHeaderComponent } from './component-layout-header.component';

describe('ComponentLayoutHeaderComponent', () => {
  let component: ComponentLayoutHeaderComponent;
  let fixture: ComponentFixture<ComponentLayoutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLayoutHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
