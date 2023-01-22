import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./logpage.css";
import TestPlant from './components/test';
import React from "react";
import ReactDOM from 'react-dom/client';

// class DeleteTest extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {show: true};
//     }
//     delHeader = () => {
//       this.setState({show: false});
//     }
//     render() {
//       let myheader;
//       if (this.state.show) {
//         myheader = <TestPlant />;
//       };
//       return (
//         <div>
//         {myheader}
//         <button type="button" onClick={this.delHeader}>Delete Header</button>
//         </div>
//       );
//     }
//   }


class DeleteTest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true};
    }
    delHeader = () => {
      this.setState({show: false});
    }
    render() {
      let myheader;
      let but;
      if (this.state.show) {
        myheader = <TestPlant />;
        but = <button type="button" onClick={this.delHeader} class="logbuttons">Delete Plant</button>;
      };
      return (
        <div>
        {myheader}
        {but}
        </div>
      );
    }
  }

  class AddTest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: false};
    }
    addHeader = () => {
      this.setState({show: true});
    }
    render() {
      let myheader;
      if (this.state.show) {
        myheader = <DeleteTest />;
      };
      return (
        <div>
        {myheader}
        <button type="button" onClick={this.addHeader} class="logbuttons">Add Plant</button>
        </div>
      );
    }
  }


export default function LogPage() {
    return (
        <div className='container1 log'>
            <div class="cards">
                <h1 class="title">Plant Log</h1>
                <div class="plantlist">
                    <AddTest />
                    <DeleteTest />
                    </div>
                </div>
              </div>
      
      );
}