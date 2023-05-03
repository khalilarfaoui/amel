import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-espacepar',
  templateUrl: './espacepar.component.html',
  styleUrls: ['./espacepar.component.scss']
})
export class EspaceparComponent implements OnInit {

  _user: string;
  _pass: string;
  _errorMessage: string;
  _successMessage: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    var rellaxHeader = new Rellax('.rellax-header');
    if(localStorage.getItem('sessionId') != null) {
      this.router.navigate(['/index']);
    }
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('espacepar-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('espacepar-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
  login() {
    // Make a POST request to the login.php script on the server
    const url = 'http://localhost/now-ui-kit-angular-master/php/requests/loginParticulier.php';
    const data = { email: this._user, password: this._pass };
    const headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    this.http.post(url, data, { headers })
      .subscribe((response) => {
        this._successMessage = "ok";
        this._errorMessage = "";
        console.log(response);
        localStorage.setItem('sessionId', response['session_id']);
        location.href = '/index';
      }, err => {
        this._successMessage = "";
        this._errorMessage = err.error;
      });

  }
}
