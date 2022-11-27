import { Flex, Heading } from "@chakra-ui/react"

const TableTitle = ({children}) => {
  return (
    <Flex justifyContent='center'>
      <Heading as="h2" mt="5" mb="5">
        {children}
      </Heading>
    </Flex>
  );
}

export default TableTitle