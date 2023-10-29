import React, { Component } from "react";

// const Persons = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>hello</h1>
//       <h1>
//         name : {props.name} age: {props.age} id: {props.id}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

class Persons extends Component {
  render() {
    return (
      <div>
        <h1>
          name : {this.props.name} age: {this.props.age} id: {this.props.id}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Persons;
