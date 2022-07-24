import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions';

export interface UsersState {
    users: User[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const usersInitialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null,
};

export const usersReducer = createReducer(
    usersInitialState,

    on(loadUsers, (state) => ({ ...state, loading: true })),

    on(loadUsersSuccess, (state, { users }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [...users],
    })),

    on(loadUsersError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message,
        },
    }))
);
