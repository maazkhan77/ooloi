import { Box, Flex, Image, Link, Td, Tr } from "@chakra-ui/react";

const TableRow = ({ item, config }) => (
  <Tr>
    {config.map((configItem, index) => {
      if (configItem.value.includes(".")) {
        const itemSplit = configItem.value.split(".");
        return (
          <Td key={index}>
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
          <Td key={index}>
            <Link color="blue" textDecor={"underline"}>
              {item[`${configItem.value}`]}
            </Link>
          </Td>
        );
      }
      return <Td key={index}>{item[`${configItem.value}`]}</Td>;
    })}
  </Tr>
);
 

export default TableRow;