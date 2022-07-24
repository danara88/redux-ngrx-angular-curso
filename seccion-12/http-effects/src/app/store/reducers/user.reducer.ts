import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUser, loadUserSuccess, loadUserError } from '../actions';

export interface UserState {
    id: string | null;
    user: User | null;
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const userInitialState: UserState = {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null,
};

export const userReducer = createReducer(
    userInitialState,

    on(loadUser, (state, { id }) => ({ ...state, loading: true, id: id })),

    on(loadUserSuccess, (state, { user }) => ({
        ...state,
        loading: false,
        loaded: true,
        user: { ...user },
    })),

    on(loadUserError, (state, { payload }) => ({
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
