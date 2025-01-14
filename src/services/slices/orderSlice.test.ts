import orderReducer, { initialState, sendOrder } from './orderSlice';
describe('тест асинхронных экшенов', () => {
  describe('тесты для sendOrder', () => {
    it('тест sendOrder.fulfilled', () => {
      const action = {
        type: sendOrder.fulfilled.type,
        payload: {
          order: {
            _id: 'string',
            status: 'string',
            name: 'string',
            createdAt: 'string',
            updatedAt: 'string',
            number: 'number',
            ingredients: ['test']
          }
        }
      };

      const newState = orderReducer(initialState, action);
      expect(newState).toEqual({
        constructorItems: {
          bun: {
            _id: '',
            price: 0
          },
          ingredients: []
        },
        orderRequest: false,
        orderModalData: {
          _id: 'string',
          status: 'string',
          name: 'string',
          createdAt: 'string',
          updatedAt: 'string',
          number: 'number',
          ingredients: ['test']
        },
        isLoading: false,
        error: null,
        orders: []
      });
    });

    it('тест sendOrder.rejected', () => {
      const action = {
        type: sendOrder.rejected.type,
        error: { message: 'test' }
      };
      const newState = orderReducer(initialState, action);
      expect(newState).toEqual({
        constructorItems: {
          bun: {
            _id: '',
            price: 0
          },
          ingredients: []
        },
        orderRequest: false,
        orderModalData: null,
        isLoading: false,
        error: 'test',
        orders: []
      });
    });

    it('тест sendOrder.pending', () => {
      const action = {
        type: sendOrder.pending.type
      };

      const newState = orderReducer(initialState, action);
      expect(newState.orderRequest).toBe(true);
    });
  });
});
