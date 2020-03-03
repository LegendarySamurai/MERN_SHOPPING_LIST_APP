import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
	getItems,
	addItem,
	removeItem
} from '../../redux/shopping-list/shopping-list.actions';

import PropTypes from 'prop-types';

import {
	Container,
	ListGroup,
	ListGroupItem,
	Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ShoppingList = ({ shoppingListItems, getItems, removeItem }) => {
	useEffect(() => {
		getItems();
	}, []);

	return (
		<div className="shopping-list-container">
			<Container>
				<Button
					color="dark"
					style={ { marginBottom: '2rem' } }
					onClick={ () => {
						const name = prompt('Enter shopping item name:');
						if (name) {
							// setItems([...items, { name }])
						}
					} }
				>
					Add item
				</Button>
				<ListGroup>
					<TransitionGroup className="shopping-list">
						{
							shoppingListItems.map(({ id, name }) => (
								<CSSTransition
									key={ id }
									timeout={ 500 }
									classNames="fade"
								>
									<ListGroupItem>
										<Button
											className="remove-btn"
											color="danger"
											size="sm"
											style={ { marginRight: '.75rem' } }
											onClick={ () => removeItem(id) }
										>
											&times;
										</Button>
										{ name }
									</ListGroupItem>
								</CSSTransition>
							))
						}
					</TransitionGroup>
				</ListGroup>
			</Container>
		</div>
	);
};

ShoppingList.propTypes = {
	getItems: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	shoppingListItems: state.shoppingList.items
});

const mapDispatchToProps = dispatch => ({
	getItems: () => dispatch(getItems()),
	addItem: item => dispatch(addItem(item)),
	removeItem: id => dispatch(removeItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
