import { useRef } from "react";
import {useState} from "react";

export default function UpcomingEvents() {

  //initialize
  const Event1 = useRef(null);
  const Event2 = useRef(null);
  const Event3 = useRef(null);
  const Event4 = useRef(null);
  const Event5 = useRef(null);
  const [selectedEventKeyword, setSelectedEventKeyword] = useState("");
  const [selectedKeyword, setSelectedKeyword] = useState("");
  
  const eventKeywords = {
  Event1: { EventType: "Workshop", Goal: "Education" },
  Event2: { EventType: "Gathering/Group Support", Goal: "Community Engagement" },
  Event3: { EventType: "Lecture/Keynote", Goal: "Education" },
  Event4: { EventType: "Workshop", Goal: "Provide Support" },
  Event5: { EventType: "Lecture/Keynote", Goal: "Community Engagement" }
  };

  //Determine visibility
  const isEventVisible = (eventKey) => {
  const event = eventKeywords[eventKey];
  const matchesType = !selectedKeyword || event.EventType === selectedKeyword;
  const matchesGoal = !selectedEventKeyword || event.Goal === selectedEventKeyword;
  return matchesType && matchesGoal;
  };
  const visibleEventKeys = ["Event1", "Event2", "Event3", "Event4", "Event5"].filter(isEventVisible);
 

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
        <h1 className="EventsTitle">Upcoming Events</h1>
      <div className="EventSearch">

        <div className="searchRow">
          <input type="text" placeholder="Search Location" className="searchInput" />

          {/* Search by keyword by event type and */} 
          <select className="keywordDropdown border p-2 rounded" value={selectedKeyword} onChange={(e) => setSelectedKeyword(e.target.value)} >
            <option value="">Select Event Type</option>
            <option value="Workshop">Workshop</option>
            <option value="Lecture/Keynote">Lecture/Keynote</option>
            <option value="Gathering/Group Support">Gathering/Group Support</option>
          </select>
          {/*keyword search 2...*/} 
          <select
            className="keywordDropdown border p-2 rounded" value={selectedEventKeyword} onChange={(e) => setSelectedEventKeyword(e.target.value)}>
            <option value="">Select Event Goal</option>
            <option value="Education">Education</option>
            <option value="Provide Support">Provide Support</option>
            <option value="Community Engagement">Community Engagement</option>
          </select>

        </div>
      </div>
    
          {visibleEventKeys.length === 0 ? (
          <p className="text-gray-500 italic">No events match your filters.</p>
          ) : (
           <div className="EventsContainer"> 
          <div className="allEvents">
          <ul onClick={() => scrollSection(Event1)} ref={Event1} className="Event1" style={{ display: isEventVisible("Event1") ? "block" : "none" }}>
            <li className="Name">Workshop: Rebuilding after Trauma</li>
            <li className="Address1">Address: 6050 University Avenue, Halifax, NS B3H</li>
            <li className="Date1">Date: 5:00PM on June 29th</li>
            <li className="line">________________________________________________________________________________________</li>
          </ul>
          <ul onClick={() => scrollSection(Event2)} ref={Event2} className="Event2" style={{ display: isEventVisible("Event2") ? "block" : "none" }}>
            <li className="Name">Trauma Charity Fundraiser</li>
            <li className="Address1">Address: 6050 University Avenue, Halifax, NS B3H</li>
            <li className="Date1">Date: 8:00PM on June 29th</li>
            <li className="line">________________________________________________________________________________________</li>
          </ul>
          <ul onClick={() => scrollSection(Event3)} ref={Event3} className="Event3" style={{ display: isEventVisible("Event3") ? "block" : "none" }}>
            <li className="Name">Trauma 101: How to Tell Family Members </li>
            <li className="Address1">Address: 6050 University Avenue, Halifax, NS B3H</li>
            <li className="Date1">Date: 10:00PM on June 29th</li>
            <li className="line">________________________________________________________________________________________</li>
            
          </ul>
          <ul onClick={() => scrollSection(Event4)} ref={Event4} className="Event4" style={{ display: isEventVisible("Event4") ? "block" : "none" }}>
            <li className="Name">Workshop: How to Support a friend through Workplace Harrasement</li>
            <li className="Address1">Address: 6050 University Avenue, Halifax, NS B3H</li>
            <li className="Date1">Date: 11:00PM on June 29th</li>
            <li className="line">________________________________________________________________________________________</li>
    
          </ul>
          <ul onClick={() => scrollSection(Event5)} ref={Event5} className="Event5" style={{ display: isEventVisible("Event5") ? "block" : "none" }}>
            <li className="Name">How communities protect Perpetrators in the Workplace</li>
            <li className="Address1">Address: 6050 University Avenue, Halifax, NS B3H</li>
            <li className="Date1">Date: 12:00PM on June 29th</li>
            <li className="line">________________________________________________________________________________________</li>
           </ul>
        </div>
        </div>
      )}
     </div>
    );
  }