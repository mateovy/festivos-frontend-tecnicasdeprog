import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFestivoResponse } from '../interfaces/IFestivoList';

@Injectable({
  providedIn: 'root',
})
export class VerFestivosService {
  route: string = 'https://localhost:8080/festivos/verificar/';
  listaFestivos: IFestivoResponse[] | undefined;
  constructor(private http$: HttpClient) {}

  public getLista(año: number) {
    const url = `${this.route}${año}`;
    return this.http$.get<IFestivoResponse[]>(url);
  }
}
