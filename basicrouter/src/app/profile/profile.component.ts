import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userName:string="";
  constructor(private route:ActivatedRoute){}
  ngOnInit(){

    const id = this.route.snapshot.paramMap.get('name')||"";
    if(!id){
      this.route.queryParams.subscribe(params => {
        const name = params['name'];
        this.userName=name;
        console.log(name);
      });
    }else{
      this.userName=id;
    }
   
  }
}
