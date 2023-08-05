import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { LoginValidationSchema } from "./LoginFormValidation";
import { Button, FormContainer, Input } from "../atoms";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../redux";

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidationSchema),
    mode: "onChange",
  });

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log("DATA", data);
    dispatch(authenticateUser({ formValues: data, isLogin: true }));
  };

  return (
    <FormContainer>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          );
        }}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              type="password"
              label="password"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          );
        }}
      />
      <Button onClick={handleSubmit(onSubmit)}>login</Button>
    </FormContainer>
  );
};
