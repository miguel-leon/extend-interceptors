import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FeatureComponent } from './feature.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([{
			path: '',
			component: FeatureComponent
		}])
	],
	declarations: [
		FeatureComponent
	]
})
export class FeatureModule {
}
