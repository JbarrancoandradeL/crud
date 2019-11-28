import { Model } from 'mongoose';
import { Client } from './Interfaces/Clients';
import { CreateClientDto } from './dto/create-clients.dto';
export declare class ClientsService {
    private readonly clientsModel;
    constructor(clientsModel: Model<Client>);
    create(CreateClientDt: CreateClientDto): Promise<Client>;
    getClients(): Promise<Client[]>;
    getClient(id: number): Promise<Client>;
}
