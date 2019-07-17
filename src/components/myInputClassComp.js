import React, {Component} from 'react';

class MyInputClassComp extends Component {
    constructor(props){
        super(props);
        //Modern approach of creating reference to an Element
        this.inputElemRef=React.createRef();//this will allow us to create reference to any element where "this.inputElemRef" is placed
    }
    componentDidMount() {
        //document.querySelector('input').focus()//for normal JavaScript//It will not focus on the "input" of this component but it will focus on the any "input" it will find first on the DOM as it is a normal Js method.
        //document.getElementById('2').focus()//However we can select this specific "input with ID".

        //this.inputElm1.focus();//the "inputElm1" is already created and contain the reference of the "input" as we are accessing it inside componentDidMount() after the component is already been created.
        this.inputElemRef.current.focus()
    }

    render() {
        return (
            <div>
               <input id="2" {...this.props}
                      onChange={this.props.onChangeHandler}
                      ref={this.inputElemRef}
                      //ref={(input2ref)=>{
                          //input2ref.focus(); //to directly focus this "input"
                          //this.inputElm1=input2ref; //we store the reference of this "input" into a class property "inputElm1" by creating it immediately Note: "inputElm1" is a class property not a state property so we cannot access it like "this.state.inputElm1"
                      //}}
               />
            </div>
        );
    }
}

export default MyInputClassComp;