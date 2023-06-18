import MeetupForm from "../components/meetups/NewMeetupForm";
export default function NewMeetupPage() {
  function addMeetupHandler(NewMeetupData) {
    console.log(NewMeetupData);
  }

  return <MeetupForm onAddMeetup={addMeetupHandler} />;
}
