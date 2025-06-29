import { useRef } from "react";
import {useState} from "react";

export default function UpcomingEvents() {

  //initialize
  const Event1 = useRef(null);
  const Event2 = useRef(null);
  const Event3 = useRef(null);
  const Event4 = useRef(null);
  const Event5 = useRef(null);
  const headerHeight = 80;

  //Scrolling through events functionality
  const scrollSection = (elementRef) => (

  //Above comment continued..
    window.scrollTo({
  top: elementRef.current.offsetTop,
  behavior: "smooth"
})
  )
    return (

      //Wrapper for all blocks for styling
      <div className="upcomingEventsWrapper">
        
      <div className="EventSearch">
        <input type="text" placeholder="Search Location" className="searchInput" />

        <div className="searchRow">
         <h3 className="text-2xl font-bold">Distance Place Holder</h3>
          <h3 className="text-2xl font-bold">Keywords Place Holder</h3>
        </div>
      </div>
    
        <div className="EventsContainer" style={{ height: "400px", overflowY: "auto"}}>
        
          <div className="allEvents">
          <ul onClick={() => scrollSection(Event1)} ref={Event1} className="Event1">
            <li className="Name">Event Name</li>
            <li className="Address1">Address: 6050 University Avenue, Halifax, NS B3H</li>
            <li className="Date1">Date: 5:00PM on June 29th</li>
          </ul>
          <ul onClick={() => scrollSection(Event2)} ref={Event2} className="Event2">
            <li className="Name">Event Name</li>
            <li className="Address1">Address: 6050 University Avenue, Halifax, NS B3H</li>
            <li className="Date1">Date: 8:00PM on June 29th</li>
          </ul>
          <ul onClick={() => scrollSection(Event3)} ref={Event3} className="Event3">
            <li className="Name">Event Name</li>
            <li className="Address1">Address: 6050 University Avenue, Halifax, NS B3H</li>
            <li className="Date1">Date: 10:00PM on June 29th</li>
          </ul>
          <ul onClick={() => scrollSection(Event3)} ref={Event4} className="Event3">
            <li className="Name">Event Name</li>
            <li className="Address1">Address: 6050 University Avenue, Halifax, NS B3H</li>
            <li className="Date1">Date: 11:00PM on June 29th</li>
          </ul>
          <ul onClick={() => scrollSection(Event3)} ref={Event5} className="Event3">
            <li className="Name">Event Name</li>
            <li className="Address1">Address: 6050 University Avenue, Halifax, NS B3H</li>
            <li className="Date1">Date: 12:00PM on June 29th</li>
          </ul>
          </div>
        </div>
     </div>
    );
  }