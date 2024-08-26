import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, RadioGroup, Radio, ModalFooter, Button } from '@chakra-ui/react'
import React from 'react'

const TransactionForm = ({ onClose, isOpen }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form>
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
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Enter Amount</FormLabel>
                            <Input
                                placeholder='Enter transaction amount'
                                name='amount'
                                type='number'
                            />
                        </FormControl>
                        <RadioGroup mt={'5'}>
                            <Radio name='type' colorScheme='green' value='income'>Income</Radio>
                            <Radio name='type' colorScheme='red' value='expense' ml={'2'}>Expense</Radio>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose} mr={'5'}>Cancel</Button>
                        <Button>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    )
}

export default TransactionForm