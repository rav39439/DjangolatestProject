import {
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  UPDATE_TASK_SUCCESS,
  SET_USER_SUCCESS,
  GET_USER_SUCCESS,
  GET_TASK_SUCCESS,
} from "./Actioins";

const initialState = {
  tasks: [

  ],
};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload], // ✅ Append new task to existing tasks
      };

    case GET_TASK_SUCCESS:
      return{...state,tasks:[...action.payload]}

    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map(
          (task) => (task._id === action.payload._id ? action.payload : task) // ✅ Update existing task
        ),
      };

    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task._id !== action.payload // ✅ Update existing task
        ),
      };

    default:
      return state;
  }
};

// New Users Reducer
const initialStateuser = null; // State starts as null

const UsersReducer = (state = initialStateuser, action) => {
  switch (action.type) {
    case SET_USER_SUCCESS:
      return {
        ...state, // Ensure existing state is preserved
        user: action.payload, // Store user object
      };

    case "AUTH":
      localStorage.setItem("Profile", JSON.stringify({ ...action?.data }));
      return { ...state, data: action?.data };

    case GET_USER_SUCCESS:
      return state; // Return the current state when retrieving user

    default:
      return state; // Ensure default state is returned
  }
};

export { TaskReducer, UsersReducer };
