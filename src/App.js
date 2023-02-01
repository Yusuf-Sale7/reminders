import React from "react";
import './style.css';
import { connect } from "react-redux";
import { Add_Reminder, Delete_Reminder, Clear_All } from "./actions";
import moment from "moment";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class App extends React.Component {

  state = {
    text: '',
    date: ''
  }

  // Render All Reminders From Reducer
  Render_Reminders = () => {
    const {reminders} = this.props;
    return (
      reminders.map(
        reminder => {
          return (
            <div className="reminder" key={reminder.id}>
              <h3>
                {reminder.text}
              </h3>
              <p className="time">
                {moment(new Date(reminder.date)).fromNow()}
              </p>

              <button className="delete" onClick={() => this.props.Delete_Reminder(reminder.id)}>
                <i className="icon fa fa-trash"></i>
              </button>
            </div>
          )
        }
      )
    )
  }

  render () {
    return (
      <div className="app">
        <div className="reminderApp">
          <div className="newReminder">
            <img src="assets/imgs/icon.png" alt="Icon Img"/>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (this.state.text.trim().length === 0) {
                alert('Reminder Title Can Not Be Empty!')
              } else if (this.state.date.length === 0) {
                alert('Reminder Date Can Not Be Empty!')
              } else {
                this.props.Add_Reminder(this.state.text, this.state.date);
                this.setState({
                  text: '',
                  date: ''
                })
              }
            }}>
              <input type="text" placeholder="Whats up?" onChange={(e) => this.setState({text: e.target.value})} value={this.state.text}/>
              <DatePicker
                selected={this.state.date}
                value={this.state.date}
                onChange={(date) => this.setState({date})}
                showTimeSelect
                timeFormat="HH:mm"
                timeCaption="Time"
                dateFormat="MMMM d, yyyy h:mm aa"
                placeholderText="Pick a Date"
              />

              <button className="add">Add Reminder</button>
            </form>
          </div>

          <div className="remindersList">

            {this.Render_Reminders()}

            {/* Show Clear All Option */}
            {this.props.reminders.length ?
              <button className="clear" onClick={() => this.props.Clear_All()}>
                Clear All
              </button>
              :
              null
            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      reminders: state
    }
  }
  , {Add_Reminder, Delete_Reminder, Clear_All})(App);
