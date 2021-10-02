import dayjs from "dayjs";
import "dayjs/locale/en";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.locale("en");
dayjs.extend(relativeTime);


export const formatDate = (value:Date):string => {
  const date = dayjs(value, "MM-DD-YYYY");
  const dateNow = date.fromNow();
  return dateNow ;
}