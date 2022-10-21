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

const CustomSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className="d-d-div">
            <div className="select-d-d">
                <label htmlFor={field.name}>{label}</label>
                <select className="forms-select" {...field} {...props} />
            </div>
            <div className="error-message">
                <ErrorMessage name={field.name} />
            </div>
        </div >
    )
}

export default function Forms() {
    const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

    const navigate = useNavigate();

    const properForm = Yup.object({
        surname: Yup.string()
            .required("Required")
            .min(2, "Must be at least 2 characters")
            .max(15, "Must be 15 characters or less"),
        name: Yup.string()
            .required("Required")
            .min(2, "Must be at least 2 characters")
            .max(15, "Must be 15 characters or less"),
        email: Yup.string()
            .required("Required")
            .email("Invalid email address"),
        phone: Yup.string()
            .required("Required")
            .matches(phoneRegExp, "Phone number is not valid"),
        age: Yup.number()
            .required("Required")
            .min(0, "Invalid age")
            .max(110, "Invalid age"),
        income: Yup.string()
            .required("Required")
            .oneOf(["jobless",
                "<800",
                "800-2500",
                "2500-5000",
                ">5000"], "Invalid income")
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
                            <CustomTextInput label="Surname:" name="surname" type="text" />
                            <CustomTextInput label="Name:" name="name" type="text" />
                            <CustomTextInput label="Email:" name="email" type="text" />
                            <CustomTextInput label="Phone:" name="phone" type="text" />
                            <CustomTextInput label="Age:" name="age" type="number" />
                            <CustomSelect label="Income:" name="income" >
                                <option value="">select</option>
                                <option value="jobless">I'm jobless</option>
                                <option value="<800">less than 800 $</option>
                                <option value="800-2500">800 $ - 2500 $</option>
                                <option value="2500-5000">2500 $ - 5000 $</option>
                                <option value=">5000">more than 5000 $</option>
                            </CustomSelect>
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