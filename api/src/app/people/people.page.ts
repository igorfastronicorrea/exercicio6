import { Component, OnInit } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  
  current_people: object={};
  result: string;
  peoples: [];

  constructor(private http: HTTP) { }
  consultaPeople(){
    let url: string ="https://swapi.co/api/people";
    console.log("Chamando" +url)
    this.http.get(url, {}, {})
      .then(data => {
        this.result = data.data;
        this.peoples = JSON.parse(this.result).results;
      })
      .catch(error =>{
        console.log(error.status);
        console.log(error.error);
        console.log(error.headera);
      });

    }
    consultarDetalhe(people){
      this.current_people=people;
    }

      ngOnInit() {
        this.consultaPeople();
      }
    
  }
    

