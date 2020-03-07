import axios from 'axios';
import ShoppingListActionTypes from './shopping-list.types';

export const getItems = () => dispatch => {
	dispatch(setItemsLoading());

	// '/api/items' works due to "proxy": "http://localhost:5000" inside package.json
	axios
		.get('/api/items')
		.then(response => dispatch({
			type: ShoppingListActionTypes.GET_ITEMS,
			payload: response.data
		}));
};

export const addItem = item => dispatch => {
	axios
		.post('/api/items/', item)
		.then(response => dispatch({
			type: ShoppingListActionTypes.ADD_ITEM,
			payload: response.data
		}));
};

export const removeItem = id => dispatch => {
	axios
		.delete(`api/items/${ id }`)
		.then(response => dispatch({
			type: ShoppingListActionTypes.DELETE_ITEM,
			payload: id
		}))
};

export const setItemsLoading = () => ({
	type: ShoppingListActionTypes.ITEMS_LOADING
});
