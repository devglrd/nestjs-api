import { Test, TestingModule } from '@nestjs/testing';
import { UserRessource } from './user-ressource';

describe('UserRessource', () => {
  let provider: UserRessource;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRessource],
    }).compile();

    provider = module.get<UserRessource>(UserRessource);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
