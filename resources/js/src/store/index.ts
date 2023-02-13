import { createSlice, configureStore } from '@reduxjs/toolkit';
import dummyData from '../ProjectScreen/dummyData';

const initialState = {
    loggedInUserId: 0,
    activeProjectId: 0,
    activeTaskId: '',
    dummyData: dummyData,
};

// TODO: Divide into further slices
const userActivitySlice = createSlice({
    name: 'userActivity',
    initialState: initialState,
    reducers: {
        userAuthChange(state, action) {
            state.loggedInUserId = action.payload;
        },
        userProjectActivity(state, action) {
            state.activeTaskId = action.payload;
        },
        userGoalActivity(state, action) {},
        dummyDataUpdate(state,action){
            state.dummyData = action.payload;
        }
    }
});

userActivitySlice.actions.userAuthChange

const store = configureStore({
    reducer: userActivitySlice.reducer,
    devTools: true
});

export const userActivityActions = userActivitySlice.actions;

export default store;