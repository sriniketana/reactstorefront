import React from 'react';
import axios from 'axios';

const microServiceURL =
  'http://web-bluecompute.apps.mfstorefront.os.fyre.ibm.com';

export class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catalog: []
    };
  }

  componentDidMount() {
    axios
      .get('/storecatalog')
      .then(res => {
        this.setState({
          catalog: res.data
        });
      })
      .catch(err => {
        this.setState({
          catalog: []
        });
      });
  }

  renderCatalog = () => {
    const items = [];
    this.state.catalog.map((item, index) => {
      items.push(
        <div
          style={{
            width: '12em',
            height: '20em',
            boxShadow: '0px 4px 22px 0px #afafaf',
            borderRadius: '8px',
            margin: '1em',
            cursor: 'pointer',
            '&:hover': {
              background: '#efefef'
            }
          }}
          key={index}
        >
          <img
            src={`${microServiceURL}/images/items/${item.img}`}
            style={{
              width: '12em',
              height: '12em',
              borderRadius: '8px 8px 0 0'
            }}
          ></img>
          <h2
            style={{
              fontFamily: 'Quicksand',
              fontSize: '1rem',
              fontWeight: 700,
              padding: '0.4em'
            }}
          >
            {item.name}
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <h4
              style={{
                bottom: 0,
                left: 0,
                marginLeft: '1em'
              }}
            >
              ${item.price}
            </h4>
          </div>
        </div>
      );
    });

    return items;
  };

  render() {
    return (
      <div
        style={{
          padding: '1em',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {this.renderCatalog()}
      </div>
    );
  }
}

export default Catalog;
