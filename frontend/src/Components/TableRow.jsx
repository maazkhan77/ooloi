import { Box, Flex, Image, Link, Td, Tr } from "@chakra-ui/react";

const TableRow = ({ item, config }) => (
  <Tr>
    {config.map((configItem, index) => {
      if (configItem.value.includes(".")) {
        const itemSplit = configItem.value.split(".");
        return (
          <Td
            key={index}
            fontWeight="400"
            fontSize={"14px"}
            border="1px solid #E1E1E1"
          >
            <Flex gap="3" alignItems="center">
              <Box>
                <Image src={`/Assets/${item[itemSplit[0]]["avatar"]}`} />
              </Box>
              <Box>{item[itemSplit[0]][itemSplit[1]]}</Box>
            </Flex>
          </Td>
        );
      } else if (configItem.value === "email") {
        return (
          <Td
            key={index}
            fontWeight="400"
            fontSize={"14px"}
            border="1px solid #E1E1E1"
          >
            <Link color="blue" textDecor={"underline"}>
              {item[`${configItem.value}`]}
            </Link>
          </Td>
        );
      }
      return (
        <Td
          key={index}
          fontWeight="400"
          fontSize={"14px"}
          border="1px solid #E1E1E1"
        >
          {item[`${configItem.value}`]}
        </Td>
      );
    })}
  </Tr>
);
 

export default TableRow;