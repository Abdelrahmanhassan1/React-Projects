import { useRouter } from "next/router";
import MeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(NewMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(NewMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    router.push("/");
  }

  return <MeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
