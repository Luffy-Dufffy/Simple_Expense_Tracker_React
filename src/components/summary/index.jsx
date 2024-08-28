import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import TransactionForm from '../add-transaction'
import TransactionChartSummary from '../chart/index'


const Summary = ({ onClose, isOpen, totalIncome, totalExpense }) => {


    return (
        <Box p={'6'} border={'1px solid'} borderColor={'gray.100'} overflow={'hidden'} borderRadius={'10'} background={'white'} display={'flex'}>
            <Flex w={'full'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' }}
            >
                <Flex flex={1} w={'full'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} ml={'0'} mr={'0'}>
                    <Heading size={'md'} mb={'4'} color={'gray.600'}>
                        Balance is ${totalIncome - totalExpense}
                    </Heading>
                    <Flex justifyContent={'space-evenly'} alignItems={'center'} bg={'gray.50'} w={'full'} h={'100px'} border={'1px solid'} borderColor={'gray.100'}>
                        <Flex flexDirection={'column'}>
                            <Heading color={'gray.700'}>${totalIncome}</Heading>
                            <Text color={'gray.600'} >Total Income</Text>
                        </Flex>
                    </Flex>
                    <Flex justifyContent={'space-evenly'} alignItems={'center'} bg={'gray.50'} w={'full'} h={'100px'} border={'1px solid'} borderColor={'gray.100'}>
                        <Flex flexDirection={'column'}>
                            <Heading color={'gray.700'}>${totalExpense}</Heading>
                            <Text color={'gray.600'} >Total Expenses</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Box flex={1} mt={'10'} mr={'5'} w={'300px'} h={'200px'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={'5'}>
                    <Flex flex={1} w={'full'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} ml={'0'} mr={'0'}>
                        <Heading size={'md'} mb={'4'} color={'gray.600'}>
                            Income Expense Chart
                        </Heading>
                        <TransactionChartSummary income={totalIncome} expense={totalExpense} />
                    </Flex>


                </Box>
            </Flex>
            <TransactionForm onClose={onClose} isOpen={isOpen} />
        </Box>
    )
}

export default Summary