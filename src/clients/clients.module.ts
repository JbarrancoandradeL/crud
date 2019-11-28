import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { ClientsSchema } from './schemas/clients.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Client', schema: ClientsSchema }])],
    controllers: [ClientsController],
    providers: [ClientsService],
})

export class ClientsModule {}
