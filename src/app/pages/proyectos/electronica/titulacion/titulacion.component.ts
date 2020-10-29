import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulacion',
  templateUrl: './titulacion.component.html',
  styleUrls: ['./titulacion.component.css']
})
export class TitulacionComponent implements OnInit {

  tab1 = "Resumen";
  tab2 = "Introducción";
  tab3 = "Desarrollo";
  tab4 = "Conclusion";

  constructor() { }

  ngOnInit(): void {
  }

}
