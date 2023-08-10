import { AppBar, Box, Toolbar, styled } from "@mui/material";
import React from "react";
import { Link } from "../atoms";
import { UserIcon } from "./UserIcon";
import { ProductCategories } from "./ProductCategories";

const StyledAppar = styled(AppBar)(() => ({
  backgroundColor: "#131921",
  padding: "0 37px 0 30px",
}));

const StyledToolBar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  paddingTop: 8,
  paddingBottom: 8,
}));

export const Header = () => {
  return (
    <Box>
      <StyledAppar>
        <StyledToolBar>
          <Link to="/">home</Link>
          <Box sx={{ display: "flex" }}>
            <div> </div>
            <UserIcon />
          </Box>
        </StyledToolBar>
        <ProductCategories />
      </StyledAppar> 
    </Box>
  );
};
