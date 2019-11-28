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
        return this.ClientServi.getClient(parseInt(id));
    }

    @Post()
    createClient( @Body() client: CreateClientDto) {
        console.log(client);
        return 'Success';
    }

    @Put(':id') 
    updateClient(@Body() client:CreateClientDto, @Param('id') id): string {
        console.log(client);
        console.log(id);
        return 'cliente actualizado';
    }

    @Delete(':id')
    deleteClient(@Param('id') id ): string {
        console.log(id);
        return `cliente borrado  fue : ${id}`;
    }
}
