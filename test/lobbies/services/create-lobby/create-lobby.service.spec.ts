import { Test, TestingModule } from '@nestjs/testing';
import { CreateLobbyService } from '../../../../app/lobbies/services';

describe('CreateLobbyService', () => {
  let service: CreateLobbyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateLobbyService],
    }).compile();

    service = module.get<CreateLobbyService>(CreateLobbyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
