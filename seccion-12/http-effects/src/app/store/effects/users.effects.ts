import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions';

@Injectable()
export class UsersEffects {
    constructor(private actions$: Actions, private userService: UserService) {}

    loadUsers$ = createEffect((): any =>
        this.actions$.pipe(
            ofType(loadUsers),
            mergeMap(() =>
                this.userService.getUsers().pipe(map((users) => loadUsersSuccess({ users })))
            ),
            catchError((error) => of(loadUsersError({ payload: error }))) // Este operador no devuelve un observable
        )
    );
}
