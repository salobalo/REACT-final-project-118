import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { LoginValidationSchema } from "./LoginFormValidation";
import { FormContainer, Input } from "../atoms";
import { Button } from "@mui/material";

export const LoginForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(LoginValidationSchema),
        mode: "onChange",
    });

    const onSubmit = (data)=>{
        console.log("DATA", data);
    }

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
            <Button onClick={handleSubmit(onSubmit) }>login</Button>
        </FormContainer>
    );
} ;