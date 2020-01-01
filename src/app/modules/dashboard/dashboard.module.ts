import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DrawingModule } from '../drawing/drawing.module';


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        DashboardRoutingModule,
        DrawingModule
    ]
})
export class DashboardModule { }
