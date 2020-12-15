import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarragePage } from './barrage.page';

describe('BarragePage', () => {
  let component: BarragePage;
  let fixture: ComponentFixture<BarragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarragePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
