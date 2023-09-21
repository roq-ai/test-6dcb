import * as yup from 'yup';

export const scheduleValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  day_of_week: yup.string().required(),
  employee_id: yup.string().nullable().required(),
});
