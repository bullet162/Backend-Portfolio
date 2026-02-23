import { UserInformation } from '@/DTO/UserDetails.dto';
import { AppService } from '@/Services/app.service';
import { Controller, Get, Param } from '@nestjs/common';
import { error } from 'console';

@Controller('jherson-information')
export class JhersonInformationController {
    constructor(private readonly getUserInfo: AppService) { }

    @Get(':id')
    UserDetails(@Param('id') id: number): { results: UserInformation } | { error: string } {

        const data = +id === 1 ? this.getUserInfo.getJhersonDetails() : 'Error';

        if (data === 'Error') {
            console.error('Something went wrong');
            return { error: data }
        }

        return { results: data }

    }
}
