import { TOption } from 'types/types';
import styles from './FeedbackOptions.module.css';

interface Props {
  options: TOption[];
  onLeaveFeedback: (option: TOption) => void;
}

const FeedbackOptions = ({ options, onLeaveFeedback }: Props) => (
  <div className={styles.container}>
    {options.map(option => (
      <button
        key={option}
        className={styles.estimate}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
