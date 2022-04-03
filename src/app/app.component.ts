import { Component } from '@angular/core';
import  {users} from './users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  fomr_is_valid = true; 


  nom = '';
  prenom = '';
  gendre = '';
  // date de naissance 
  dob = new Date(); 


  data: users[] = [];

  register(event:any){

    if( this.nom  == "" || this.prenom == "" || this.gendre == "" || this.dob == null){
      this.fomr_is_valid = false; 
      setTimeout(()=>{
        this.fomr_is_valid = true; 
      }, 3000);
    }else {

      // form est valide
      let new_user = new users(this.nom, this.prenom, this.gendre,this.dob);

      this.data.push(new_user);
      
      this.nom = "";
      this.prenom = "";
      this.gendre = "";
      this.dob = new Date;
    }
  
  }

  remove(id:any){
    delete this.data[id]; 

    console.log(this.data);
  }
  
}
