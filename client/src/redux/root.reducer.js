import { combineReducers } from 'redux';
import shoppingListReducer from './shopping-list/shopping-list.reducer';

const rootReducer = combineReducers({
	shoppingList: shoppingListReducer
});

export default rootReducer;
