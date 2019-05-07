import { Request, Response, Router } from 'express';
import { logged } from '../middlewares/security';

import { createLobby }  from "../controllers/lobby.controller";

let BASE = "/lobbies";

function configure(router:Router):void{
    router.post(BASE, logged,  async  (req:Request, res:Response) => {
        console.log(req.body)
        return createLobby({
            name: req.body.name,
        })
        .then(lobby => {
            return res.json({ lobby: lobby })
        });
    })
    .get(BASE, async (req:Request, res:Response) => {
        res.json({"lobbies":[
            {"name":"test"}
        ]})
    })
}


export default configure;