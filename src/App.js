import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import TableComponent from './components/TableComponent.js';
import Charts from './components/Charts.js';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <nav>
        <Button variant="outlined" size="medium" color="primary">
          <Link to="/table">Table</Link>
        </Button>
        <Button variant="outlined" size="medium" color="primary">
          <Link to="/charts">Charts</Link>
        </Button>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Users</h1>
          <TableComponent />
        </Route>
        <Route path="/charts">
          <h1>Revenue</h1>
          <Charts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
