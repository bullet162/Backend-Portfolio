import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches } from "class-validator";

export class UserDTO {
    @IsNotEmpty({ message: 'first name is required!' })
    @IsString({ message: 'first name must be a string' })
    public firstName!: string;

    @IsNotEmpty({ message: 'last name is required!' })
    @IsString({ message: 'last name must be a string' })
    public lastName!: string;

    @IsString({ message: 'middle initial must be a string' })
    public middleInitial?: string;

    @IsNotEmpty({ message: 'email address is required!' })
    @IsEmail()
    public email!: string;

    @IsNotEmpty({ message: 'country is required!' })
    @IsString()
    public country!: string;

    @IsNotEmpty({ message: 'province is required!' })
    public province!: string;

    @IsNotEmpty({ message: 'city is required!' })
    public city!: string;

    @IsNumber()
    public contactNumber?: number;

    @Matches(/\.com$/i, { message: 'Domain must end with .com' })
    public link?: string;

    get fullName(): string {
        return this.middleInitial ? `${this.firstName} ${this.middleInitial}. ${this.lastName}` : `${this.firstName} ${this.lastName}`;
    }

    get fullAddress(): string {
        return `${this.city} ${this.province}, ${this.country}`;
    }
}