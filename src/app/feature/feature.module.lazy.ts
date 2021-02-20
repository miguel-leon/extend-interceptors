import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		RouterModule.forChild([{
			path: 'feature',
			loadChildren: () => import('./feature.module').then(m => m.FeatureModule)
		}])
	]
})
export class FeatureModuleLazy {
}
