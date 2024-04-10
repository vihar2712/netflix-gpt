import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MovieInfo from "./MovieInfo";
import GPTSearch from "./GPTSearch";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/gpt-search",
      element: <GPTSearch />,
    },
    {
      path:'/movies/:movieId',
      element: <MovieInfo />
    }
  ]);

  return <RouterProvider router={appRouter}/>;
};

export default Body;
