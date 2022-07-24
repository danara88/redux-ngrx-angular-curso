import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private _apiUrl: string = environment.apiUrl;

    constructor(private _http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this._http
            .get<User[]>(`${this._apiUrl}/users?per_page=6&delay=3`)
            .pipe(map((resp: any) => resp.data));
    }

    getUserById(id: string): Observable<User> {
        return this._http
            .get<User>(`${this._apiUrl}/users/${id}`)
            .pipe(map((resp: any) => resp.data));
    }
}
