import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/8/8c/StuttgartCentreWinter.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

const AllMeetupsPage = () => {
  const [isLoading, setisLoading] = useState(true);
  const [loadedmMeetups, setloadedmMeetups] = useState([]);
  useEffect(() => {
    setisLoading(true);
    fetch("https://meetup-3bc06-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const meetups = [];
        for (const key in data) {
          const meetup = { id: key, ...data[key] };
          meetups.push(meetup);
        }
        setisLoading(false);
        setloadedmMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading Data....</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetups Page</h1>
      <ul>
        <MeetupList meetups={loadedmMeetups} />
      </ul>
    </div>
  );
};

export default AllMeetupsPage;
