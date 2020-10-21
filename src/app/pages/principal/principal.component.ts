import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  title = 'Ingeniero Electronico & Desarrollador Full Stack';

  constructor() { }

  ngOnInit(): void {
  }

}
