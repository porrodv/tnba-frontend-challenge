import { Dayjs } from 'dayjs';

export const getFormattedDate = (date: Dayjs) => {
  return date.format('MMMM D, YYYY');
};
