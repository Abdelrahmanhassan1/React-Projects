import React from "react";
import MeetupDetails from "../components/meetups/MeetupDetails";
import { useRouter } from "next/router";

export default function MeetupWithId() {
  // const router = useRouter();
  // console.log(router.query.meetupId);
  return (
    <>
      <MeetupDetails
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/800px-Fronalpstock_big.jpg"
        title="First Meetup "
        address="Some Street 5, Some City"
        description="This is the first meetup"
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
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/800px-Fronalpstock_big.jpg",
        id: meetupId,
        title: "First Meetup ",
        address: "Some Street 5, Some City",
        description: "This is the first meetup",
      },
    },
  };
}
