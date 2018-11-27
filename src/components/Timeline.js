import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


const Timeline = (props) => {
    const timelinedata = props.events.map((post, index) => {  //convert each student object into a JSX component
      return <TimelineEvent
      person={post.person}
      status={post.status}
      timeStamp={post.timeStamp}
      key={index}
      />
    });
  return (
    <section className="timeline"> 
    {timelinedata}
    </section>
  )
};

export default Timeline;


// This component will take a list of timeline
// events as a prop and render a list of TimelineEvent
// components.
