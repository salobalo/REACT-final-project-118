import React from "react";
import { isUserAdmin } from "../../../helpers";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelecdetProduct } from "../../../redux";

export const ProductCardActions = ({ userData, product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (isUserAdmin(userData)) {
    return (
      <>
        <Button
          onClick={() => {
            navigate(`/products/${product._id}/edit`);
            dispatch(setSelecdetProduct(product));
          }}
        >
          edit
        </Button>
        <Button>delete</Button>
      </>
    );
  }

  return <div>ProductCardActions</div>;
};
