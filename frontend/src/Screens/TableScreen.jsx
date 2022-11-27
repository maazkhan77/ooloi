import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Button,
  Link,
  Icon,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { TbArrowsDownUp } from "react-icons/tb";

const TableScreen = ({ config, data }) => {
  const [listData, SetListData] = useState(data);
  const [sort, SetSort] = useState(true);

  const sortHandler = (type) => {
    console.log(type);
    if (type === "person.name") {
      if (sort) {
        let sortedArray = data.sort((a, b) =>
          a.person.name > b.person.name
            ? 1
            : a.person.name < b.person.name
            ? -1
            : 0
        );
        SetListData(sortedArray);
      } else {
        let sortedArray = data.sort((a, b) =>
          a.person.name < b.person.name
            ? 1
            : a.person.name > b.person.name
            ? -1
            : 0
        );
        SetListData(sortedArray);
      }
    } else if (type !== "joiningDate") {
      if (sort) {
        let sortedArray = data.sort((a, b) =>
          a[type] > b[type] ? 1 : a[type] < b[type] ? -1 : 0
        );
        SetListData(sortedArray);
      } else {
        let sortedArray = data.sort((a, b) =>
          a[type] < b[type] ? 1 : a[type] > b[type] ? -1 : 0
        );
        SetListData(sortedArray);
      }
    } else if (type === "joiningDate") {
      if (sort) {
        let sortedArray = data.sort((a, b) => {
          const [monthA, dayA, yearA] = a[type].split("/");
          const [monthB, dayB, yearB] = b[type].split("/");
          //Changing the format of date to YY/MM/DD for the Date() to work properly
          const dateA = new Date(+yearA, +monthA - 1, +dayA);
          const dateB = new Date(+yearB, +monthB - 1, +dayB);
          return dateA > dateB ? 1 : dateB > dateA ? -1 : 0;
        });
        SetListData(sortedArray);
      } else {
        let sortedArray = data.sort((a, b) => {
          const [monthA, dayA, yearA] = a[type].split("/");
          const [monthB, dayB, yearB] = b[type].split("/");
          //Changing the format of date to YY/MM/DD for the Date() to work properly
          const dateA = new Date(+yearA, +monthA - 1, +dayA);
          const dateB = new Date(+yearB, +monthB - 1, +dayB);
          return dateA > dateB ? -1 : dateB > dateA ? 1 : 0;
        });
        SetListData(sortedArray);
      }
    }
  };
  return (
    <>
      <Box bgColor="white" rounded="lg" shadow="md" px="5" py="5">
        <Table variant="striped" colorScheme="gray" size="sm">
          <Thead>
            <Tr>
              {config &&
                config.map((item, key) => {
                  return item.sortable ? (
                    <Th key={key}>
                      {item.heading}{" "}
                      <Button
                        background="transparent"
                        _hover={{ style: "none" }}
                        onClick={() => {
                          SetSort(!sort);
                          sortHandler(item.value);
                        }}
                      >
                        <Icon as={TbArrowsDownUp} />
                      </Button>
                    </Th>
                  ) : (
                    <Th key={key}>{item.heading}</Th>
                  );
                })}
            </Tr>
          </Thead>
          <Tbody>
            {listData &&
              listData.map((item, index) => (
                <TableRow item={item} config={config} key={index} />
              ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

const TableRow = ({ item, config }) => ( 
  <Tr>
    {config.map((configItem, index) => {
      if (configItem.value.includes(".")) {
        const itemSplit = configItem.value.split(".");
        return (
          <Td key={index}>
            <Flex gap='3' alignItems='center'>
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

export default TableScreen;

//{item[itemSplit[0]][itemSplit[1]]}
