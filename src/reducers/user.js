import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: true, 
};
export const userReducer = createReducer(initialState, {  // in reducer      pass 2 para meter one is initial State  2nd one is reducer cases 
  GET_USER_REQUEST: (state) => {
    state.loading = true;
  },
  GET_USER_SUCCESS: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  GET_USER_FAILURE: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  CLEAR_ERRORS: (state) => {
    state.error = null;
  },
});

export const loginReducer = createReducer(
  {},
  {
    LOGIN_REQUEST: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    LOGIN_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;  // IF ONLY LOGIN THEN IT WILL BE TRUE
      state.message = action.payload;
    },
    LOGIN_FAILURE: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    LOAD_USER_REQUEST: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    LOAD_USER_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload; //! get method so state.user    payload: data.user,
    },
    LOAD_USER_FAILURE: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    LOGOUT_REQUEST: (state) => {
      state.loading = true;
    },
    LOGOUT_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;       // !  USER NULL
      state.message = action.payload;
    },
    LOGOUT_FAILURE: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },
// ! AFTER SUCCESSFUL LOGIN OR LOG OUT THEN ALWAYS STAY AN ERR MASSAGE IN IN SUCCESS FULL STATE SO DELATE THIS ERR MASSAGE AND ERR USR THIS 2 STATE CLEAR_ERRORS CLEAR_MESSAGE
    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
    CLEAR_MESSAGE: (state) => {
      state.message = null;
    },
  }
);

export const updateReducer = createReducer(
  {},
  {
    UPDATE_USER_REQUEST: (state) => {
      state.loading = true;
    },
    UPDATE_USER_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    UPDATE_USER_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    ADD_TIMELINE_REQUEST: (state) => {
      state.loading = true;
    },
    ADD_TIMELINE_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    ADD_TIMELINE_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    DELETE_TIMELINE_REQUEST: (state) => {
      state.loading = true;
    },
    DELETE_TIMELINE_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    DELETE_TIMELINE_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    ADD_YOUTUBE_REQUEST: (state) => {
      state.loading = true;
    },
    ADD_YOUTUBE_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    ADD_YOUTUBE_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    DELETE_YOUTUBE_REQUEST: (state) => {
      state.loading = true;
    },
    DELETE_YOUTUBE_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    DELETE_YOUTUBE_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    ADD_PROJECT_REQUEST: (state) => {
      state.loading = true;
    },
    ADD_PROJECT_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    ADD_PROJECT_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    DELETE_PROJECT_REQUEST: (state) => {
      state.loading = true;
    },
    DELETE_PROJECT_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    DELETE_PROJECT_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    CONTACT_US_REQUEST: (state) => {
      state.loading = true;
    },
    CONTACT_US_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    CONTACT_US_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
    CLEAR_MESSAGE: (state) => {
      state.message = null;
    },
  }
);
