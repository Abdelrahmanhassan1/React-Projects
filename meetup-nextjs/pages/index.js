import Layout from "./components/layout/Layout";
import MeetupList from "./components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/800px-Fronalpstock_big.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/800px-Fronalpstock_big.jpg",
    address: "Some address 10, 12345 Some City",

    description: "This is a second meetup!",
  },
];
function Home(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps(context) {
  // fetch api data
  // this runs on the client side every 10 seconds in revalidate
  // this is perfect in saving cache data before updating after validate
  return {
    props: {
      meetups: DUMMY_MEETUPS,
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
