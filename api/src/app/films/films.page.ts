import { Component, OnInit } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';
@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  result : string;
  films : [];

  constructor(private http: HTTP) { }
  consultaFilme(){
    let url: string ="https://swapi.co/api/films/";
    console.log("Chamando" +url)
    this.http.get(url, {}, {})
      .then(data => {
        this.result = data.data;
        this.films = JSON.parse(this.result).results;
      })
      .catch(error =>{
        console.log(error.status);
        console.log(error.error);
        console.log(error.headera);
      });
      
  }

  ngOnInit() {
    this.consultaFilme();
  }

}
