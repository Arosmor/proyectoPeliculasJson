import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  peliculas: any;
  filtro: string = '';
 
  constructor(private httpClient: HttpClient) {
    this.peliculas = this.httpClient.get('https://raw.githubusercontent.com/Arosmor/proyectoResponsiveJson/master/MOCK_DATA%20(2).json');
  } 

}
