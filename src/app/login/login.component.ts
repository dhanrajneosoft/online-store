import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: any;
    constructor(private router: Router , private fb : FormBuilder, private apiAuth : AuthService) {}

    ngOnInit() {
        this.form = this.fb.group({
            'username': ['8898955327', Validators.required],
            'password': ['12345', Validators.required],
        })
    }
    login() {
        console.log(this.form.value);
        this.apiAuth.login(this.form.value).subscribe((res)=>{
            console.log(res);
            localStorage.setItem('token', res.token);
            this.router.navigate(['admin','dashboard']);
        }, (err)=>{
            console.log(err);
        })
    }
}
