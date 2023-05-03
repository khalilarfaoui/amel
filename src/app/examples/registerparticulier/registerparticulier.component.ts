import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { particulier } from './particulier';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-registerparticulier',
  templateUrl: './registerparticulier.component.html',
  styleUrls: ['./registerparticulier.component.scss']
})
export class RegisterparticulierComponent implements OnInit {
  part: particulier;
  constructor(private http: HttpClient) { }
  _errorMessage: string;
  _successMessage: string;
  ngOnInit() {
    this.part = new particulier();
    var rellaxHeader = new Rellax('.rellax-header');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('registerparticulier-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('registerparticulier-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      const url = 'http://localhost/now-ui-kit-angular-master/php/requests/signupParticulier.php';
      const headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      this.http.post(url, f.value, { headers })
      .subscribe((response) => {
        this._successMessage = "ok";
        this._errorMessage = "";
        // console.log(response);
        // localStorage.setItem('sessionId', response['session_id']);
        // location.href = '/index';
      }, err => {
        this._successMessage = "";
        this._errorMessage = err.error;
      });
    }
  }
}
