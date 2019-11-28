import { CreateClientDto } from './dto/create-clients.dto';
import { ClientsService } from './clients.service';
export declare class ClientsController {
    private ClientServi;
    constructor(ClientServi: ClientsService);
    getClients(): Promise<import("./Interfaces/Clients").Client[]>;
    getClientsId(id: any): {};
    createClient(client: CreateClientDto): string;
    updateClient(client: CreateClientDto, id: any): string;
    deleteClient(id: any): string;
}
