/*
 *
 * AddAddress reducer
 *
 */
import produce from 'immer';
import { ADD_ADDRESS, ADD_ADDRESS_FAIL, ADD_ADDRESS_SUCCESS, DEFAULT_ACTION, EDIT_ADDRESS } from './constants';

export const initialState = {
  saveAddress: {
    loading: false,
    err: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const addAddressReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case ADD_ADDRESS:
        draft.saveAddress.loading = true;
        break;

      case EDIT_ADDRESS:
        draft.saveAddress.loading = true;
        break;

      case ADD_ADDRESS_SUCCESS:
        draft.saveAddress.loading = false;
        break;

      case ADD_ADDRESS_FAIL:
        draft.saveAddress.loading = false;
        draft.saveAddress.err = action.payload;
        break;
    }
  });

export default addAddressReducer;
