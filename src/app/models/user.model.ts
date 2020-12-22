import { UserInterface } from "../interfaces/user.interface";

export class UserModel {
    public id: string;
    public nome: string;
    public email: string;

    constructor(user: UserInterface) {
        this.id = user.id;
        this.nome = user.inputNome;
        this.email = user.inputEmail;
    }
}