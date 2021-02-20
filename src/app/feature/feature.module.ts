import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HTTP_INTERCEPTORS, InterceptorInheritanceModule } from '../util/interceptor-inheritance.module';
import { FeatureComponent } from './feature.component';
import { FeatureInterceptor } from './feature.interceptor';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([{
			path: '',
			component: FeatureComponent
		}]),
		InterceptorInheritanceModule
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		multi: true,
		useClass: FeatureInterceptor
	}],
	declarations: [
		FeatureComponent
	]
})
export class FeatureModule {
}
