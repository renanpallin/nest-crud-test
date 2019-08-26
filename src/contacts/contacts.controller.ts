import { Controller, Get } from '@nestjs/common';

@Controller('contacts')
export class ContactsController {
    @Get()
    index(): string {
        return "this action will return contacts"
    }
}
