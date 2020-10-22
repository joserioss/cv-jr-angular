import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface redesSociales {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  panelOpenState = false;
  selected = '';
  rs: redesSociales[] = [
    {value: 'https://www.linkedin.com/in/jose-rios-sanchez/', viewValue: 'Linkedin'},
    {value: 'mailto:ing.jose.rioss@gmail.com', viewValue: 'Correo Electronico'},
    {value: 'https://api.whatsapp.com/send?phone=+56996863449', viewValue: 'WhatsApp'},
    {value: 'https://github.com/joserioss', viewValue: 'GitHub'},
    {value: 'https://www.instagram.com/jirs_ing/', viewValue: 'Instagram'}
  ];

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
