import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppInterceptor } from './app.interceptor';
import { FeatureModuleLazy } from './feature/feature.module.lazy';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot([]),
		FeatureModuleLazy
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		multi: true,
		useClass: AppInterceptor
	}],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
