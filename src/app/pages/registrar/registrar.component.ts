import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { ServicesService } from 'src/app/services/services.service';

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

	constructor(private service: ServicesService) { }

	ngOnInit(): void {
	}

	public submitForm(): void {
		const form = this.form;
		const user: UserModel = new UserModel(form.value);

		if (form.valid) {
			console.log("## Valido", form.value);
			this.service
				.setUser(form.value)
				.subscribe((data: UserModel) => {
					alert(`Usuário ${user.nome} registrado com sucesso! :)`);
					this.form.reset();
				}, error => alert("Erro ao registrar novo usuário! :("));
		}
	}

}
