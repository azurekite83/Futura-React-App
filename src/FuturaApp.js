import React from 'react';
import './FuturaApp.css';

class FuturaApp extends React.Component {
  render() {
    return (
     <TestHeader />
    );
  }
}

function TestHeader(props) {
  return (
    <nav class="nav">
      <a class="nav-link active" href="https://facebook.com">Active</a>
      <a class="nav-link" href="https://facebook.com">Link</a>
      <a class="nav-link" href="https://facebook.com">Link</a>
      <a class="nav-link disabled" href="https://facebook.com" tabindex="-1" aria-disabled="true">Disabled</a>
    </nav>
  )
}

export default FuturaApp;
