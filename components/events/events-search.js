import Button from '../ui/button';
import classes from './event-search/classes';
import EventSearch from '../../components/events/events-search';

function EventSearch(props) {
  return (
    <from className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>

      <div className={classes.control}>
        <label htmlFor="month">Month</label>
        <select id="month">
          <option value="1">Junary</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">Augest</option>
          <option value="9">Septemer</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>

      <Button>Find Events</Button>
    </from>
  );
}

export default EventSearch;
