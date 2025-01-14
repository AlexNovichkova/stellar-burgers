import userReducer, {
  initialState,
  registerUser,
  loginUser,
  logoutUser,
  checkUserAuth,
  updateUser
} from './userSlice';

describe('тесты для User Slice', () => {
  describe('Registration', () => {
    it('тест registerUser.pending', () => {
      const action = { type: registerUser.pending.type };
      const newState = userReducer(initialState, action);
      expect(newState.isLoading).toBe(true);
      expect(newState.error).toBe(null);
    });

    it('тест registerUser.rejected', () => {
      const action = {
        type: registerUser.rejected.type,
        error: { message: 'Registration failed' }
      };
      const newState = userReducer(initialState, action);
      expect(newState.isLoading).toBe(false);
      expect(newState.error).toBe('Registration failed');
    });

    it('тест registerUser.fulfilled', () => {
      const userPayload = {
        user: { email: 'test@test.com', name: 'Test User' },
        refreshToken: 'refresh',
        accessToken: 'access'
      };
      const action = {
        type: registerUser.fulfilled.type,
        payload: userPayload
      };
      const newState = userReducer(initialState, action);
      expect(newState.isLoading).toBe(false);
      expect(newState.user).toEqual(userPayload.user);
      expect(newState.error).toBe(null);
    });
  });

  describe('Login', () => {
    it('тест loginUser.pending', () => {
      const action = { type: loginUser.pending.type };
      const newState = userReducer(initialState, action);
      expect(newState.isLoading).toBe(true);
      expect(newState.error).toBe(null);
    });

    it('тест loginUser.rejected', () => {
      const action = {
        type: loginUser.rejected.type,
        error: { message: 'Login failed' }
      };
      const newState = userReducer(initialState, action);
      expect(newState.isLoading).toBe(false);
      expect(newState.error).toBe('Login failed');
    });

    it('тест loginUser.fulfilled', () => {
      const userPayload = {
        user: { email: 'test@test.com', name: 'Test User' },
        refreshToken: 'refresh',
        accessToken: 'access'
      };
      const action = { type: loginUser.fulfilled.type, payload: userPayload };
      const newState = userReducer(initialState, action);
      expect(newState.isLoading).toBe(false);
      expect(newState.user).toEqual(userPayload.user);
      expect(newState.isAuthenticated).toBe(true);
      expect(newState.isAuthChecked).toBe(true);
      expect(newState.error).toBe(null);
    });
  });

  describe('Logout', () => {
    it('тест logoutUser.pending', () => {
      const action = { type: logoutUser.pending.type };
      const newState = userReducer(initialState, action);
      expect(newState.isLoading).toBe(true);
      expect(newState.error).toBe(null);
    });

    it('тест logoutUser.fulfilled', () => {
      const action = { type: logoutUser.fulfilled.type };
      const newState = userReducer(initialState, action);
      expect(newState.isLoading).toBe(false);
      expect(newState.user).toEqual({ email: '', name: '' });
      expect(newState.isAuthenticated).toBe(false);
      expect(newState.error).toBe(null);
    });
  });

  describe('Проверка авторизации', () => {
    it('тест checkUserAuth.pending', () => {
      const action = { type: checkUserAuth.pending.type };
      const newState = userReducer(initialState, action);
      expect(newState.isLoading).toBe(true);
      expect(newState.error).toBe(null);
      expect(newState.isAuthChecked).toBe(false);
    });

    it('тест checkUserAuth.rejected', () => {
      const action = {
        type: checkUserAuth.rejected.type,
        error: { message: 'Authentication check failed' }
      };
      const newState = userReducer(initialState, action);
      expect(newState.isLoading).toBe(false);
      expect(newState.error).toBe('Authentication check failed');
      expect(newState.isAuthChecked).toBe(true);
      expect(newState.isAuthenticated).toBe(false);
    });

    it('тест checkUserAuth.fulfilled', () => {
      const action = { type: checkUserAuth.fulfilled.type };
      const newState = userReducer(initialState, action);
      expect(newState.isLoading).toBe(false);
      expect(newState.error).toBe(null);
      expect(newState.isAuthenticated).toBe(true);
      expect(newState.isAuthChecked).toBe(true);
    });
  });

  describe('Updating User', () => {
    it('тест updateUser.pending', () => {
      const action = { type: updateUser.pending.type };
      const newState = userReducer(initialState, action);
      expect(newState.isLoading).toBe(true);
      expect(newState.error).toBe(null);
    });

    it('тест updateUser.rejected', () => {
      const action = {
        type: updateUser.rejected.type,
        error: { message: 'Update failed' }
      };
      const newState = userReducer(initialState, action);
      expect(newState.isLoading).toBe(false);
      expect(newState.error).toBe('Update failed');
    });

    it('тест updateUser.fulfilled', () => {
      const userPayload = {
        user: { email: 'updated@test.com', name: 'Updated User' }
      };
      const action = { type: updateUser.fulfilled.type, payload: userPayload };
      const newState = userReducer(initialState, action);
      expect(newState.isLoading).toBe(false);
      expect(newState.user).toEqual(userPayload.user);
      expect(newState.error).toBe(null);
    });
  });
});
