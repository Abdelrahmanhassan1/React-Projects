import Layout from "./components/layout/Layout";
import { MongoClient } from "mongodb";
import MeetupList from "./components/meetups/MeetupList";

function Home(props) {
  return (
    <>
      {props.meetups.length > 0 ? (
        <MeetupList meetups={props.meetups} />
      ) : (
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          No meetups found
        </p>
      )}
    </>
  );
}

export async function getStaticProps(context) {
  // fetch api data
  // this runs on the client side every 10 seconds in revalidate
  // this is perfect in saving cache data before updating after validate
  const client = await MongoClient.connect(
    "mongodb+srv://abdelrahmanhassan081:2RMk1aqe8E3UFKfA@cluster0.pydzo0b.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch api data
//   // this runs on the server side every server request
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default Home;
