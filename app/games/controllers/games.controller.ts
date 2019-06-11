import { Controller, Post, UseGuards, Body } from '@nestjs/common';

import { AuthGuard } from '../../common/guards/auth.guard';

import { CreateGame } from '../dto/create-game';
import { CreateGameService } from '../services/create-game/create-game.service';

@Controller('games')
export class GamesController {

    constructor(
        private createGame:CreateGameService
    ){}

    @Post()
    @UseGuards(AuthGuard)
    async create(@Body() input: CreateGame) {
      return this.createGame.create(input);
    }
}
