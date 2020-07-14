import {Typography} from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';

const styles = {
  padding: '20px 50px',
};

function Index() {
  React.useEffect(() => {
    document.title = `DAaaS - Indexs Page`;
  }, []);

  return (
    <div style={styles}>
      <Typography variant="h5" gutterBottom>
        Index
      </Typography>
      <Typography variant="h6" gutterBottom>
        Active
      </Typography>
      <ul>
        <li>
          <Link to="/">Splash</Link>
        </li>
        <li>
          <Link to="/results">Search results</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/sign-in">Login</Link>
        </li>
        <li>
          <Link to="/sign-in/create-account">Create account</Link>
        </li>
        <li>
          <Link to="/sign-in/verify-identity">Forgot password</Link>
        </li>
      </ul>
      <br />
      <Typography variant="h6" gutterBottom>
        Archived
      </Typography>
      <ul>
        <li>
          <Link to="/archived/splash">Splash</Link>
        </li>
        <li>
          <Link to="/archived/home">Landing</Link>
        </li>
        <li>
          <strong>Result details</strong>
        </li>
        <ul>
          <li>
            <Link to="/archived/results/content">Content</Link>
          </li>
          <li>
            <Link to="/archived/results/table-conf">Confidential table</Link>
          </li>
          <li>
            <Link to="/archived/results/table-pub">Public table</Link>
          </li>
          <li>
            <Link to="/archived/results/vis">Visualization</Link>
          </li>
          <li>
            <Link to="/archived/results/doc">Document</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Index;