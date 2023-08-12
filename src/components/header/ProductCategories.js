import React from "react";
import { useProduct } from "../../hooks";
import { List, ListItem, styled } from "@mui/material";
import { Link, Text } from "../atoms";

const StyledListItem = styled(ListItem)(() => ({
  padding: "5px 0px 3px 15px",
  margin: "10px",
}));

export const ProductCategories = () => {
  const { categories } = useProduct();
  return (
    <List sx={{ display: "flex" }}>
      {categories.map((category) => {
        const { _id, name } = category;
        return (
          <Link key={_id} to={`/products/categories/${name}?page =1&sort=price,asc`  } >
            <StyledListItem>
              <Text color="#f8f8f8" sx={{ fontWeight: "bold" }} > {name} </Text>
            </StyledListItem>
          </Link>
        );
      })}
    </List>
  );
};
