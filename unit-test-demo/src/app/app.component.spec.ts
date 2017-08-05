import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let incBtn: DebugElement;
  let decBtn: DebugElement;
  let counter: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    incBtn = fixture.debugElement.query(By.css('.inc'));
    decBtn = fixture.debugElement.query(By.css('.dec'));
    counter = fixture.debugElement.query(By.css('span'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('has a counter set to 1', () => {
    expect(comp.counter).toBeDefined();
    expect(comp.counter).toBe(1);
  })

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');
  });

  it('should have increment when + btn is pressed', () => {
    fixture.detectChanges();
    expect(counter.nativeElement.innerText).toBe('1');
    incBtn.nativeElement.click();
    fixture.detectChanges();
    expect(counter.nativeElement.innerText).toBe('2');
  });
});
