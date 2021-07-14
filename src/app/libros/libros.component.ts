import { Component, OnInit } from '@angular/core';
import {Portadas,ListaLibros} from '../interface/portadas';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {
  nombreLista= ListaLibros;
  constructor() { }

  ngOnInit(): void {
  }

}
