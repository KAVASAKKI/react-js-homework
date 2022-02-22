import PropsTypes from 'prop-types';
import s from './Statistics.module.css';
import randomColor from 'utils/random-color';

export default function Statistics({ items }) {
  return (
    <section className={s.container}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statsList}>
        {items.map(item => (
          <li
            className={s.statsItem}
            key={item.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={s.label}>{item.label}</span>
            <span className={s.value}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.PropsTypes = {
  items: PropsTypes.arrayOf({
    id: PropsTypes.string.isRequired,
    label: PropsTypes.string.isRequired,
    percentage: PropsTypes.number.isRequired,
  }),
};
