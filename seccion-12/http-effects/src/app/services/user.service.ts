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
        return this._http.get<User[]>(`${this._apiUrl}users`).pipe(map((resp: any) => resp.data));
    }
}
