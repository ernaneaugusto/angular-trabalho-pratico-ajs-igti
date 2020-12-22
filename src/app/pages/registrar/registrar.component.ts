import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  public form: FormGroup = new FormGroup({
		inputNome: new FormControl(
			'',
			[Validators.required, Validators.minLength(2)]
		),
		inputEmail: new FormControl(
			'',
			[Validators.required, Validators.email]
		),
		inputConfirmarEmail: new FormControl(
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
