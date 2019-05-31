import { Test, TestingModule } from '@nestjs/testing';
import { LobbyMembershipService } from './lobby-membership.service';

describe('LobbyMembershipService', () => {
  let service: LobbyMembershipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LobbyMembershipService],
    }).compile();

    service = module.get<LobbyMembershipService>(LobbyMembershipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
