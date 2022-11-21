import "./YoutubeForm.css";
import {
  Form,
  Formik,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik"; // 1. after install.. import
import * as Yup from "yup";
import TextError from "./TextError";

// 2. Set initial Values
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  social: {
    facebook: "",
    instagram: "",
  },
  phoneNumber: ["", ""],
  phNumbers: [""],
  // address: "",
};

// 3. Set onSubmit Method
const onSubmit = (values, onSubmitProps) => {
  console.log("Form data:", values);
  onSubmitProps.setSubmitting(false)
};

// 4. set validate Method
const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string().required("required").email("invalid email Format"),
  channel: Yup.string().required("required"),
});

// field Level Validation
const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

const YoutubeForm = () => {
  return (
    // 5. Call Methods inside Formik component
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {/* 6. Set Form Component */}
      {formik => {
        return (
      <Form>
        <div className="formControl">
          <label htmlFor="name">Name</label>
          {/* It include onChange, onBlur, Values */}
          <Field type="text" id="name" name="name" />
          {/* Error Message */}
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="formControl">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>

        <div className="formControl">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            placeholder="Youtube Channel Name"
          />
          <ErrorMessage name="channel" component={TextError} />
        </div>

        <div className="formControl">
          <label htmlFor="facebook">Facebook</label>
          <Field
            type="text"
            id="facebook"
            name="social.facebook"
            placeholder="Facebook name"
          />
        </div>

        <div className="formControl">
          <label htmlFor="instagram">Instagram</label>
          <Field
            type="text"
            id="instagram"
            name="social.instagram"
            placeholder="instagram name"
          />
        </div>

        <div className="formControl">
          <label htmlFor="phoneNumber1">Phone Number</label>
          <Field
            type="number"
            id="phoneNumber1"
            name="phoneNumber[0]"
            placeholder="phoneNumber1"
          />
        </div>

        <div className="formControl">
          <label htmlFor="phoneNumber2">Phone Number</label>
          {/* //Fast Field  */}
          <FastField
            type="number"
            id="phoneNumber2"
            name="phoneNumber[1]"
            placeholder="Youtube phoneNumber2 Name"
          />
        </div>

        <div className="formControl">
          <label> Phone Numbers </label>
          <FieldArray name="phNumbers">
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;
              return (
                <div>
                  {phNumbers.map((phNumber, index) => (
                    <div key={index}>
                      <Field type="text" name={`phNumbers[${index}]`} />
                      {index > 0 && (
                        <button type="button" onClick={() => remove(index)}>
                          {" "}
                          -{" "}
                        </button>
                      )}
                      <button type="button" onClick={() => push("")}>
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>

        <div className="formControl">
          <label htmlFor="comments">Comments</label>
          <Field
            as="textarea"
            type="text"
            id="comments"
            name="comments"
            validate={validateComments}
          />

          <ErrorMessage name="comments" component={TextError} />
        </div>

        {/* Render controlled component
        <div className="formControl">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <input id="address" {...field} />
                  {meta.touched && meta.error ? (
                    <div> {meta.error} </div>
                  ) : null}
                </div>
              );
            }}
          </Field>
        </div> */}

        <button disabled={formik.isSubmitting} type="submit">Submit</button>
      </Form>
      )}}
    </Formik>
  );
};

export default YoutubeForm;
