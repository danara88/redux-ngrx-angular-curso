import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanLoad {
    /**
     * Main constructor
     * @param _authService
     * @param router
     */
    constructor(private _authService: AuthService, private router: Router) {}
    // canActivate(): Observable<boolean> {
    //     return this._authService.isAuth().pipe(
    //         tap((resp) => {
    //             if (!resp) this.router.navigate(['login']);
    //         })
    //     );
    // }

    canLoad(): Observable<boolean> {
        return this._authService.isAuth().pipe(
            tap((resp) => {
                if (!resp) this.router.navigate(['login']);
            }),
            take(1) // Que la subscripsion se cancele inmediatamente que se resuelva la primera
        );
    }
}
