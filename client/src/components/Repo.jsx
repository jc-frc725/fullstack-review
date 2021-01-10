import React from 'react';

class Repo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{margin: "2px"}}>
        <a href={this.props.url}>
          {this.props.name}
        </a>
      </div>
    )
  }
}

export default Repo;