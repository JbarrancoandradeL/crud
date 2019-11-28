import { Document } from 'mongoose';

export interface Client extends Document {
        Id?: number;
        Rut: string;
        name: string;
        lastname: string;
        phone: string;
        Sexo: string;
        Email: string;

}