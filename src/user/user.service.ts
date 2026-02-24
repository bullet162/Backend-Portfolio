import { Injectable } from '@nestjs/common';
import { UserDTO } from './DTO/user.DTO';

@Injectable()
export class UserService {

    JhersonDetails(): UserDTO {
        let user: UserDTO = new UserDTO;

        user.firstName = 'Jherson';
        user.lastName = 'Aguto';
        user.middleInitial = 'M';
        user.country = 'Philippines';
        user.province = 'Isabela';
        user.city = 'Echague';
        user.email = 'agutojherson@gmail.com';
        user.link = 'https://github.com/bullet162';

        return user;
    }
}

