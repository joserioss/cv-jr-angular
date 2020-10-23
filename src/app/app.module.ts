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

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    PrincipalComponent,
    FooterComponent,
    AcademicoComponent,
    HeaderComponent,
    AspiracionComponent,
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
