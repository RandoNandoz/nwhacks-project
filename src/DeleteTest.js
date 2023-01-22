import React from "react";
import ReactDOM from 'react-dom/client';
import TestPlant from "./components/test";

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
      if (this.state.show) {
        myheader = <TestPlant />;
      };
      return (
        <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
        </div>
      );
    }
  }
  
  export default DeleteTest;

  ReactDOM.render(<DeleteTest />, document.getElementById('root'));