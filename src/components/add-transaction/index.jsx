import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, RadioGroup, Radio, ModalFooter, Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalContext } from '../../context/index.jsx'

const TransactionForm = ({ onClose, isOpen }) => {
    const { formData, setFormData, value, setValue, handleFormSubmit } = useContext(GlobalContext);

    function handleFormChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleFormSubmit(formData);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Transaction</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter Description</FormLabel>
                            <Input
                                placeholder='Enter transaction description'
                                name='description'
                                type='text'
                                onChange={handleFormChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Enter Amount</FormLabel>
                            <Input
                                placeholder='Enter transaction amount'
                                name='amount'
                                type='number'
                                onChange={handleFormChange}
                            />
                        </FormControl>
                        <RadioGroup mt={'5'} value={value} onChange={setValue}>
                            <Radio
                                checked={formData.type === 'income'}
                                onChange={handleFormChange}
                                name='type'
                                colorScheme='green'
                                value='income'
                            >Income</Radio>
                            <Radio
                                checked={formData.type === 'expense'}
                                onChange={handleFormChange}
                                name='type'
                                colorScheme='red'
                                value='expense'
                                ml={'2'}
                            >Expense</Radio>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose} mr={'5'}>Cancel</Button>
                        <Button bg={'blue.500'} color={'white'} _hover={{ bg: 'blue.600' }} type='submit' onClick={onClose}>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    )
}

export default TransactionForm