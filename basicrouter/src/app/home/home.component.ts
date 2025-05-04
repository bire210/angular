import { Component } from '@angular/core';
import {  Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor( private route:Router){}
  goToProfile(name:string){

    //this is a way to file to pass params
// this.route.navigate(["profile",{name:"Arya Mahto from Button"}])

//  this is a way to pass queryparams
this.route.navigate(["/profile"], { queryParams: { name } });

  }
}
