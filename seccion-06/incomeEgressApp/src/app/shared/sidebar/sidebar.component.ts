import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styles: [],
})
export class SidebarComponent implements OnInit, OnDestroy {
    public completeName: string = '';
    public userSubs: Subscription = new Subscription();

    constructor(
        private _authService: AuthService,
        private router: Router,
        private _store: Store<AppState>
    ) {}

    ngOnInit(): void {
        this.userSubs = this._store
            .select('user')
            .pipe(filter((state) => state.user !== null))
            .subscribe(({ user }) => (this.completeName = user!.name));
    }

    logout() {
        Swal.fire({
            title: 'Cerrando sesión',
            didOpen: () => {
                Swal.showLoading();
            },
        });
        this._authService.logout().then(() => {
            Swal.close();
            this.router.navigate(['login']);
        });
    }

    ngOnDestroy(): void {
        this.userSubs.unsubscribe();
    }
}
