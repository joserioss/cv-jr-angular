import { AspiracionComponent } from './pages/aspiracion/aspiracion.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AcademicoComponent } from './pages/academico/academico.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent, children:[
    { path: 'personal', component: PersonalComponent},
    { path: 'academico', component: AcademicoComponent},
    { path: 'aspiracion', component: AspiracionComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
