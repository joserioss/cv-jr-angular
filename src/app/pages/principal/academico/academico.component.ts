import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-academico',
  templateUrl: './academico.component.html',
  styleUrls: ['./academico.component.css']
})
export class AcademicoComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}
