import ShoppingListActionTypes from './shopping-list.types';

export const getItems = () => ({
	type: ShoppingListActionTypes.GET_ITEMS
});

export const addItem = item => ({
	type: ShoppingListActionTypes.ADD_ITEM,
	payload: item
});

export const removeItem = id => ({
	type: ShoppingListActionTypes.DELETE_ITEM,
	payload: id
});
