import * as Yup from "yup";

const phoneRegExp = /^[\+]{0,1}380([0-9]{9})$/;
const FILE_SIZE = 5242880;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg"];

export const validateSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "User name, should be 2-60 characters!")
    .max(60, "User name, should be 2-60 characters!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Required"),
  position_id: Yup.mixed().required("Required"),
  photo: Yup.mixed()
    .required("Required")
    .test("fileSize", "File too large", (value) => value && value.size < FILE_SIZE)
    .test("fileFormat", "Unsupported Format", (value) => value && SUPPORTED_FORMATS.includes(value.type)),
});
