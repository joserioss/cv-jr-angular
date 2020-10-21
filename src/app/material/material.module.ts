import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    MatButtonToggleModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
