import { v4 as uuidv4 } from 'uuid';

import ShoppingListActionTypes from './shopping-list.types';

const INITIAL_STATE = {
	items: [
		// { name: 'Protein', id: uuidv4()  },
		// { name: 'Gainer', id: uuidv4() },
		// { name: 'L-Carnitine', id: uuidv4() },
		// { name: 'BCAA', id: uuidv4() },
	],
	loading: false
};

const shoppingListReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ShoppingListActionTypes.GET_ITEMS:
			return {
				...state,
				items: action.payload,
				loading: false
			};

		case ShoppingListActionTypes.ADD_ITEM:
			return {
				...state,
				items: [...state.items, action.payload]
			};

		case ShoppingListActionTypes.DELETE_ITEM:
			return {
				...state,
				items: state.items.filter(item => item._id !== action.payload)
			};

		case ShoppingListActionTypes.ITEMS_LOADING:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
};

export default shoppingListReducer;
