// [1] reactClassComponent
// import React, { Component } from 'react';

// export default class Counter extends Component {
//   constructor() {
//     super();
//     this.add = this.add.bind(this);
//   }

//   // componentDidMount() {}
//   // componentDidUpdate() {}
//   // componentWillUnmount() {}

//   state = {
//     num: 0,
//   };

//   add() {
//     this.setState({ num: this.state.num + 1 });
//   }

//   // u need to use arrow function not deceleration function because this value
//   minus = () => this.setState({ num: this.state.num - 1 });

//   render() {
//     const { num } = this.state;

//     return (
//       <>
//         {/* {console.log(this)} */}
//         <h1>Hello {this.props.name}</h1>
//         <h2>the counter is {num}</h2>
//         {/* <button onClick={this.add()}>+</button>  ERROR INFINITE CALL*/}
//         <button onClick={this.add}>+</button>
//         <button onClick={this.minus}>-</button>
//       </>
//     );
//   }
// }

// ================================================================================================
// [2] reactFunctionalComponent
import React, { useState, useEffect } from 'react';

export default function Counter({ name }) {
  const [num, setNum] = useState(0);

  // componentDidMount() {}
  // useEffect(
  //   () => {
  //     componentWillUnmount() {} -- return arrow function in useEffect
  //     return () => {};
  //   },
  //   [
  //     /* empty array to only run first time of creation (mount) */
  //   ],
  // );

  // componentDidUpdate() {} -- for all states
  // useEffect(() => {});

  // componentDidUpdate() {} -- for specified states
  useEffect(() => {}, [num]);

  return (
    <>
      <h1>Hello {name}</h1>
      <h1>the counter is {num}</h1>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </>
  );
}
