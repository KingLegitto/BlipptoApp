import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import clientReducer from "../features/client";
import { authApi } from "../services/auth";

const clientStore = configureStore({
  reducer: {
    client: clientReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(clientStore.dispatch);

export default clientStore;
