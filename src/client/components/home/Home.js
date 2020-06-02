import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            padding: '2em',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <h1
            style={{
              padding: '2em',
              border: '2px solid #4d70b2',
              borderRadius: '2px',
              fontFamily: 'Quicksand',
              fontWeight: '400',
              color: '#4d70b2',
              textTransform: 'uppercase',
              justifyContent: 'center',
              textAlign: 'center',
              alignSelf: 'center',
              width: 'fit-content'
            }}
          >
            BlueCompute Store
          </h1>
          <h2
            style={{
              justifyContent: 'center',
              textAlign: 'center',
              alignSelf: 'center',
              width: 'fit-content',
              fontFamily: 'Quicksand',
              fontWeight: '400',
              color: '#4d70b2'
            }}
          >
            Check our awesome Collections!
          </h2>
          <h2
            style={{
              justifyContent: 'center',
              textAlign: 'center',
              alignSelf: 'center',
              width: 'fit-content',
              fontFamily: 'Quicksand',
              fontWeight: '700',
              color: '#4d70b2'
            }}
          >
            Built using IBM Digital App Builder
          </h2>
          <h2
            style={{
              justifyContent: 'center',
              textAlign: 'center',
              alignSelf: 'center',
              width: 'fit-content',
              fontFamily: 'Quicksand',
              fontWeight: '400',
              color: '#ffffff',
              backgroundColor: '#4d70b2',
              padding: '0.4em 2em',
              borderRadius: 40,
              cursor: 'pointer'
            }}
          >
            <Link to="/catalog">Browse Item Catalog</Link>
          </h2>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
