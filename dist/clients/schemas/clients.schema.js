"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ClientsSchema = new mongoose_1.Schema({
    Rut: String,
    name: String,
    lastname: String,
    phone: String,
    Sexo: String,
    Email: String,
});
//# sourceMappingURL=clients.schema.js.map