import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './DTO/user.DTO';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    @UsePipes(new ValidationPipe())
    UserDetails(): UserDTO {
        return this.userService.JhersonDetails();
    }
}
