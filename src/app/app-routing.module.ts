import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ControlComponent } from './control/control.component';
import { BoletadorComponent } from './boletador/boletador.component';
import { ControlPanelComponent } from './admin/control-panel/control-panel.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'control-panel', component: ControlPanelComponent }
    ]
  },
  { path: 'control', component: ControlComponent },
  { path: 'boletador', component: BoletadorComponent },
  { path: '', redirectTo: '/admin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
