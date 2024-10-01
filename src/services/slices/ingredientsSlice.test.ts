import reducer, { initialState } from './ingredientsSlice';
import { fetchIngredients } from './ingredientsSlice';
import { PayloadAction } from '@reduxjs/toolkit';

describe('ingredientsSlice', () => {
  it('должен вернуть начальное состояние', () => {
    const action: PayloadAction<{}> = { type: 'INIT', payload: {} };
    expect(reducer(undefined, action)).toEqual(initialState);
  });

  describe('reducers', () => {
    it('тест fetchIngredients.pending', () => {
      const action = { type: fetchIngredients.pending.type };
      const state = reducer(initialState, action);
      expect(state.isLoading).toBe(true);
      expect(state.error).toBe(null);
    });

    it('тест fetchIngredients.rejected', () => {
      const error = 'Ошибка';
      const action = {
        type: fetchIngredients.rejected.type,
        error: { message: error }
      };
      const state = reducer(initialState, action);
      expect(state.isLoading).toBe(false);
      expect(state.error).toBe(error);
    });

    it('должен обработать fetchIngredients.fulfilled', () => {
      const payload = [{ id: 1, name: 'Ингредиент' }];
      const action = { type: fetchIngredients.fulfilled.type, payload };
      const state = reducer(initialState, action);
      expect(state.isLoading).toBe(false);
      expect(state.ingredients).toEqual(payload);
    });
  });
});
