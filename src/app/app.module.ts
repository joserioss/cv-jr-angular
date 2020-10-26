import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalComponent } from './pages/personal/personal.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AcademicoComponent } from './pages/academico/academico.component';
import { HeaderComponent } from './pages/header/header.component';
import { AspiracionComponent } from './pages/aspiracion/aspiracion.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { TitulacionComponent } from './pages/proyectos/electronica/titulacion/titulacion.component';
import { ArduinoComponent } from './pages/proyectos/electronica/arduino/arduino.component';
import { RaspberryComponent } from './pages/proyectos/electronica/raspberry/raspberry.component';
import { ElectronicaComponent } from './pages/proyectos/electronica/electronica.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    PrincipalComponent,
    FooterComponent,
    AcademicoComponent,
    HeaderComponent,
    AspiracionComponent,
    ProyectosComponent,
    TitulacionComponent,
    ArduinoComponent,
    RaspberryComponent,
    ElectronicaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
