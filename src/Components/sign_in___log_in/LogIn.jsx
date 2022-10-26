import React, { useEffect, useState, useContext } from "react";
import "./SignIn.css";
import { Formik, Form, useField, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authentification_context/Auth";

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

export default function LogIn() {

    const navigate = useNavigate();

    const properForm = Yup.object({
        username: Yup.string()
            .required("Required")
            .oneOf([Object.keys(localStorage), null], "This user doesn't exist"),
        password: Yup.string()
            .required("Required")
            .test("Incorrect password", function (password) {
                const username = Yup.ref("username");
                return password === localStorage.getItem(this.resolve(username));
            })
    });

    const { setIsAuthentificated } = useContext(AuthContext);

    const onSubmit = (values) => {
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
                {/* {console.log(isAuthentificated)} */}
                <section className="signin-section">
                    <div className="main-forms">
                        <Form className="m-form">
                            <h2 className="f-header">Log In</h2>
                            <div className="f-inputs">
                                <CustomTextInput label="Username:" name="username" type="text" />
                                <CustomTextInput label="Password:" name="password" type="password" />
                            </div>
                            <div className="sbm-bts-log l-dv">
                                <button className="buy-b-log login-button" type="submit">Log In</button>
                                <button className="reset-log-b" type="reset">Reset form</button>
                            </div>
                        </Form>
                    </div>
                </section>

                <div className="login-a-div">
                    Don't have an account? &nbsp; <Link to="/sign-in" className="login-a">Sign In</Link>
                </div>
            </>

        </Formik>
    )
}