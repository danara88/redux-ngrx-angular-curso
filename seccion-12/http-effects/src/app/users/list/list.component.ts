import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styles: [],
})
export class ListComponent implements OnInit {
    public users: User[] = [];

    constructor(private _userService: UserService) {}

    ngOnInit(): void {
        this._userService.getUsers().subscribe((resp) => (this.users = resp));
    }
}
