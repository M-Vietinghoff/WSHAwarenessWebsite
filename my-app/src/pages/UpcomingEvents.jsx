import { useRef } from "react";
export default function UpcomingEvents() {

  const Event1 = useRef(null);
  const Event2 = useRef(null);
  const Event3 = useRef(null);

  const scrollSection = (elementRef) => (
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  )
    return (
      <div>
        <div className="EventSearch">
          <h2 className="text-2xl font-bold">Events page coming soon...</h2>
          <input type="text" placeholder="Search.." />
          <h3 className="text-2xl font-bold">Search Filter placeholder</h3>
        </div>

        <div className="EventsContainer" style={{ height: "200px", overflowY: "auto"}}>
         <ol onClick={() => scrollSection(Event1)} ref={Event1} className="Event1">
            <li className="Name1">Event Name</li>
            <li className="Address1">Address: 6050 University Avenue, Halifax, NS B3H</li>
            <li className="Date1">Date: 5:00PM on June 29th</li>
          </ol>
         <ol onClick={() => scrollSection(Event2)} ref={Event2} className="Event2">
            <li className="Name2">Event Name2</li>
            <li className="Address1">Address: 6050 University Avenue, Halifax, NS B3H</li>
            <li className="Date1">Date: 8:00PM on June 29th</li>
          </ol>
         <ol onClick={() => scrollSection(Event3)} ref={Event3} className="Event3">
            <li className="Name3">Event Name3</li>
           <li className="Address1">Address: 6050 University Avenue, Halifax, NS B3H</li>
           <li className="Date1">Date: 10:00PM on June 29th</li>
          </ol>
        </div>
     </div>
    );
  }