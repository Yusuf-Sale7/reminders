import { ADD_REMINDER, DELETE_REMINDER, CLEAR_ALL } from "../types"

export const Add_Reminder = (text, date) => {
  const action = {
    type: ADD_REMINDER,
    text,
    date
  }
  return action
};

export const Delete_Reminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  return action
}

export const Clear_All = () => {
  const action = {
    type: CLEAR_ALL
  }
  return action
}
