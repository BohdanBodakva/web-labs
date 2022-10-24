import { Formik, Form, useField, ErrorMessage } from "formik";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { removeAllGemsFromCartAction } from "../../redux_store/actions";
import "./Forms.css";

export const someErrors = [];

const CustomTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className="d-d-div">
            <div>
                <label htmlFor={field.name}>{label}</label>
                <input className={'forms-text-input ' + (meta.touched && meta.error ? 'is-invalid' : null)}
                    {...field} {...props} autoComplete="off" />
            </div>
            <div className="error-message">
                <ErrorMessage name={field.name} />
            </div>
        </div>
    )
}

export default function Forms() {
    const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

    const navigate = useNavigate();

    const properForm = Yup.object({
        email: Yup.string()
            .required("Required")
            .email("Invalid email address"),
        phone: Yup.string()
            .required("Required")
            .matches(phoneRegExp, "Phone number is not valid"),
        address: Yup.string()
            .required("Required")
            .min(5, "Must be more than 5 characters")
            .max(150, "Must be less than 150 characters")
    });

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(removeAllGemsFromCartAction());
        navigate("/success");
    }


    return (
        <Formik
            initialValues={{
                surname: "",
                name: "",
                email: "",
                phone: "",
                age: "",
                monthIncome: ""
            }}
            validationSchema={properForm}
            onSubmit={onSubmit}
        >

            <section className="forms-section">
                <div className="main-forms">
                    <Form className="m-form">
                        <h2 className="f-header">Please, enter your data</h2>
                        <div className="f-inputs">
                            <CustomTextInput label="Email:" name="email" type="text" />
                            <CustomTextInput label="Phone:" name="phone" type="text" />
                            <CustomTextInput label="Address:" name="address" type="text" />
                        </div>
                        <div className="sbm-bts">
                            <button className="buy-b" type="submit">Buy</button>
                            <button className="reset-b" type="reset">Reset form</button>
                            <Link to="/cart">
                                <button className="back-bb" type="reset">Back</button>
                            </Link>
                        </div>


                    </Form>
                </div>
            </section>


        </Formik>
    )
}