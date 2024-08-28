import React, { useContext, useEffect } from 'react'
import { Flex, Heading, Button, useDisclosure } from '@chakra-ui/react'
import Summary from '../summary/index'
import ExpenseView from '../expense-view/index'
import { GlobalContext } from '../../context'

const Main = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { totalExpense, setTotalExpense, totalIncome, setTotalIncome, allTransactions } = useContext(GlobalContext);

    useEffect(() => {

        let income = 0;
        let expense = 0;

        allTransactions.forEach(transaction => {
            if (transaction.type === 'income') {
                income += parseFloat(transaction.amount);
                return;
            }
            expense += parseFloat(transaction.amount);
        });

        setTotalIncome(income);
        setTotalExpense(expense);
    }, [allTransactions]);

    return (
        <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'} >
            {/* NavBar using Chakra UI */}
            <Flex alignItems={'center'} justifyContent={'space-around'} mt={'12'} mb={'5'} >
                <Heading color={'blue.400'} display={['none', 'block', 'block', 'block', 'block']} cursor={'default'}>
                    Expense Tracker
                </Heading>
                <Flex alignItems={'center'}>
                    <Button onClick={onOpen} bg='blue.500' color={'white'} ml={'4'} _hover={{ bg: 'blue.700' }}>
                        Add New Transaction
                    </Button>
                </Flex>
            </Flex>

            <Summary totalExpense={totalExpense} totalIncome={totalIncome} isOpen={isOpen} onClose={onClose} />
            <Flex w={'full'} alignItems={'flex-start'} justifyContent={'space-evenly'} flexDirection={['column', 'column', 'column', 'row', 'row']}>
                <ExpenseView data={allTransactions.filter((item) => item.type === 'expense')} type={'expense'} />
                <ExpenseView data={allTransactions.filter((item) => item.type === 'income')} type={'income'} />
            </Flex>
        </Flex>
    )
}

export default Main