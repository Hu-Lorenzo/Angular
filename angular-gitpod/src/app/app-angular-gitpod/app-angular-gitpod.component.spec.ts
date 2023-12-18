import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAngularGitpodComponent } from './app-angular-gitpod.component';

describe('AppAngularGitpodComponent', () => {
  let component: AppAngularGitpodComponent;
  let fixture: ComponentFixture<AppAngularGitpodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAngularGitpodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppAngularGitpodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
