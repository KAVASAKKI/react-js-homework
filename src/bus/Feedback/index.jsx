import { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Section, FeedbackOptions, Statistics } from './components';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number,
  };

  state = {
    estimates: {
      good: this.props.initialValue,
      neutral: this.props.initialValue,
      bad: this.props.initialValue,
    },
  };

  estimateHandler = type => {
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
    const options = Object.keys({ good, neutral, bad });
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const color = 'rgba(0, 0, 0, 0.8)';

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
