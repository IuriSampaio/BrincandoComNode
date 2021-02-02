import { Request, Response } from "express";

interface User{
    id: Number;
    name: String;
    email: String;
}


const users: Array<User> = [
    {id:1 , name: "user um",email: "user@example.com"},
];

export default {
    index: async (req:Request, res:Response) => {
        return res.json(users);
    },
    show: async (req:Request, res:Response) => {

    },
    store: async (req:Request, res:Response) => {
        
        return res.json(users);
    },
    delete: async (req:Request, res:Response) => {
        
    },
    update: async (req:Request, res:Response) => {
        
    },
}