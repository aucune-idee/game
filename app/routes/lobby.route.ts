import { Request, Response, Router } from 'express';
import { logged } from '../middlewares/security';

import { createLobby, getLobbies, getLobby,
    leaveLobby, joinLobby }  from "../controllers/lobby.controller";

let BASE = "/lobbies";

function configure(router:Router):void{
    router
    .post(BASE, logged(),  async  (req:Request, res:Response) => {
        return createLobby({
            name: req.body.name,
            type: req.body.type,
            owner: res.locals.jwt.payload.id
        })
        .then(lobby => {
            return res.status(201).json({ lobby: lobby })
        });
    })
    .get(BASE, async (req:Request, res:Response) => {
        return getLobbies({})
        .then(result => {
            res.json(result)
        })
    })
    .get(BASE+"/own",logged(), async (req:Request, res:Response) => {
        return getLobbies({
            member:res.locals.jwt.payload.id
        })
        .then(result => {
            res.json(result)
        })
    })
    .get(BASE+"/:id",logged(), async (req:Request, res:Response) => {
        return getLobby({
            id:req.params.id
        })
        .then(result => {
            res.json(result)
        })
    })
    .put(BASE+"/:id/leave",logged(), async (req:Request, res:Response) => {
        return leaveLobby({
            lobbyId:req.params.id,
            userId:res.locals.jwt.payload.id
        })
        .then(() => {
            res.status(204).send();
        })
    })
    .put(BASE+"/:id/join",logged(), async (req:Request, res:Response) => {
        return joinLobby({
            lobbyId:req.params.id,
            userId:res.locals.jwt.payload.id
        })
        .then(() => {
            res.status(204).send();
        })
    })
}

export default configure;