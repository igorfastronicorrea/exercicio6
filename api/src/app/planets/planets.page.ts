import { Component, OnInit } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  result: string;
  planets : [];

  constructor(private http: HTTP) { }
  consultaPlaneta(){
    let url: string ="https://swapi.co/api/planets/";
    console.log("Chamando" +url)
    this.http.get(url, {}, {})
      .then(data => {
        this.result = data.data;
        this.planets = JSON.parse(this.result).results;
      })
      .catch(error =>{
        console.log(error.status);
        console.log(error.error);
        console.log(error.headera);
      });
    }

  ngOnInit() {
    this.consultaPlaneta();
  }

}
