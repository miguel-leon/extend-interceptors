import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'any'
})
export class TitleService {

	constructor(private httpClient: HttpClient) {}

	getTitle(): Observable<string> {
		return this.httpClient.get('title.txt', { responseType: 'text' });
	}
}
