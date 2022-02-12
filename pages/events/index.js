import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/events-search';

function AllEventsPage() {
  const router = useRouter();

  const events = getAllEvents();
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
    console.log('Hello');
  };

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
