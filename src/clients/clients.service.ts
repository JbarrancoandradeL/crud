import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './Interfaces/Clients';
import { CreateClientDto } from './dto/create-clients.dto';

@Injectable()
export class ClientsService {

   constructor(@InjectModel('client')  private readonly clientsModel: Model<Client>) {}

   async create(CreateClientDt: CreateClientDto): Promise<Client> {
        const createdClient = new this.clientsModel(CreateClientDt);
        return await createdClient.save();
    }

   async getClients() {
        return  await this.clientsModel.find().exec();
    }

   async getClient(id: number) {
       // return await  this.clientModel.find(client =>  client.Id === id);
       return await this.clientsModel.findById(id);
    }
}
