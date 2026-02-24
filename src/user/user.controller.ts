import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './DTO/user.DTO';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    UserDetails(): UserDTO {
        return this.userService.JhersonDetails();
    }
}
