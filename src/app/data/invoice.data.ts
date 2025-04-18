import { Invoice } from "../models/invoice";

export const invoiceData : Invoice = {
    id: 1,
    name: 'Componentes de pc',
    client: {
        name: 'Andres',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One street',
            number: 15,
        }
    },
    company: {
        name: 'New Age',
        fiscalNumber: 123532543425324,
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel i9',
            price: 599,
            quantity: 1
        },
        {
            id: 2,
            product: 'Corsair teclado',
            price: 300,
            quantity: 1
        },
        {
            id: 3,
            product: 'Monitor ASUS',
            price: 700,
            quantity: 1
        },
    ]
};