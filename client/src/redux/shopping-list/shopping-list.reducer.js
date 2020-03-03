import { v4 as uuidv4 } from 'uuid';

import ShoppingListActionTypes from './shopping-list.types';

const INITIAL_STATE = {
	items: [
		{ id: uuidv4(), name: 'Protein' },
		{ id: uuidv4(), name: 'Gainer' },
		{ id: uuidv4(), name: 'L-Carnitine' },
		{ id: uuidv4(), name: 'BCAA' },
	]
};

const shoppingListReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ShoppingListActionTypes.GET_ITEMS:
			return { ...state, ...action.payload };

		case ShoppingListActionTypes.ADD_ITEM:
			return { ...state };

		case ShoppingListActionTypes.DELETE_ITEM:
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload)
			};

		default:
			return state;
	}
};

export default shoppingListReducer;
