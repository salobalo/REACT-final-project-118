import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoryProducts } from "../../../redux";
import { useParams } from "react-router-dom";
import { useProduct } from "../../../hooks";
import { GridContainer } from "../shared/GridContainer";
import { ProductCard } from "../shared/ProductCard";

export const CategoryProductList = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const { categoryProducts } = useProduct();

  useEffect(() => {
    dispatch(
      fetchCategoryProducts({
        categoryName: categoryName,
        queryUrl: "?size=3&sort=price,asc&page=1",
      })
    );
  }, []);

  return (
    <GridContainer>
      {categoryProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </GridContainer>
  );
};
