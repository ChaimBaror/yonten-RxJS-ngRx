import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  configUrl: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.configUrl = 'assets/config.json';
    this.getConfig()
  }
    getConfig() {
      return this.http.get(this.configUrl).pipe(

      ).subscribe(console.log)

    }
    

  }
