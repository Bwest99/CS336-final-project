import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlitzPage } from './blitz.page';

describe('BlitzPage', () => {
  let component: BlitzPage;
  let fixture: ComponentFixture<BlitzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlitzPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlitzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
