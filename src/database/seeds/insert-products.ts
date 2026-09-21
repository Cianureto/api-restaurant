import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    
    await knex("products").del();

    
    await knex("products").insert([
        { name: "Feijoada", price: 32.9 },
        { name: "Picanha na chapa", price: 54.5 },
        { name: "Frango à parmegiana", price: 38.0 },
        { name: "Lasanha à bolonhesa", price: 29.9 },
        { name: "Salada Caesar", price: 24.0 },
        { name: "Risoto de camarão", price: 46.9 },
        { name: "Filé mignon ao molho madeira", price: 58.0 },
        { name: "Moqueca de peixe", price: 49.9 },
        { name: "Espaguete à carbonara", price: 27.5 },
        { name: "Pudim de leite", price: 12.0 },
    ]);
};
