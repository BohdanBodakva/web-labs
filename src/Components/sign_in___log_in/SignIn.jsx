import React, { useEffect, useState, useContext } from "react";
import "./SignIn.css";
import { Formik, Form, useField, ErrorMessage } from "formik";
import * as Yup from "yup";
import YupPassword from 'yup-password';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authentification_context/Auth";
YupPassword(Yup);

const CustomTextInput = ({ label, onChange, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className="d-d-div">
            <div>
                <label htmlFor={field.name}>{label}</label>
                <input onChange={onChange} className={'forms-text-input ' + (meta.touched && meta.error ? 'is-invalid' : null)}
                    {...field} {...props} autoComplete="off" />
            </div>
            <div className="error-message">
                <ErrorMessage name={field.name} />
            </div>
        </div>
    )
}

export default function SignIn() {

    const navigate = useNavigate();
    const { isAuthentificated, setAuthentificated } = useContext(AuthContext);

    const properForm = Yup.object({
        username: Yup.string()
            .required("Required")
            .min(3, "Must be more than 2 character")
            .notOneOf([Object.keys(localStorage), null], "This username already exists"),
        password: Yup.string()
            .required("Required")
            .min(5, "Must be more than 5 character")
            .max(35, "Must be less than 35 characters")
            .minUppercase(1, 'Must contain at least 1 uppercase letter')
            .minNumbers(1, 'Must contain at least 1 number'),
        confirmPassword: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("password"), null], "Passwords must match")
    });

    const { setIsAuthentificated } = useContext(AuthContext);

    const onSubmit = (values) => {
        localStorage.setItem(values.username, values.password);
        setIsAuthentificated(true);
        navigate("/");
    }

    return (
        <Formik
            initialValues={{
                username: "",
                password: "",
                confirmPassword: ""
            }}
            validationSchema={properForm}
            onSubmit={onSubmit}
        >
            <>
                <section className="signin-section">
                    <div className="main-forms">
                        <Form className="m-form">
                            <h2 className="f-header">Sign In</h2>
                            <div className="f-inputs">
                                <CustomTextInput label="Username:" name="username" type="text" />
                                <CustomTextInput label="Password:" name="password" type="password" />
                                <CustomTextInput label="Confirm password:" name="confirmPassword" type="password" />
                            </div>
                            <div className="sbm-bts-log l-dv">
                                <button className="buy-b-log login-button" type="submit">Log In</button>
                                <button className="reset-log-b" type="reset">Reset form</button>
                            </div>
                        </Form>
                    </div>
                </section>

                <div className="login-a-div">
                    Already have an account? &nbsp; <Link to="/log-in" className="login-a">Log In</Link>
                </div>
            </>

        </Formik>
    )
}