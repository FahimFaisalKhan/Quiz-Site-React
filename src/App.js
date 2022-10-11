import logo from "./logo.svg";
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Statistics from "./Layout/Pages/Statistics/Statistics";
import Topics from "./Layout/Pages/Topics/Topics";
import Blog from "./Layout/Pages/Blog/Blog";
import Questions from "./Layout/Pages/Questions/Questions";

// You can do this:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route
        path="/"
        element={<Topics />}
        loader={async () =>
          fetch("https://openapi.programming-hero.com/api/quiz")
        }
      />
      <Route path="/statistics" element={<Statistics></Statistics>} />
      <Route path="/blog" element={<Blog></Blog>} />
      <Route
        path="/:id"
        element={<Questions></Questions>}
        loader={async ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        }
      ></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
