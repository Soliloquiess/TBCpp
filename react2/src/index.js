import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Car from './Ex01';

// const myElement = React.createElement('h1', {}, 'I do not use JSX!');
// const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

class Car2 extends React.Component {
  constructor(props){
    super();
    this.name=props.name;
  }
  render() {
    return <h2>{this.name}!</h2>;
  }
}

function Car3(props) {
  return (
    <>
    <Car2 name={props.name}/>
    <h2>Car3!</h2>
    </>
  );
}
class Car4 extends React.Component{

  constructor(props){
    super(props);
    this.msg2='클릭안됨';
    this.state = {msg:Number(props.num)};
  }
  componentDidMount(){
    console.log('componentDidMount()');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate()');
  }
  render(){
    return (
      <div>
        <button onClick={()=>{this.setState({msg:this.state.msg+1});console.log(this.state.msg);}}>클릭</button>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Car4 num="100"/>
</>
);
// ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// //import {Car} from './ex01'; //{Car} 로 export로 한게 아니라 주석처리
// import Car from './ex01';


// // const myelement = 
// // <table>  <tr>
// //     <th>Name</th>
// //   </tr>
// //   <tr>
// //   <th>Name</th>
// // </tr>
// // < tr >
// //     <th>Name</th>
// //   </tr>
// //   </table>

// // const myelement = (
// // <table>  <tr>
// //     <th>Name</th>
// //   </tr>
// //   <tr>
// //   <th>Name</th>
// // </tr>
// // < tr >
// //     <th>Name</th>
// //   </tr>
// //   </table>
// // )
// // //이런식으로 줘버리면 바로 에러남.


// //const myElement  = React.createElement('h1',{},'I dont use jsx');
// //const myElement = <h1> React is {5+5} times better with jsx</h1>



// // class Car2 extends React.Component{
// //   render(){
// //     return <h2>내가 만든 모듈</h2>
// //   }
// // }


// class Car2 extends React.Component{
//   constructor(props){
//     super();
//     this.name = props.name;
//   }
//   render(){
//     return <h2>{this.name}!</h2>
//   }
// }

// // function Car3(props){
// //   return (
// //     <>
// //     <Car2 name = {props.name}/>
// //     <h2>Car3!</h2>
// //     </>
// //   );
// // }

// class Car3 extends React.Component{
//   constructor(){
//     super();

//   }
//   render(){
//     return (
//       <div>
//         <button onClick={()=>{alert('클릭 되었음');}}>클릭</button>
//       </div>
//     )
//   }
// }


// class Car4 extends React.Component{
//   constructor(){
//     super();
//    // this.state={msg:"클릭 안됨"};
//   }

//   render(){
//     return (
//       <div>
//         <button onClick={()=>{this.state.msg='클릭됨';}}>클릭</button>

//    {/* <button onClick={()=>{this.setState({msg:"클릭됨"});}}>클릭</button> */}
//         {/*<p>{this.state.msg}</p>*/}
//         <p>{this.msg2}</p>
//       </div>
//     )
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(


// <>
// <Car2></Car2>
// </>
// );
// // root.render(
// //   <>

// //     <h1>제목</h1>
// //     <p>내용</p>
// //   </>
// //   );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
