import React, { Component } from 'react'

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: ''
    };
  }

  renderMoreStuff = () => {
    this.setState({stuff: `As shown in the following diagram, the “click” event in virtual page 1 caused XHR 1 
    and XHR 2 to be sent as well as the transition to virtual page 2. The cause of XHR 1 and XHR 2 would not be 
    the same as virtual page 1. So before the transition to virtual page 2 is finished, XHR 1 and XHR 2 can be 
    matched neither to virtual page 1 or to virtual page 2. Instead, they are pushed into the parent virtual page 
    waiting queue. Once the transition to virtual page 2  is finished, AnySpaMonitor can get its cause, which is 
    the “click” in this case, and go to the parent virtual page waiting queue to find the matching XHR events 
    and correlate them to virtual page 2.`})
  }

  render() {
    return (
      <div>
        <h2>About</h2>
        <button type="button" onClick={this.renderMoreStuff} className="btn btn-info">Add stuff</button>
        <div className="card">
          <div className="card-body">
            <p className="card-text">{this.state.stuff}</p>
          </div>
        </div>
      </div>
    )
  }
}
