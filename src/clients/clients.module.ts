import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { ClientSchema } from './schemas/clients.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'client', schema: ClientSchema }])],
    controllers: [ClientsController],
    providers: [ClientsService],
})

export class ClientsModule {}
