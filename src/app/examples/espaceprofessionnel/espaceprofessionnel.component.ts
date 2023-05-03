import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-espaceprofessionnel',
  templateUrl: './espaceprofessionnel.component.html',
  styleUrls: ['./espaceprofessionnel.component.scss']
})
export class EspaceprofessionnelComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;
  _user: string;
  _pass: string;
  _errorMessage: string;
  _successMessage: string;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    if(localStorage.getItem('sessionId') != null) {
      this.router.navigate(['/index']);
    }
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('espaceprofessionnel-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
  login() {
    // Make a POST request to the login.php script on the server
    const url = 'http://localhost/now-ui-kit-angular-master/php/requests/loginProfessionnel.php';
    const data = { email: this._user, password: this._pass };
    const headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    this.http.post(url, data, { headers })
      .subscribe((response) => {
        this._successMessage = "ok";
        this._errorMessage = "";
        localStorage.setItem('sessionId', response['session_id']);
        location.href = '/index';
      }, err => {
        this._successMessage = "";
        this._errorMessage = err.error;
      });

  }
}
