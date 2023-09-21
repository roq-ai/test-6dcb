import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required(),
  position: yup.string().required(),
  hired_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
});
