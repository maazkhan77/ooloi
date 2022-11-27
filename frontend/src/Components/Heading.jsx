import { Flex, Heading } from "@chakra-ui/react"

const TableTitle = ({children}) => {
  return (
    <>
      <Heading as="h2" mt="5" mb="5" ml='5rem'>
        {children}
      </Heading>
    </>
  );
}

export default TableTitle