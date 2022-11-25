import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary'
import './App.scss';
import { Routers } from './routes/Routes'
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import './assets/scss/Config.scss';
import './assets/scss/Typo.scss';
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          {Routers.map((data,key) => {
            let Component = data.component
            return <Route path={data.path} key={key} element={<Component />} />
          })}
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
