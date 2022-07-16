import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './users/list/list.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
    {
        path: 'home',
        component: ListComponent,
    },
    {
        path: 'detail/:id',
        component: UserComponent,
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
