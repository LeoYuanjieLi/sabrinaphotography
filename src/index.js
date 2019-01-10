import React from "react";
import { EnterPage } from './Components/EnterPage';
import ReactDom from "react-dom";
import "./styles.css";

// import Gallery from "react-photo-gallery";
// import PropTypes from 'prop-types'


/* popout the browser and maximize to see more rows! -> */

const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 6,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  }
];

// const Message = props => <div>{props.msg}</div>
// // const Time = new Date().toLocaleTimeString();

// const Tick = () => {
//   const Time = new Date().toLocaleTimeString();
//   const Element = <div>
//     <div style={{paddingLeft: '30px'}} className='box'>It is <input value={Time}/></div>
//     </div>
//   render(Element, document.getElementById("app"))
// }

// Tick();
// setInterval(Tick, 1000);

// only works for development 
// Message.PropTypes = {
//   msg: PropTypes.string
// }



// const Element = (
//   <div className="someClass">
//     <Message msg={123} />
//     It is now {Time}
//     <Message msg="Goodbye JQuery!" />
//   </div>
  
// )

// class App extends React.Component {
//   render() {
//     // return <Gallery photos={photos} />;
//     return Element
//   }
// }
// render(<App />, document.getElementById("app"));



// use event handlers with React

// const state = {eventCount: 0, username: 'Sabi'};

// function App() {
//   return (
//     <div>
//       <p>
//         <button onClick={() => 
//           { setState({eventCount: state.eventCount + 1});
//             console.log(state.eventCount);
//             console.log(state.username);
//           }
//           }>Click Me</button>
//       </p>
//       <p>
//         You typed: {state.username}
//       </p>
//       <p>
//         Current count: {state.eventCount}
//       </p>
//       <p>
//         <input onChange={event => setState({username: event.target.value})}/>

//       </p>
//     </div>
//   )
// }

// function setState(newState) {
//   Object.assign(state, newState);
//   renderApp();
// }

// function renderApp() {
//   render(
//     <App />,
//     document.getElementById('app')
//   )
// }

// renderApp()



// // make a stop watch

// class StopWatch extends React.Component {
//   state = {lapse: 0, running: false};
//   handleRunClick = () => {
//     this.setState(state => {
//       if (state.running) {
//         clearInterval(this.timer);
//       } else {
//         const startTime = Date.now();
//         console.log(`start time: ${startTime}`)
//         this.timer = setInterval(() => {
//           this.setState({lapse: Date.now() - startTime})
//         })
//       };
//       console.log(state);
//       console.log(this.timer)
//       this.setState ({running: !state.running})
//     })
//   };

//   handleClearClick = () => {
//     this.setState ({lapse: 0, running: false});
//   };

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   };

//   render() {
//     const {lapse, running} = this.state;
//     return (
//       <div>
//         <label>
//           {lapse} ms
//         </label>
//         <button onClick={this.handleRunClick}>{running ? 'Stop' : 'Start'}</button>
//         <button onClick={this.handleClearClick}>Clear</button>
//       </div>
//     )
//   }
// }

// function renderApp(){
//   render(
//   <StopWatch />,
//   document.getElementById('app')
//   )
// }

// renderApp()

// // Class Counter

// class Counter extends React.Component {
//   constructor(...args) {
//     super(...args);
//     this.state = {count: 0};
//   }

//     handleClick() {
//         this.setState(({count}) => {
//             return({count: count +1})
//         })
//     }

//   render() {
//     return (
//       <button onClick={this.handleClick.bind(this)}>
//         {this.state.count}
//       </button>
//     )
//   }
// };

// render(
//   <Counter />,
//   document.getElementById('app')
// );


// // Name Form One
// class NameForm extends React.Component {

//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log({somthing: event.target});
//     console.log(event.target[0].value);
//     console.log(event.target.elements.username.value);
//     console.log(`inout node ref: ${this.inputNode.value}`);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="username" ref={node => (this.inputNode = node)}/>
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     )
//   }
// }

// render(
//   <NameForm />,
//   document.getElementById('app')
// );

// // Name Form Two

// class NameForm2 extends React.Component {
//   state = {error: null};
//   handleSubmit = event => {
//     event.preventDefault();
//     const value = event.target.elements.username.value;
//     const error = this.props.getErrorMessage(
//       value,
//     )

//     if (error) {
//       alert(`error: ${error}`);
//     } else {
//       alert(`success: ${value}`);
//     }
//   }

//   handleChange = event => {
//     const {value} = event.target;
//     this.setState({
//       error: this.props.getErrorMessage(value)
//     });
//   }

//   componentDidMount() {
//     this.setState({
//       error: this.props.getErrorMessage(" ")
//     })
//   }

//   render() {
//     const {error} = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//           <label>
//               Name:
//               <input type="text" onChange={this.handleChange} name="username" />
//           </label>
//           {error ? <div style={{color: "red"}}>{error}</div>: null}
//           <button disabled={Boolean(error)} type="submit">Submit</button>
//       </form>
//     )
//   }
// }

// render(
//   <NameForm2
//       getErrorMessage={value => {
//           if (value.length < 3) {
//               return `Value must be at least 3 characters, but is only 2`
//           }
//           if (!value.includes('s')) {
//               return `Value does not include "s" but if should!`
//           }
//           return null
//       }}
//   />,
//   document.getElementById('app'),
// )

class App extends React.Component {
  render() {

    return <EnterPage />
  }
}
ReactDom.render(<App />, document.getElementById("app"));