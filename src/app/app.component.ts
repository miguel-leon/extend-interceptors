import { Component } from '@angular/core';

import { TitleService } from './common/title.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	constructor(private titleService: TitleService) {}

	title$ = this.titleService.getTitle();
}
