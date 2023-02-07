import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CREATE_ACCOUNT from "./CreateAccountGraphql";

function CreateAccount() {
  const [createFields, setCreateFields] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    description: "",
    nicename: "",
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState();
  const [show, setShow] = useState("show");
  const [create, { loading: createLoading, error: createError }] = useMutation(
    CREATE_ACCOUNT,
    {
      variables: {
        input: {
          username: createFields.email,
          email: createFields.email,
          password: createFields.password,
          firstName: createFields.firstname,
          lastName: createFields.lastname,
        },
      },
      onCompleted: (data) => {
        // navigate("/");
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
        if (error) {
          setErrorMessage("Authentication failed.");
        }
      },
    }
  );
  const handleCreateAccount = async (event) => {
    event.preventDefault();
    create();
  };

  const handleShow = (event) => {
    if (show == "show") {
      setShow("hide");
    } else {
      setShow("show");
    }
  };

  const handleOnChange = (event) => {
    setCreateFields({
      ...createFields,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <section id="main" className="page-customer-account">
      <div className="container">
        <section id="content" className="page-content card card-block ">
          <section className="register-form">
            <p>
              Already have an account? <Link to={'/login'}>Log in instead!</Link>
            </p>
            {errorMessage && (
              <div className="help-block">
                <ul>
                  <li className="alert alert-danger">Authentication failed.</li>
                </ul>
              </div>
            )}
            <form
              id="customer-form"
              className="js-customer-form"
              onSubmit={(event) => handleCreateAccount(event)}
            >
              <section>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    First name
                  </label>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      name="firstname"
                      type="text"
                      required
                      onChange={handleOnChange}
                    />
                    <span className="form-control-comment">
                      Only letters and the dot (.) character, followed by a
                      space, are allowed.
                    </span>
                  </div>
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Last name
                  </label>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      name="lastname"
                      type="text"
                      onChange={handleOnChange}
                      required
                    />
                    <span className="form-control-comment">
                      Only letters and the dot (.) character, followed by a
                      space, are allowed.
                    </span>
                  </div>

                  <div className="col-md-3 form-control-comment"></div>
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Email
                  </label>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Password
                  </label>
                  <div className="col-md-6">
                    <div className="input-group js-parent-focus">
                      {show == "hide" ? (
                        <input
                          className="form-control js-child-focus js-visible-password"
                          name="password"
                          type="text"
                          pattern=".{5,}"
                          required
                          onChange={handleOnChange}
                        />
                      ) : (
                        <input
                          className="form-control js-child-focus js-visible-password"
                          name="password"
                          type="password"
                          pattern=".{5,}"
                          required
                          onChange={handleOnChange}
                        />
                      )}
                      <span className="input-group-btn">
                        <button
                          className="btn"
                          type="button"
                          data-action="show-password"
                          data-text-show="Show"
                          data-text-hide="Hide"
                          onClick={handleShow}
                        >
                          {show == 'hide' ? <span>Hide</span>: <span>Show</span>}
                        </button>
                      </span>
                    </div>
                  </div>

                  <div className="col-md-3 form-control-comment"></div>
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label"></label>
                  <div className="col-md-6">
                    <span className="custom-checkbox">
                      <label>
                        <input name="optin" type="checkbox" value="1" />
                        Receive offers from our partners
                      </label>
                    </span>
                  </div>
                  <div className="col-md-3 form-control-comment"></div>
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required"></label>
                  <div className="col-md-6">
                    <span className="custom-checkbox">
                      <label>
                        <input
                          name="customer_privacy"
                          type="checkbox"
                          required
                        />
                        Customer data privacy
                        <br />
                        <em>
                          The personal data you provide is used to answer
                          queries, process orders or allow access to specific
                          information. You have the right to modify and delete
                          all the personal information found in the "My Account"
                          page.
                        </em>
                      </label>
                    </span>
                  </div>

                  <div className="col-md-3 form-control-comment"></div>
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label"></label>
                  <div className="col-md-6">
                    <span className="custom-checkbox">
                      <label>
                        <input name="newsletter" type="checkbox" value="1" />
                        Sign up for our newsletter
                        <br />
                        <em>...and receive $20 coupon for first shopping</em>
                      </label>
                    </span>
                  </div>

                  <div className="col-md-3 form-control-comment"></div>
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required"></label>
                  <div className="col-md-6">
                    <span className="custom-checkbox">
                      <label>
                        <input
                          name="psgdpr"
                          type="checkbox"
                          value="1"
                          required
                        />
                        I agree to the terms and conditions and the privacy
                        policy
                      </label>
                    </span>
                  </div>

                  <div className="col-md-3 form-control-comment"></div>
                </div>
              </section>

              <footer className="form-footer clearfix">
                <input type="hidden" name="submitCreate" value="1" />

                <button
                  className="btn btn-primary form-control-submit float-xs-right"
                  type="submit"
                >
                  Save
                </button>
              </footer>
            </form>
          </section>
        </section>
      </div>
    </section>
  );
}
export default CreateAccount;
