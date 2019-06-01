import { Test, TestingModule } from '@nestjs/testing';
import { GetLobbiesService } from '../../../../app/lobbies/services';

describe('GetLobbiesService', () => {
  let service: GetLobbiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetLobbiesService],
    }).compile();

    service = module.get<GetLobbiesService>(GetLobbiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
