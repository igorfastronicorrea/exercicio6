import { Component, OnInit } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';
@Component({
  selector: 'app-startships',
  templateUrl: './startships.page.html',
  styleUrls: ['./startships.page.scss'],
})
export class StartshipsPage implements OnInit {

  result: string;
  startships: [];

  constructor(private http: HTTP) { }
  consultaStartship(){
    let url: string ="https://swapi.co/api/starships/";
    console.log("Chamando" +url)
    this.http.get(url, {}, {})
      .then(data => {
        this.result = data.data;
        this.startships = JSON.parse(this.result).results;
      })
      .catch(error =>{
        console.log(error.status);
        console.log(error.error);
        console.log(error.headera);
      });
    }


  ngOnInit() {
    this.consultaStartship();
  }

}
