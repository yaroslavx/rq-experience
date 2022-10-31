import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { HomePage } from './components/Home.page';
import { RandomMansPage } from './components/RandomMans.page';
import { RQRandomMansPage } from './components/RQRandomMans.page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/random-mans'>Traditional Random Mans</Link>
              </li>
              <li>
                <Link to='/rq-random-mans'>RQ Random Mans</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/random-mans' element={<RandomMansPage />} />

            <Route path='/rq-random-mans' element={<RQRandomMansPage />} />

            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
