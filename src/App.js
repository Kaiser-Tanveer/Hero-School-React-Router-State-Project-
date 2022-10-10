import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Layouts from './Components/Main/Layouts';
import NotFound from './Components/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <NotFound></NotFound>
    },
    {
      path: '/',
      element: <Layouts></Layouts>,
      children: [
        {
          path: '/',
          loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider
      router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
