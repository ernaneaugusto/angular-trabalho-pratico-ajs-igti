import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup = new FormGroup({
		inputEmail: new FormControl(
			'',
			[Validators.required, Validators.email]
		),
		inputSenha: new FormControl(
			'',
			[Validators.required, Validators.minLength(6)]
		)
	});

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(): void {
    if (this.form.valid) {
      console.log("## Valido", this.form.value);
    }
  }

}
