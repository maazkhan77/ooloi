import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from '@chakra-ui/react'
import data from '../data'

const Table = () => {
  return (
    <>
    <Box bgColor='white' rounded='lg' shadow='lg' px='5' py='5'>
					<Table variant='striped' colorScheme='gray' size='sm'>
						<Thead>
							<Tr>
								<Th>ID</Th>
								<Th>NAME</Th>
								<Th>PRICE</Th>
								<Th>CATEGORY</Th>
								<Th>BRAND</Th>
								<Th></Th>
							</Tr>
						</Thead>
						<Tbody>
						</Tbody>
					</Table>
				</Box>
    </>
  )
}

export default Table