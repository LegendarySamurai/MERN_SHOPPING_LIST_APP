import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button,
	Modal, ModalHeader, ModalBody,
	Form, FormGroup, Label, Input } from 'reactstrap';

import { addItem } from '../../redux/shopping-list/shopping-list.actions';

const CustomModal = ({ addItem }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [name, setName] = useState('');

	const toggle = () => setModalIsOpen(!modalIsOpen);

	const onSubmit = e => {
		e.preventDefault();

		const newItem = { name };

		console.log('NEW ITEM =>', newItem);

		addItem(newItem);

		toggle();
	};

	return (
		<div className="custom-modal">
			<Button
				color="dark"
				style={ { marginBottom: '2rem' } }
				onClick={ () => toggle() }>
				Add item
			</Button>
			<Modal
				isOpen={ modalIsOpen }
				toggle={ toggle }
			>
				<ModalHeader toggle={ toggle }>
					Add To Shopping List
				</ModalHeader>
				<ModalBody>
					<Form onSubmit={ onSubmit }>
						<FormGroup>
							<Label for="item">Item</Label>
							<Input
								type="text"
								name={ name }
								id="item"
								placeholder="Add shopping item"
								onChange={ e => setName(e.target.value) }
							/>
						</FormGroup>
						<Button>Add Item</Button>
					</Form>
				</ModalBody>
			</Modal>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CustomModal);
