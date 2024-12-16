import { AuthMiddleware } from './middleware.middleware';

describe('MiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthMiddleware()).toBeDefined();
  });
});
