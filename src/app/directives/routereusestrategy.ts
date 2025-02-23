import { ActivatedRouteSnapshot, BaseRouteReuseStrategy, DetachedRouteHandle } from '@angular/router';

/**
 * Stratégie de conservation/réutilisation des composants associés au routeur Angular.
 * @see https://www.angulararchitects.io/en/blog/sticky-routes-in-angular-2-3/
 */
export class AppRouteReuseStrategy implements BaseRouteReuseStrategy {
    private handlers: { [key: string]: DetachedRouteHandle } = {};
    shouldDetach(route: ActivatedRouteSnapshot): boolean { return true; }
    shouldAttach(route: ActivatedRouteSnapshot): boolean { return !!route && !!route.routeConfig && !!route.routeConfig.path && !!this.handlers[route.routeConfig.path]; }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean { return future.routeConfig === curr.routeConfig; }
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        if (route && route.routeConfig && route.routeConfig.path) {
            this.handlers[route.routeConfig.path] = handle;
        }
    }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (route && route.routeConfig && route.routeConfig.path) {
            return this.handlers[route.routeConfig.path];
        }
        else {
            return {};
        }
    }
}