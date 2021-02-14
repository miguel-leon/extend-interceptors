import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppInterceptor } from './app.interceptor';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		multi: true,
		useClass: AppInterceptor
	}],
	bootstrap: [AppComponent]
})
export class AppModule {}
