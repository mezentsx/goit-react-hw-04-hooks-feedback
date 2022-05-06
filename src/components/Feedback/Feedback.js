import { useState  } from "react";
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification'
import Container from '../Container/Container'

export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    

    let totalFeedback = 0;
    let positiveFeedbackPercentage = 0;

    
    totalFeedback = good + neutral + bad;
    positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);
    

    const handleIncrement = (e) => {
        // this.setState((prevState) => ({ [e]: prevState[e] + 1}));
        switch (e) {
            case "good":
              setGood((c) => c + 1);
              break;
      
            case "neutral":
              setNeutral((c) => c + 1);
              break;
      
            case "bad":
              setBad((c) => c + 1);
              break;
      
            default:
              return;
          }
    };

    return (
        <Container>
            <Section title="Please leave feedback">
                <FeedbackOptions 
                    options={['good', 'neutral', 'bad']} 
                    onLeaveFeedback={handleIncrement} />
            </Section>

                
            <Section title="Statistics">
            {totalFeedback > 0 ? (
                <Statistics 
                    good={good} 
                    neutral={neutral} 
                    bad={bad} 
                    total={totalFeedback} 
                    positivePercentage={positiveFeedbackPercentage} 
                    />) : (
                <Notification message="There is no feedback" />
                )}
            </Section>   
        </Container>
    )
    
}
