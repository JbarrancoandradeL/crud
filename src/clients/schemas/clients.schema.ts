import { Schema } from 'mongoose';

export const ClientsSchema = new Schema({
        Rut: String,
        name: String,
        lastname: String,
        phone: String,
        Sexo: String,
        Email: String,
});