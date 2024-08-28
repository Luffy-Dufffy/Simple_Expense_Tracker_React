import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react'

const ExpenseView = ({ data, type }) => {
    return (
        <Box flex={1} w={'full'} bg={'white'} mr={'4'} mt={'10'} p={'5'} pb={'4'} border={'1px solid'} borderColor={'gray.100'} borderRadius={'12'} minH={'200px'}>
            <Flex justifyContent={'space-around'} alignItems={'center'} flexDirection={'column'} gap={'5'}>
                <Heading size={'md'} color={'red.700'}>
                    {type === 'income' ? "Income" : "Expense"}
                </Heading>

                <Flex w={'full'} flexDir={'column'} gap={'2'}>
                    {
                        data.length ?
                        data.map(item => <>
                            <Flex
                                bg={type === 'expense' ? 'red.50' : 'blue.50'}
                                justifyContent={'space-between'}
                                alignItems={'center'}
                                border={'1px solid'}
                                borderColor={type === 'expense' ? 'red.50' : 'blue.50'}
                                p={'4'}
                                borderRadius={'8'}
                                w={'full'}
                            >
                                <Flex alignItems={'center'} justifyContent={'center'}>
                                    <Text ml={'3'} fontWeight={'bold'} color={'gray.600'}>{item.description}</Text>
                                </Flex>
                                <Text>{item.amount}</Text>
                            </Flex>
                        </>
                        )
                        : (<Text>
                            No {type === 'income' ? "income" : "expenses"} found.
                        </Text>)
                    }
                </Flex>
            </Flex>
        </Box>
    );
}

export default ExpenseView