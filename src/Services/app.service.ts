import { Injectable } from '@nestjs/common';
import { UserInformation } from '@/DTO/UserDetails.dto';

@Injectable()
export class AppService {

  getJhersonDetails(): UserInformation {
    const about: string = `I am a computer science student, 
                               interested in backend software development 
                               with beginner experience with Asp.NET Core WebAPI.
                               Currently learning Node.JS, Nest.JS and GIT`;

    const results = new UserInformation(
      'Jherson',
      'Aguto',
      about,
      'agutojherson@gmail.com',
      9686450568,
      'Echague, Isabela',
      'M.',
    );
    return results;
  }


}
