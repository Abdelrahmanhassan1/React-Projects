import React from "react";
import MeetupDetails from "../components/meetups/MeetupDetails";

export default function MeetupWithId(props) {
  return (
    <>
      <MeetupDetails
        imageSrc={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  // console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/800px-Fronalpstock_big.jpg",
        id: meetupId,
        title: "First Meetup ",
        address: "Some Street 5, Some City",
        description: "This is the first meetup description!",
      },
    },
  };
}
