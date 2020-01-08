import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilePageComponent } from './file-page.component';

const routes: Routes = [
    {
        path: '',
        component: FilePageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class FileRoutingModule {}