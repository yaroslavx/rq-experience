import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { HomePage } from './components/Home.page';
import { RandomMansPage } from './components/RandomMans.page';
import { RQRandomMansPage } from './components/RQRandomMans.page';
import RQRandomManPage from './components/RQRandomMan.page';
import { ParallelQueriesPage } from './components/ParallelQueriesPage';
import { DynamicParallel } from './components/DynamicParallel.page';
import DependentQueryPage from './components/DependentQuery.page';

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
              <li>
                <Link to='/rq-parallel'>Parallel</Link>
              </li>
              <li>
                <Link to='/rq-dynamic-parallel'>Dynamic Parallel</Link>
              </li>
              <li>
                <Link to='/rq-dependent'>rq-dependent</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path='/rq-dependent'
              element={<DependentQueryPage email='email@mail.com' />}
            />
            <Route path='/rq-parallel' element={<ParallelQueriesPage />} />
            <Route
              path='/rq-dynamic-parallel'
              element={<DynamicParallel rmIds={[1, 2, 3]} />}
            />
            <Route path='/rq-random-mans/:rmId' element={<RQRandomManPage />} />
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
