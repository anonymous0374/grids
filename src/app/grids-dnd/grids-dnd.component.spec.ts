import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsDndComponent } from './grids-dnd.component';

describe('GridsDndComponent', () => {
  let component: GridsDndComponent;
  let fixture: ComponentFixture<GridsDndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridsDndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
