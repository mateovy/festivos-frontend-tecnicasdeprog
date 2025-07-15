import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidarFechaService {
  route: string = 'https://localhost:8080/festivos/verificar/';
  response: any;
  constructor(private http$: HttpClient) {}

  public validarFecha(año: number, mes: number, dia: number) {
    const url = `${this.route}${año}/${mes}/${dia}`;

    this.response = this.http$.post(url, null, {});

    console.log('Response from validarFecha:', this.response);
    return this.response;
  }
}
