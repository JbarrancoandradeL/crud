import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateClientDto } from './dto/create-clients.dto';
import { ClientsService } from './clients.service';
import { promises } from 'dns';

@Controller('clients')
export class ClientsController {
   constructor(private ClientServi: ClientsService) {}

    @Get()
    getClients() {
        return this.ClientServi.getClients();
    }

    @Get(':id')
    getClientsId(@Param('id') id): {} {
        return this.ClientServi.getClient(id);
    }

    @Post()
    createClient( @Body() client: CreateClientDto) {
        return this.ClientServi.create(client);
    }

    @Put(':id')
    updateClient(@Body() client: CreateClientDto , @Param('id') id): string {
        return 'cliente actualizado';
    }

    @Delete(':id')
    deleteClient(@Param('id') id ) {
        return this.ClientServi.delete(id);
    }
}
