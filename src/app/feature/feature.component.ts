import { Component } from '@angular/core';
import { TitleService } from '../common/title.service';

@Component({
	selector: 'app-feature',
	templateUrl: './feature.component.html'
})
export class FeatureComponent {

	constructor(private titleService: TitleService) {}

	title$ = this.titleService.getTitle();
}
