import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'file',
                pathMatch: 'full'
            },
            {
                path: 'file',
                loadChildren: () => import('./modules/file/file.module').then(module => module.FileModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./modules/dashboard/dashboard.module').then(module => module.DashboardModule)
            },
            {
                path: 'not-found',
                loadChildren: () => import('./modules/not-found/not-found.module').then(module => module.NotFoundModule)
            },
            {
                path: '**',
                redirectTo: 'not-found'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}