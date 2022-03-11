import Head from 'next/head';
import { getEventById, getAllEvents } from '../../helpers/api-utils';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return <div className="center">Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>All events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you evlove"
        />
      </Head>

      <EventSummary title={event.title} />

      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />

      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: true,
  };
}

export default EventDetailPage;
