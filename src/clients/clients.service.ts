import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './Interfaces/Clients';
import { CreateClientDto } from './dto/create-clients.dto';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class ClientsService {

   constructor(@InjectModel('Client')  private readonly clientModel: Model<Client>) {}

   async create(CreateClientDt: CreateClientDto): Promise<Client> {
        const createdClient = new this.clientModel(CreateClientDt);
        return await createdClient.save();
    }

   async getClients() {
        return  await this.clientModel.find().exec();
    }

   async getClient(id: string) {
       // return await  this.clientModel.find(client =>  client.Id === id);
       return await this.clientModel.findById(id);
    }

    async delete(id: string) {
        return await this.clientModel.deleteOne({_id: id});
    }
}
