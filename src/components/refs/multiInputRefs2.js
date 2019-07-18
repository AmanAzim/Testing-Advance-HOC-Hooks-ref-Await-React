import React, {Component} from 'react';

import ChildInputRef from './childInputRef'


class MultiInputRefs2 extends Component {

    constructor(props){
        super(props);
        //Modern approach of creating reference to an Element
        this.inputElemRef1=React.createRef();//this will allow us to create reference to any element where "this.inputElemRef" is placed
        this.inputElemRef2=React.createRef();
        this.submitBtnRef=React.createRef();

        this.state={
            color1:'',
            color2:'',
            submitVal:''
        }
    }

    onChangeHaldler=(event)=>{
        const name=event.target.name;
        if(name==='input1'){
            this.setState({color1:event.target.value})
        }
        if(name==='input2'){
            this.setState({color2:event.target.value})
        }
        if(name==='input3'){
            this.setState({color3:event.target.value})
        }
    };

    onKeyUpHandler=(event, refNum)=>{
        console.log('keyCode:'+event.keyCode);//Gives the code of the pressed key// "Ënter" key have the code "13"
        if(event.keyCode===13){
           switch (refNum) {
               case 0:
                   this.inputElemRef2.current.focus();
                   break;
               case 1:
                   this.submitBtnRef.current.click();
                   break;

           }
        }
    };

    submitHandler=()=>{
        this.setState({submitVal:'Submitted'})
    };

    componentDidMount() {
       this.inputElemRef1.current.focus();
    }



    render() {
        return (
            <div>
                <input type="text" name="input1"
                       value={this.state.color1}
                       onChange={this.onChangeHaldler}
                       ref={this.inputElemRef1}
                       onKeyUp={(e)=>this.onKeyUpHandler(e, 0)}
                /><br/>
                <ChildInputRef value={this.state.color2}
                               onChange={this.onChangeHaldler}
                               //childRef={(ref)=>{this.inputElemRef2=ref}}
                               childRef={this.inputElemRef2}
                               onKeyUp={(e)=>this.onKeyUpHandler(e, 1)}
                /><br/>
                <button type="submit"
                        onClick={this.submitHandler}
                        ref={this.submitBtnRef}
                >Submit</button>

                <p>Color1:{this.state.color1} || Color2:{this.state.color2}</p>

                <p>{this.state.submitVal}</p>
            </div>
        );
    }
}

export default MultiInputRefs2;