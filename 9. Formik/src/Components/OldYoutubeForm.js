import "./YoutubeForm.css";
import { useFormik } from "formik"; // 1. after install.. importing Formik
import * as Yup from "yup";

// 2. Set initial Values
const initialValues = {
  name: "",
  email: "",
  channel: "",
};

// 4. Set onSubmit Method
const onSubmit = (values) => {
  console.log("Form data:", values);
};

// 5. set validate
// const validate = (values) => {
//   let erros = {}; // 6. return errors

//   if (!values.name) {
//     erros.name = "Required";
//   }

//   if (!values.email) {
//     erros.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     erros.email = "Invalid email format";
//   }

//   if (!values.channel) {
//     erros.channel = "Required";
//   }

//   return erros;
// };

// 5. set validate
const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string().required("required").email("invalid email Format"),
  channel: Yup.string().required("required"),
});

const OldYoutubeForm = () => {
  // 2. Callling Hook
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  return (
    <div>
      {/* 4. Set onSubmit Method */}
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange} // 3. Set onChange method
            onBlur={formik.handleBlur}
            value={formik.values.name} // 3. Set onChange method Values
          />
          {/* 7. functiom for Validation and visited Field */}
          {formik.touched.name && formik.errors.name ? (
            <div className="error"> {formik.errors.name} </div>
          ) : null}
        </div>

        <div className="formControl">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error"> {formik.errors.email} </div>
          ) : null}
        </div>

        <div className="formControl">
          <label htmlFor="name">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error"> {formik.errors.channel} </div>
          ) : null}
        </div>
        {/* 4. Set onSubmit Method */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OldYoutubeForm;
