import React, { Component } from 'react';

class ColorPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colors : ['red', 'green', 'blue', '#ccc']
    };
  }

  showColor(colors) {
    console.log(this.props.colors);
    return {
      backgroundColor: colors
    }
  }

  setActiveColor(colors) {
    // console.log(colors)
    this.props.onReceiveColor(colors);
    
  }

  render() {

    var elmColors = this.state.colors.map((colors, index) => {
      return <span 
                  key={ index} 
                  style={ this.showColor(colors)}
                  className={this.props.colors === colors ? 'active' : ''}
                  onClick={ () => this.setActiveColor(colors)}
                  ></span>
    });

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Color Picker</h3>
          </div>
          <div className="panel-body">
            { elmColors }
            <hr/>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
