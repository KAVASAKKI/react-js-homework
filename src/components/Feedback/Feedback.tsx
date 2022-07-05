import { Component } from 'react';
import { TOption } from 'types/types';
import { Container, Section, FeedbackOptions, Statistics } from 'components';

interface Props {
  initialValue: number;
}

interface State {
  estimates: {
    good: number;
    neutral: number;
    bad: number;
  };
}

class Feedback extends Component<Props, State> {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    estimates: {
      good: this.props.initialValue,
      neutral: this.props.initialValue,
      bad: this.props.initialValue,
    },
  };

  estimateHandler = (type: TOption) => {
    this.setState(prevState => ({
      estimates: {
        ...prevState.estimates,
        [type]: prevState.estimates[type] + 1,
      },
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.estimates;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state.estimates;
    const total = this.countTotalFeedback();

    return Math.floor((100 * good) / total);
  };

  render() {
    const { good, neutral, bad } = this.state.estimates;
    const options = Object.keys({ good, neutral, bad }) as TOption[];
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const color: string = 'rgba(0, 0, 0, 0.8)';

    return (
      <Container>
        <Section color={color} title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.estimateHandler}
          />
        </Section>

        <Section color={color} title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </Container>
    );
  }
}

export default Feedback;
