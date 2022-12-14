import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Layouts from './Components/Main/Layouts';
import NotFound from './Components/NotFound';
import Quizzes from './Components/Quizzes/Quizzes';
import Statistic from './Components/ReCharts/Statistic';

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
        },
        {
          path: '/home',
          loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'topic/:topicId',
          loader: async({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
          element: <Quizzes></Quizzes>
        },
        {
          path: '/statistic',
          loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistic></Statistic>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App bg-dark">
      <RouterProvider
      router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
