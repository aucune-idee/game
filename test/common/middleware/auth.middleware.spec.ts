import { AuthMiddleware } from '../../../app/common/middleware/auth.middleware';

describe('AuthMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthMiddleware(null)).toBeDefined();
  });
});
