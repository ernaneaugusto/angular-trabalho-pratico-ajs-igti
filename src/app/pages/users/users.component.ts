import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserModel } from 'src/app/models/user.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: Array<UserModel>

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.service
      .getUsers()
      .subscribe((users: Array<UserInterface>) => {
        this.users = this.formatUserModel(users);
        console.log("##users", users);
      }, error => alert("Erro ao buscar Usu[arios! :("));
  }

  private formatUserModel(users: Array<UserInterface>): Array<UserModel> {
    let usersModel: Array<UserModel> = [];

    users.map(user => {
      usersModel.push(new UserModel(user));
    });

    return usersModel;
  }

}
