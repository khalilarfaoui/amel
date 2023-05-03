import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { professionnel } from './professionnel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registerprofessionnel',
  templateUrl: './registerprofessionnel.component.html',
  styleUrls: ['./registerprofessionnel.component.scss']
})
export class RegisterprofessionnelComponent implements OnInit {

  prof: professionnel;
  constructor(private http: HttpClient) { }
  _errorMessage: string;
  _successMessage: string;

  ngOnInit(): void {
    this.prof = new professionnel();
  }
  onSubmit(f: NgForm) {
    console.log("here");
    console.log(f.value)
    if (f.valid) {
      const url = 'http://localhost/now-ui-kit-angular-master/php/requests/signupProfessionnel.php';
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
