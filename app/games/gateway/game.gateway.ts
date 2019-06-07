import { SubscribeMessage, WebSocketGateway, WsResponse } from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { GetGamesService } from '../services/get-game/get-games.service';
import { IGame } from '../interfaces/game.interface';

@WebSocketGateway()
export class GameGateway {
  
  constructor(
    private readonly getGames:GetGamesService){}
  
  @SubscribeMessage('createGame')
  handleMessage(client: Socket, payload: any): Promise<WsResponse<unknown>> {
    this.getGames.getGame(payload.id)
    .then((game:IGame) => {
      let roomId = 'game_'+game._id;
      socket.join(roomId);
      socket.to(roomId).emit('roomCreated', {room: roomId});
      return { event: 'roomCreated', room: roomId };
    })
  }
}
