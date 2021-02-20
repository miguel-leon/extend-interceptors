import { InjectionToken, Injector, NgModule } from '@angular/core';
import {
	HTTP_INTERCEPTORS as BASE_HTTP_INTERCEPTORS,
	HttpClient,
	HttpHandler,
	HttpInterceptor,
	ɵHttpInterceptingHandler
} from '@angular/common/http';


export const HTTP_INTERCEPTORS = new InjectionToken<HttpInterceptor[]>('HTTP_INTERCEPTORS');

@NgModule({
	providers: [{
		provide: HttpClient,
		useClass: HttpClient
	}, {
		provide: HttpHandler,
		useClass: ɵHttpInterceptingHandler
	}, {
		provide: BASE_HTTP_INTERCEPTORS,
		deps: [Injector, HTTP_INTERCEPTORS],
		useFactory: (injector: any, interceptors: any) => [
			...interceptors,
			...injector.parent.get(BASE_HTTP_INTERCEPTORS)
		]
	}]
})
export class InterceptorInheritanceModule {}
