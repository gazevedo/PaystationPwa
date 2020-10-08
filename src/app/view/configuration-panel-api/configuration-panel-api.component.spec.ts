import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationPanelApiComponent } from './configuration-panel-api.component';

describe('ConfigurationApiComponent', () => {
  let component: ConfigurationPanelApiComponent;
  let fixture: ComponentFixture<ConfigurationPanelApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationPanelApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationPanelApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
