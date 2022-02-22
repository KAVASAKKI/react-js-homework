import PropsTypes from 'prop-types';
import s from './TransactionsHistory.module.css';

export default function TransactionsHistory({ items }) {
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

TransactionsHistory.PropsTypes = {
  items: PropsTypes.arrayOf({
    id: PropsTypes.string.isRequired,
    type: PropsTypes.string.isRequired,
    amount: PropsTypes.string.isRequired,
    currency: PropsTypes.string.isRequired,
  }),
};
