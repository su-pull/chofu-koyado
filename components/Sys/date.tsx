import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";

type Props = {
  dateString: string;
};

export const Date: React.FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "MMMM do, yyyy", { locale: ja })}</time>;
};

export default Date;
