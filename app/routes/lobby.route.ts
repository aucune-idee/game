import { Request, Response, Router } from 'express';
import { logged } from '../middlewares/security';

import { createLobby, getLobbies }  from "../controllers/lobby.controller";

let BASE = "/lobbies";

function configure(router:Router):void{
    router.post(BASE, logged(),  async  (req:Request, res:Response) => {
        createLobby({
            name: req.body.name,
            type: req.body.type,
            owner: res.locals.jwt.payload.id
        })
        .then(lobby => {
            return res.json({ lobby: lobby })
        });
    })
    router.get(BASE, async (req:Request, res:Response) => {
        getLobbies({})
        .then(result => {
            res.json(result)
        })
    })
}

export default configure;