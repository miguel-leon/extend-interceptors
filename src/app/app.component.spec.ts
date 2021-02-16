import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

	beforeEach(() => TestBed.configureTestingModule({
		imports: [
			HttpClientTestingModule
		],
		declarations: [
			AppComponent
		]
	}).compileComponents());

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should request and render app title`, () => {
		const httpTestingController = TestBed.inject(HttpTestingController);
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();

		const req = httpTestingController.expectOne('title.txt');
		expect(req.request.method).toEqual('GET');
		req.flush('testing title');
		httpTestingController.verify();

		fixture.detectChanges();
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('testing title');
	});
});
