import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./reducers/mode";

import userReducer from "./reducers/user";

const store = configureStore({
    reducer: {
        user: userReducer,
        mode: modeReducer
    },
    devTools: true
});

export default store;