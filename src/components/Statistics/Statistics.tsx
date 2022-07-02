import { IStatistic } from 'types/types';
import s from './Statistics.module.css';

interface IProps {
  items: IStatistic[];
}

export default function Statistics({ items }: IProps) {
  function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

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
