import "./styles.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function FullCalendarComponent() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        dateClick={(e) => handleDateClick(e)}
        events={[
          { title: "event 1", date: "2021-05-07" },
          { title: "event 2", date: "2021-05-17" }
        ]}
        eventContent={renderEventContent}
      />
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
