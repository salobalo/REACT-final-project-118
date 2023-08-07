import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidationSchema } from "./RegisterFormValidation";
import { Button, FormContainer, Input } from "../atoms";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../redux";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
    mode: "onChange",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("DATA", data);
    dispatch(authenticateUser({ formValues: data }))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      // .catch();
  };

  return (
    <FormContainer>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="firstName"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          );
        }}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="lastName"
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          );
        }}
      />
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
      <Button onClick={handleSubmit(onSubmit)}>submit</Button>
    </FormContainer>
  );
};
