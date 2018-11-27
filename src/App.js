import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent'; //did i need to import?
import Timeline from './components/Timeline';

// The App component will read in the data from the
// JSON file and pass the timeline events to the
//  Timeline component which it will contain.

// const tleData = [
//   {
//     person: "Adele Goldberg",
//     status: "In Smalltalk, everything happens somewhere else.",
//     timeStamp: "2018-05-18T22:12:03Z"
//   },
//   {
//     person: "Erica Baker",
//     status: "Every once in a while, authentic, genuine happiness. It's up to you to see it. Pay attention.",
//     timeStamp: "2018-05-18T22:19:40Z"
//   }
// ]

class App extends Component {
  render() {
    // console.log("printing timelineData", timelineData.events);

    const events = timelineData.events

    // const testTimeLineEventData = events.map((post, index) => {  //convert each student object into a JSX component
    //   return <TimelineEvent person={post.person}
    //   status={post.status}
    //   timeStamp={post.timeStamp}
    //   key={index}
    //   />
    // });

    // Customize the code below
    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Ada Social Media App</h1>
      </header>
      <main className="App-main">
      <Timeline events={events}/>
      </main>
      </div>
    );
  }
}

export default App;
