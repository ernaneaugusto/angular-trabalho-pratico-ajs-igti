import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { URL_API } from 'src/app/core/urls';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserModel } from 'src/app/models/user.model';
import { ServicesService } from 'src/app/services/services.service';

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

  constructor(
    private service: ServicesService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  public submitForm(): void {
    if (this.form.valid) {

      this.service
        .getUsers()
        .subscribe((users: Array<UserInterface>) => {
          const findUser = this.findUserOnLogin(users);

          if (findUser) {
            this.route
              .navigateByUrl(`/${URL_API.usuarios}`);
          } else {
            alert("Usuário não encontrado!");
          }
        });
    }
  }

  private findUserOnLogin(usersDataApi: Array<UserInterface>) {
    let userFound: UserInterface;
    let user: UserModel;
    const userForm = this.form.value;

    userFound = usersDataApi.find((user, id) => {
      return userForm.inputEmail === user.inputEmail
        && userForm.inputSenha === user.inputSenha
    });

    user = userFound ? new UserModel(userFound) : null;

    return user;
  }

}
