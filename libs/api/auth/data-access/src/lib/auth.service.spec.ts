import {AuthService} from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    AuthService.init();
    authService = AuthService.getInstance();
  });

  it('should exist', () => expect(authService).toBeInstanceOf(AuthService));
});
