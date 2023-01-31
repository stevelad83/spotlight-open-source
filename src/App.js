import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import TableComponent from './components/TableComponent.js';
import Charts from './components/Charts.js';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <nav>
        <Button variant="contained" size="large">
          <Link to="/table">Table</Link>
        </Button>
        <Button variant="contained">
          <Link to="/charts">Charts</Link>
        </Button>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Library</h1>
          <TableComponent />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <Charts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
