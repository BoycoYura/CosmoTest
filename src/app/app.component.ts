import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cosmoTest';
  mediaflies;
  active_file = {
    
  };


  
  constructor(private http: HttpClient) {
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
}