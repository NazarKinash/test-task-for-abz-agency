import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetUsers, asyncRegister, getPositions } from "../../redux/api";
import { registerSuccessSelector } from "../../redux/slices/registerInfoSlice";
import Modal from "../Modal/Modal";
import { validateSchema } from "./validate";

//

function Register({}) {
  const [positions, setPositions] = useState();
  const [isModal, setIsModal] = useState(false);

  const dispatch = useDispatch();

  const isRegister = useSelector(registerSuccessSelector);

  //
  // ---===Formik configuration===---
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      position_id: null,
      photo: null,
    },
    onSubmit: (values) => {
      dispatch(asyncRegister({ ...values, position_id: Number(values.position_id) }));
      setIsModal(true);
      modalContent.success && formik.resetForm();
    },
    validationSchema: validateSchema,
  });

  //
  // ---===Get positions===---
  useEffect(() => {
    getPositions().then((data) => setPositions(data));
  }, []);

  //
  // ---===Reset form and refresh Users List ===---
  useEffect(() => {
    isRegister && formik.resetForm();
    isRegister && dispatch(asyncGetUsers());
  }, [isRegister]);

  //
  //
  //

  return (
    <>
      {isModal && <Modal setIsModal={setIsModal} />}

      <div className="register" id="register">
        <div className="container">
          <div className="register--wrapper">
            <h2 className="Heaging1 component-title">Register to get a work</h2>
            <div className="form--wrapper">
              <p className="paragraph component-subtitle">
                Attention!After successful registration and alert, update the list of users in the block from the top
              </p>
              <form onSubmit={formik.handleSubmit} className="register--form">
                <label htmlFor="name" className="register--label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.name && formik.errors.name
                      ? "paragraph register--input register--input__error"
                      : "paragraph register--input"
                  }
                  placeholder="Your name"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="invalid-feedback">{formik.errors.name}</div>
                ) : null}
                <label htmlFor="email" className="register--label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.email && formik.errors.email
                      ? "paragraph register--input register--input__error"
                      : "paragraph register--input"
                  }
                  placeholder="Your email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                ) : null}
                <label htmlFor="phone" className="register--label">
                  Phone number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.phone && formik.errors.phone
                      ? "paragraph register--input register--input__error"
                      : "paragraph register--input"
                  }
                  placeholder="+380 XX XXX XX XX"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="invalid-feedback">{formik.errors.phone}</div>
                ) : null}
                <label htmlFor="phone" className="register--label__number">
                  Enter a phone number in international format
                </label>
                <label htmlFor="pisition" className="register--label">
                  Select your position
                </label>
                <div className="register--radio-wrapper">
                  {positions &&
                    !!positions.length &&
                    positions.map((el, i) => (
                      <div key={el.id} className="register--input-radio-container">
                        <input
                          className="register--input__radio"
                          type="radio"
                          id={el.id}
                          name="position_id"
                          value={el.id}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <label className="paragraph register--label__radio" htmlFor={el.id}>
                          {el.name}
                        </label>
                      </div>
                    ))}
                  {formik.touched.position_id && formik.errors.position_id ? (
                    <div className="invalid-feedback">{formik.errors.position_id}</div>
                  ) : null}
                </div>
                <label htmlFor="photo" className="register--label">
                  Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  // value={formik.values.photo}
                  onChange={(e) =>
                    formik.setFieldValue("photo", e.currentTarget.files[0] ? e.currentTarget.files[0] : {})
                  }
                  onBlur={formik.handleBlur}
                  className="register--input__file"
                />
                <label
                  htmlFor="photo"
                  className={
                    formik.touched.photo && formik.errors.photo
                      ? "paragraph register--input register--custom-input__file-error"
                      : "paragraph register--input register--custom-input__file"
                  }
                >
                  {formik.values.photo ? `${formik.values.photo.name}` : "Upload your photo"}
                </label>
                {formik.touched.photo && formik.errors.photo ? (
                  <div className="invalid-feedback">{formik.errors.photo}</div>
                ) : null}
                <div className="register--btn-container">
                  <input className="Btn" type="submit" value="Sing up now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
