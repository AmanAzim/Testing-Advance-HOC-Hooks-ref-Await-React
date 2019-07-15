import React, {Component} from 'react';

class UpdateTestClass extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.age!==this.props.age){
            console.log('UpdateTestClass rerendered');
            return true; //will rerender
        }else {
            console.log('UpdateTestClass did not rerendered');
            return false;
        }
    }

    render() {
        return (
            <div>
                <p>I am *UpdateTestClass* component age:{this.props.age}</p>
            </div>
        );
    }
}

export default UpdateTestClass;