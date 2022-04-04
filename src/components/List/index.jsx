import { Card } from "../Card";

export const List = ({ listTransactions }) => {
  return listTransactions.map((el, index) => (
    <Card listTransactions={el} key={index} />
  ));
};
