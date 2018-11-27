import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // console.log("printing props from TimelineEvent", props);

  return (
    <section className="timeline-event">
      <p className="event-person">{props.person}</p>
      <p className="event-status">{props.status}</p>
      <Timestamp time={props.timeStamp} />
    </section>
  )
};

export default TimelineEvent;


//TimelineEvent - This component will take an individual
// timeline event data and render it. Each TimelineEvent
// will contain a person who posted the event, a status
//  message and a timestamp. You will need to use the
//  Timestamp component inside this component.
