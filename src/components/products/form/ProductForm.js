import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { saveProductValidationSchema } from "./ProductFormValidation";
import { Button, FormContainer, Input } from "../../atoms";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { saveProduct } from "../../../redux";
import { useNavigate } from "react-router-dom";

export const ProductForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(saveProductValidationSchema),
    mode: "onChange",
  });
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSave = (data) => {
    console.log(data);
    console.log(image);
    dispatch(
      saveProduct({
        product: {
          ...data,
          image,
        },
      })
    )
      // .unwrap()
      // .then(() => {
      //   navigate("/");
      // });
  };
  return (
    <FormContainer>
      <Controller
        name="name"
        defaultValue=""
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              helperText={errors.name?.message}
              error={!!errors.name}
              label="Product name"
            />
          );
        }}
      />
      <Controller
        name="description"
        defaultValue=""
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              helperText={errors.description?.message}
              error={!!errors.description}
              label="description"
            />
          );
        }}
      />
      <Controller
        name="category"
        defaultValue=""
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              helperText={errors.category?.message}
              error={!!errors.category}
              label="category"
            />
          );
        }}
      />
      <Controller
        name="brand"
        defaultValue=""
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              helperText={errors.brand?.message}
              error={!!errors.brand}
              label="brand"
            />
          );
        }}
      />
      <Controller
        name="price"
        defaultValue=""
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              type="number"
              onChange={onChange}
              helperText={errors.price?.message}
              error={!!errors.price}
              label="price"
            />
          );
        }}
      />
      <FileBase64
        type="file"
        multiple={false}
        onDone={({ base64 }) => {
          setImage(base64);
        }}
      />
      <Button onClick={handleSubmit(onSave)}>save product</Button>
    </FormContainer>
  );
};
