import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'i18n-Ang'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('i18n-Ang');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to All');
  });

  it('first test case with ts',()=>{
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.componentInstance;
   expect(app.test).toEqual('First test case');

  });

  it('should set userResponse when Yes button is clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app.userResponse).toBeUndefined();
    const btn = fixture.debugElement.nativeElement.querySelector('#yes-btn');
    btn.click();
    expect(app.userResponse).toBe('I am In');
  });

  it('should set and reset the userResponse when yes and no button clicked',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const btn = fixture.debugElement.nativeElement.querySelector('#yes-btn');
    btn.click();
    expect(app.userResponse).toBe('I am In');
    const btn1 = fixture.debugElement.nativeElement.querySelector('#no-btn');
    btn1.click();
    expect(app.userResponse).toBe('');
  });

  it('should reset the userResponse when no button clicked',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.userResponse).toBe('I am In');
    const btn1 = fixture.debugElement.nativeElement.querySelector('#no-btn');
    btn1.click();
    expect(app.userResponse).toBe('');
  })
});
