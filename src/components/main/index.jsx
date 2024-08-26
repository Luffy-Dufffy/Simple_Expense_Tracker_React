import React from 'react'
import { Flex, Heading, Button, useDisclosure } from '@chakra-ui/react'
import Summary from '../summary/index'
import ExpenseView from '../expense-view/index'

const Main = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'} >
            {/* NavBar using Chakra UI */}
            <Flex alignItems={'center'} justifyContent={'space-around'} mt={'12'} >
                <Heading color={'blue.400'} display={['none', 'block', 'block', 'block', 'block']}>
                    Expense Tracker
                </Heading>
                <Flex alignItems={'center'}>
                    <Button onClick={onOpen} bg='blue.500' color={'white'} ml={'4'} _hover={{ bg: 'blue.700' }}>
                        Add New Transaction
                    </Button>
                </Flex>
            </Flex>
            <Summary isOpen={isOpen} onClose={onClose} />
            <Flex w={'full'} alignItems={'flex-start'} justifyContent={'space-evenly'} flexDirection={['column', 'column', 'column', 'row', 'row']}>
                <ExpenseView />
                <ExpenseView />
            </Flex>
        </Flex>
    )
}

export default Main