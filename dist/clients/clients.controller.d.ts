/// <reference types="mongodb" />
/// <reference types="mongoose" />
import { CreateClientDto } from './dto/create-clients.dto';
import { ClientsService } from './clients.service';
export declare class ClientsController {
    private ClientServi;
    constructor(ClientServi: ClientsService);
    getClients(): Promise<import("./Interfaces/Clients").Client[]>;
    getClientsId(id: any): {};
    createClient(client: CreateClientDto): Promise<import("./Interfaces/Clients").Client>;
    updateClient(client: CreateClientDto, id: any): string;
    deleteClient(id: any): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
