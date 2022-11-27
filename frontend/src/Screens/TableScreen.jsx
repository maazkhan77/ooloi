import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Box,
  Button,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { TbArrowsDownUp } from "react-icons/tb";
import TableRow from "../Components/TableRow";

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
      <Table
        variant="striped"
        colorScheme="gray"
        size="sm"
        width="fit-content"
        ml="5rem"
      >
        <Thead>
          <Tr>
            {config &&
              config.map((item, key) => {
                return item.sortable ? (
                  <Th
                    key={key}
                    fontWeight="600"
                    fontSize={"14px"}
                    border="1px solid #E1E1E1"
                    textTransform="capitalize"
                  >
                    <Flex alignItems={"center"}>
                      <Box>{item.heading}</Box>
                      <Box>
                        <Button
                          ml="-2"
                          background="transparent"
                          _hover={{ style: "none" }}
                          onClick={() => {
                            SetSort(!sort);
                            sortHandler(item.value);
                          }}
                        >
                          <Icon as={TbArrowsDownUp} />
                        </Button>
                      </Box>
                    </Flex>
                  </Th>
                ) : (
                  <Th
                    key={key}
                    fontWeight="600"
                    fontSize={"14px"}
                    border="1px solid #E1E1E1"
                    textTransform="capitalize"
                  >
                    {item.heading}
                  </Th>
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
    </>
  );
};

export default TableScreen;


