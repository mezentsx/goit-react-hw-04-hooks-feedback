import React, { Component } from "react";
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification'
import Container from '../Container/Container'

export default class Feedback extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    totalFeedback = 0;
    positiveFeedbackPercentage = 0;

    
    countTotalFeedback() {
        return this.totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage() {
      return this.positiveFeedbackPercentage = Math.round((this.state.good / this.totalFeedback) * 100);
    }

    handleIncrement = (e) => {
        this.setState((prevState) => ({ [e]: prevState[e] + 1}));
      };



    render() {

        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();

        return (
            <Container>
                <Section title="Please leave feedback">
                    <FeedbackOptions 
                        options={['good', 'neutral', 'bad']} 
                        onLeaveFeedback={this.handleIncrement} />
                </Section>

                
                <Section title="Statistics">
                {this.totalFeedback > 0 ? (
                    <Statistics 
                        good={this.state.good} 
                        neutral={this.state.neutral} 
                        bad={this.state.bad} 
                        total={this.totalFeedback} 
                        positivePercentage={this.positiveFeedbackPercentage} 
                        />) : (
                    <Notification message="There is no feedback" />
                    )}
                </Section>   
            </Container>
        )
    }
}
