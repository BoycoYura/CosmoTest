import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss']
})
export class FirstFormComponent {
  title = 'cosmoTest';
  mediaflies;
  active_file = {
    
  }

  constructor(private http: HttpClient,private router: Router) { 
    this.http.get("http://localhost:3000/mediaflies").subscribe((res: any) => {
      this.mediaflies = res;
      console.log(this.mediaflies);
    }, err => {
      console.log(err.error);
    });
  }

  showActiveFile(){
    console.log(this.active_file);
  }

  setActiveFile(file){
    console.log("Active");
    console.log(file);
    this.active_file = file;
  } 

  changeRoute(routeValue,file) {
    if(file.type == undefined){
      alert("Пожалуйста выберите файл!");
    }
    else{
      this.router.navigate([routeValue],{ queryParams: file}); 
    }
  }

}
