import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserInformation {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly about: string,
    public readonly emailAddress: string,
    public readonly contactNumber: number,
    public readonly address: string,
    public readonly middleInitial?: string
  ) { }

  get fullname(): string {
    return !this.middleInitial ? `${this.firstName} ${this.lastName}` : `${this.firstName} ${this.middleInitial}. ${this.lastName}`;
  }
}
