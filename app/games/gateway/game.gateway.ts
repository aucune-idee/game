import { SubscribeMessage, WebSocketGateway, WsResponse } from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { GetGamesService } from '../services/get-games/get-games.service';
import { Game } from '../schemas/game.schema';

@WebSocketGateway()
export class GameGateway {
  
  constructor(
    private readonly getGames:GetGamesService){}
  
  @SubscribeMessage('createGame')
  handleMessage(client: Socket, payload: any): Promise<WsResponse<unknown>> {
    return this.getGames.getGame(payload.id)
    .then((game:Game) => {
      let roomId = 'game_'+game._id;
      client.join(roomId);
      client.to(roomId).emit('roomCreated', {room: roomId});
      return { event: 'roomCreated', data: {room: roomId} };
    })
  }
}
