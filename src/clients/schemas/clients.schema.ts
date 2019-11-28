import { Schema } from 'mongoose';
import { number, string } from 'prop-types';

export const ClientSchema = new Schema({
        Rut: String,
        name: String,
        lastname: String,
        phone: String,
        Sexo: String,
        Email: String,
})