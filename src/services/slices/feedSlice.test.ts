import reducer, { initialState } from './feedSlice';
import { fetchFeeds } from './feedSlice';

describe('feedSlice', () => {
  describe('reducers', () => {
    it('тест fetchFeeds.pending', () => {
      const action = { type: fetchFeeds.pending.type };
      const state = reducer(initialState, action);
      expect(state.isLoading).toBe(true);
      expect(state.error).toBe(null);
      expect(state.feeds.orders).toEqual([]);
    });

    it('тест fetchFeeds.rejected', () => {
      const error = 'Error message';
      const action = {
        type: fetchFeeds.rejected.type,
        error: { message: error }
      };
      const state = reducer(initialState, action);
      expect(state.isLoading).toBe(false);
      expect(state.error).toBe(error);
    });

    it('тест fetchFeeds.fulfilled', () => {
      const payload = { orders: [], total: 0, totalToday: 0 };
      const action = { type: fetchFeeds.fulfilled.type, payload };
      const state = reducer(initialState, action);
      expect(state.isLoading).toBe(false);
      expect(state.feeds).toEqual(payload);
    });
  });
});
