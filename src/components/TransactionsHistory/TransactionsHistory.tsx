import { ITransaction } from 'types/types';
import s from './TransactionsHistory.module.css';

interface IProps {
  items: ITransaction[];
}

export default function TransactionsHistory({ items }: IProps) {
  return (
    <table className={s.container}>
      <thead className={s.thead}>
        <tr className={s.headerRow}>
          <th className={s.headerCol}>Type</th>
          <th className={s.headerCol}>Amount</th>
          <th className={s.headerCol}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tbody}>
        {items.map(item => (
          <tr key={item.id} className={s.bodyRow}>
            <td className={s.bodyCol}>{item.type}</td>
            <td className={s.bodyCol}>{item.amount}</td>
            <td className={s.bodyCol}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
