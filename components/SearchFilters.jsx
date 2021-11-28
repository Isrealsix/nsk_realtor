import { useState } from "react";
import { useRouter } from "next/router";
import { Flex, Select, Box } from '@chakra-ui/react';
import { filterData, getFilterValues } from "../utils/filterData";

export default function SearchFilters() {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues)

    values.forEach(item => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    })

    router.push({pathname: path, query})
  }
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters.map(filter => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
            cursor="pointer"
            onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}>
            {filter?.items?.map(item => (
              <option
                key={item.value}
                value={item.value}
              >
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  )
}
