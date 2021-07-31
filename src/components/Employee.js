import React from 'react';
import Hello from './Hello';
import JavaData from './JavaData';
import MyTable from './MyTable';

// parent component of JavaData 
class Employee extends React.Component {

    constructor() {
        super();
        this.state = {
            parentName: 'Sonu',
            childName: ''
        }
    }

    childCallBack = (chilldInfo) => {
        this.setState({ childName: chilldInfo });
    }


    render() {
        return (<div>
            <h1 className="display-1 text-primary">Employee Component</h1>
            {/* <JavaData dataFromParent={this.state.parentName} ></JavaData> */}
            <JavaData getCall={this.childCallBack} ></JavaData>
            {/* <Hello /> */}
            {/* <MyTable/> */}
            <p> {this.childName} </p>
        </div>
        );
    }
}
export default Employee;

// class Employee extends React.Component {



//     constructor() {
//         super();
//         this.emps = EmployeeService.getHello;
//         this.state = { name: 'Monu', salary: 10.5 };
//     }

//     increaseSalary = () => {
//         this.setState({ salary: this.state.salary + 10 });
//     };
//     setMyName = (evt) => {
//         this.setState({ name: evt.target.value });
//     }
//     render() {
//         return (<div>
//             <h1 className="display-1 text-primary">Employee Component</h1>

//             <h1 > Hi! I am {this.state.name} and my salary is {this.state.salary}.</h1>
//             <button type="button"
//                 onClick={this.increaseSalary} >Increase</button>
//             <form>
//                 <h1 >Data Form</h1>
//                 <p>Name:</p>
//                 <input type="text"
//                     onChange={evt => this.setMyName(evt)}></input>
//             </form>
//             <p>Hello - {this.emps} </p>
//         </div>
//         );
//     }
// }
// export default Employee;

