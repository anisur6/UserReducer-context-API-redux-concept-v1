import React from "react";
import { RouterProvider } from "react-router-dom";
import UserProvider from "./contex/UserProvider";
import routes from "./routes/routes";


function App() {
  return (
    <div>
      <UserProvider>
      <RouterProvider router={routes} />
      </UserProvider>
    </div>
  );
}

export default App;
