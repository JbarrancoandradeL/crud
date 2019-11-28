/// <reference types="mongodb" />
import { Model } from 'mongoose';
import { Client } from './Interfaces/Clients';
import { CreateClientDto } from './dto/create-clients.dto';
export declare class ClientsService {
    private readonly clientModel;
    constructor(clientModel: Model<Client>);
    create(CreateClientDt: CreateClientDto): Promise<Client>;
    getClients(): Promise<Client[]>;
    getClient(id: string): Promise<Client>;
    delete(id: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
