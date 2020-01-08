import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { DrawingModule } from '../drawing/drawing.module';


@NgModule({
    declarations: [
        DashboardPageComponent
    ],
    imports: [
        DashboardRoutingModule,
        DrawingModule
    ]
})
export class DashboardModule { }
