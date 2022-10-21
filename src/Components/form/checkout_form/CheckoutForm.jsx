import React from "react";
import { Link } from "react-router-dom";
import "./CheckoutForm.css";

export default function CheckoutForm() {
    return (
        <section className="s-s">
            <div className="main-form-div">
                <div className="my-form">
                    <div className="form-header">
                        <h2>Please, enter your data</h2>
                    </div>
                    <form className="buy-form">
                        <div className="center-form">
                            <div className="t-form">
                                <label>Surname:
                                    <input
                                        type="text"
                                        name="surname"
                                    />
                                </label>
                                <label>Name:
                                    <input
                                        type="number"
                                        name="name"
                                    />
                                </label>
                            </div>
                            <div className="t-form">
                                <label>Email:
                                    <input
                                        type="number"
                                        name="email"
                                    />
                                </label>
                                <label>Phone:
                                    <input
                                        type="number"
                                        name="phone"
                                    />
                                </label>
                            </div>
                            <div className="t-form">
                                <label className="age-label">Age:
                                    <input
                                        type="number"
                                        name="age"
                                    />
                                </label>
                                <label className="month-income-label">Month income:
                                    <select>
                                        <option value="">select</option>
                                        <option value="jobless">I'm jobless</option>
                                        <option value="<800">less than 800 $</option>
                                        <option value="800-2500">800 $ - 2500 $</option>
                                        <option value="2500-5000">2500 $ - 5000 $</option>
                                        <option value=">5000">more than 5000 $</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="submit-button">
                            <Link to="/success">
                                <input type="submit" value="Buy" className="s-button" />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}