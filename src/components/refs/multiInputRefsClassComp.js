import React, {Component} from 'react';

class MultiInputRefsClassComp extends Component {
    state={
        color1:'',
        color2:'',
        color3:'',
        submitVal:''
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

    onKeyUpHandler=(event, refName)=>{
       // console.log('keyCode:'+event.keyCode);//Gives the code of the pressed key// "Ënter" key have the code "13"
        if(event.keyCode===13){
          switch (refName) {
              case 'color1input':
                  this.color2input.focus();
                  break;
              case 'color2input':
                  this.color3input.focus();
                  break;
              case 'color3input':
                  this.submitBtnRef.click();
          }
        }
    };

    submitHandler=()=>{
        this.setState({submitVal:'Submitted'})
    };

    componentDidMount() {
        this.color1input.focus();//so that at the beginning the first input field will be focused
    }

    render() {
        return (
            <div>
                <input type="text" name="input1"
                       value={this.state.color1}
                       onChange={(e)=>this.onChangeHaldler(e)}
                       ref={(ref)=>{this.color1input=ref}}
                       onKeyUp={(e)=>this.onKeyUpHandler(e, 'color1input')}
                /><br/>
                <input type="text" name="input2"
                       value={this.state.color2}
                       onChange={(e)=>this.onChangeHaldler(e)}
                       ref={(ref)=>{this.color2input=ref}}
                       onKeyUp={(e)=>this.onKeyUpHandler(e, 'color2input')}
                /><br/>
                <input type="text" name="input3"
                       value={this.state.color3}
                       onChange={(e)=>this.onChangeHaldler(e)}
                       ref={(ref)=>{this.color3input=ref}}
                       onKeyUp={(e)=>this.onKeyUpHandler(e, 'color3input')}
                /><br/>
                <button type="submit"
                        onClick={this.submitHandler}
                        ref={(ref=>this.submitBtnRef=ref)}>Submit</button>

                <p>Color1:{this.state.color1} || Color2:{this.state.color2} || Color3:{this.state.color3}</p>

                <p>{this.state.submitVal}</p>
            </div>
        );
    }
}

export default MultiInputRefsClassComp;