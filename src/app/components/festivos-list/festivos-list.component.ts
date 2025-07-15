import { Component } from '@angular/core';
import { ValidarFechaService } from '../services/validar-fecha.service';
import { IFestivoResponse } from '../interfaces/IFestivoList';
import { VerFestivosService } from '../services/ver-festivos.service';


@Component({
  selector: 'app-festivos-list',
  templateUrl: './festivos-list.component.html',
  styleUrls: ['./festivos-list.component.css'],
})
export class FestivosListComponent {

  public fechaSeleccionada: string = '';

  public anoSeleccionado: string = '';

  respuesta: IFestivoResponse | undefined;

  festivosList: IFestivoResponse[] = [];

  constructor(private validarFecha$: ValidarFechaService, private verFestivos$: VerFestivosService) {}

  validarFecha() {
    if(!this.fechaSeleccionada) {
      alert('Pilas que no seleccionó el año');
      return;
    }

    const fecha = new Date(this.fechaSeleccionada);

    const año = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();

    this.respuesta = this.validarFecha$.validarFecha(año, mes, dia).subscribe({
      next: (response: string) => {
        alert('Respuetasta del servidor: ' + response);
        },
      error: (err: string) => {
        alert('Error al validar la fecha');
      }
    });

    return this.respuesta;
  }

  verFestivos() {
    if (!this.anoSeleccionado) {
      alert('Pilas que no seleccionó el año');
      return;
    }

    this.verFestivos$.getLista(Number(this.anoSeleccionado)).subscribe({
      next: (response: IFestivoResponse[]) => {
        this.festivosList = response;
      },
      error: (err: string) => {
        alert('Error al obtener la lista de festivos');
      }
    });
    return this.festivosList;
  }
}
