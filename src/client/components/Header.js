import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '4em',
          width: '100%',
          padding: '0.4em',
          backgroundColor: '#152935'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%'
          }}
        >
          <h2
            style={{
              fontFamily: 'Quicksand',
              color: '#ffffff',
              marginLeft: '1em'
            }}
          >
            IBM Cloud Architecture
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginRight: '2em'
            }}
          >
            <h3
              style={{
                fontFamily: 'Quicksand',
                color: '#ffffff',
                marginLeft: '2em',
                cursor: 'pointer'
              }}
            >
              <Link to="/">Home</Link>
            </h3>
            <h3
              style={{
                fontFamily: 'Quicksand',
                color: '#ffffff',
                marginLeft: '2em',
                cursor: 'pointer'
              }}
            >
              <Link to="/catalog">Catalog</Link>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
