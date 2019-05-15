import { Request, Response, Router } from 'express';
import { logged } from '../middlewares/security';

import { createLobby, getLobbies, getLobby }  from "../controllers/lobby.controller";

let BASE = "/lobbies";

function configure(router:Router):void{
    console.log("router")
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
    router.get(BASE+"/own",logged(), async (req:Request, res:Response) => {
        getLobbies({
            member:res.locals.jwt.payload.id
        })
        .then(result => {
            res.json(result)
        })
    })
    router.get(BASE+"/:id",logged(), async (req:Request, res:Response) => {
        getLobby({
            id:req.params.id
        })
        .then(result => {
            res.json(result)
        })
    })
}

export default configure;