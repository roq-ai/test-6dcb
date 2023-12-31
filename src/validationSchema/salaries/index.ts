import * as yup from 'yup';

export const salaryValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  payment_date: yup.date().required(),
  employee_id: yup.string().nullable().required(),
});
