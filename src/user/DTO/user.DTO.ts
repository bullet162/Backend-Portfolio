import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches } from "class-validator";

export class UserDTO {
    @IsNotEmpty({ message: 'first name is required!' })
    @IsString({ message: 'first name must be a string' })
    public firstName: string | undefined;

    @IsNotEmpty({ message: 'last name is required!' })
    @IsString({ message: 'last name must be a string' })
    public lastName: string | undefined;

    @IsString({ message: 'middle initial must be a string' })
    public middleInitial?: string | undefined;

    @IsNotEmpty({ message: 'email address is required!' })
    @IsEmail()
    public email: string | undefined;

    @IsNotEmpty({ message: 'country is required!' })
    @IsString()
    public country: string | undefined;

    @IsNotEmpty({ message: 'province is required!' })
    public province: string | undefined;

    @IsNotEmpty({ message: 'city is required!' })
    public city: string | undefined;

    @IsNumber()
    public contactNumber?: number | undefined;

    @Matches(/\.com$/i, { message: 'Domain must end with .com' })
    public link?: string | undefined;

    get fullName(): string {
        return this.middleInitial ? `${this.firstName} ${this.middleInitial}. ${this.lastName}` : `${this.firstName} ${this.lastName}`;
    }

    get fullAddress(): string {
        return `${this.city} ${this.province}, ${this.country}`;
    }
}