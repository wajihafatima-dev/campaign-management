"use client";

import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";
import theme from "@/theme";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
    </ThemeProvider>
  );
}