import { Controller, Get } from '@nestjs/common';
import { Contact } from './contact.entity';
import { ContactsService } from './contacts.service';


@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService) { }

    @Get()
    index(): Promise<Contact[]> {
        return this.contactsService.findAll();
    }
}
