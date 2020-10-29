import { TitulacionComponent } from './pages/proyectos/electronica/titulacion/titulacion.component';
import { ElectronicaComponent } from './pages/proyectos/electronica/electronica.component';
import { ArduinoComponent } from './pages/proyectos/electronica/arduino/arduino.component';
import { RaspberryComponent } from './pages/proyectos/electronica/raspberry/raspberry.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { AspiracionComponent } from './pages/principal/aspiracion/aspiracion.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AcademicoComponent } from './pages/principal/academico/academico.component';
import { PersonalComponent } from './pages/principal/personal/personal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent, children:[
    { path: 'personal', component: PersonalComponent},
    { path: 'academico', component: AcademicoComponent},
    { path: 'aspiracion', component: AspiracionComponent}
  ]},
  { path: 'proyecto', component: ProyectosComponent, children:[
    { path: 'electronica', component: ElectronicaComponent, children:[
      { path: 'raspberry', component: RaspberryComponent},
      { path: 'arduino', component: ArduinoComponent},
      { path: 'titulacion', component: TitulacionComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
