import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: 'red',
      fontSize: 12,
      txtUsername: '',
      txtPassword:'',
      txtDesc: ''
    };

    this.onSetColor = this.onSetColor.bind(this);
    this.onchangeSize = this.onchangeSize.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onSetColor(params) {
    this.setState({
      colors: params
    });
    
  }

  onchangeSize(value) {
    // 8 <= size <= 36
    this.setState({
      fontSize : (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize
    });
  }

  onSettingDefault(value) {
    if(value) {
      this.setState({
        colors:'red',
        fontSize: 12
      });
    }
  }

  onHandleChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] : value
    })
  }

  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username);
  }

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker colors={this.state.colors} onReceiveColor={ this.onSetColor}/>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting 
            fontSize={ this.state.fontSize }
            onchangeSize={this.onchangeSize}
            />
            <Reset onSettingDefault={this.onSettingDefault}/>
          </div>
          <Result color={this.state.colors} fontSize={this.state.fontSize}/>

          <div className="col-md-8 mt-50">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <div className="panel-title">
                  <h3 className="panel-title">Form</h3>
                </div>
                <div className="panel-body">
                  <form onSubmit={ this.onHandleSubmit }>
                    <div className="form-group">
                      <label>Username</label>

                      <input 
                        type="text" 
                        className="form-control" 
                        name="txtUsername" 
                        onHandleChange={ this.onHandleChange}
                       />

                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input 
                        type="Password" 
                        className="form-control"
                         name="txtPassword" 
                         onHandleChange={ this.onHandleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Mo ta</label>
                      <textarea 
                        className="form-control"
                        rows= "4"
                        name="txtDesc" 
                        onHandleChange={ this.onHandleChange}
                      ></textarea>

                      <section className="form-control">
                        <option value={0}>Nu</option>
                        <option value={1}>Nam</option>
                      </section>
                    </div>
                    <button type="submit" className="btn btn-primary">Luu lai</button>
                    <button type="reset" className="btn btn-primary">Delete</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
