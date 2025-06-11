import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Index } from "./components/index/Index.jsx";
import { Chat } from "./components/chat/Chat.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>
  },
  {
    path: "/chat",
    element: <Chat/>
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

