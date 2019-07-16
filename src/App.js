import React, {Component} from 'react';

import InfoViewer from './components/infoViewer'
import UpdateTestClass from './components/UpdateTestClass'
import UpdateTestFunct from './components/UpdateTestFunct'
import UpdateTestFunct2 from './components/UpdateTestFunction2'
import UpdateTestPureComp from './components/UpdateTestPureComp'
import CompReturnArray from './components/CompReturnArray'
import SimpleHoc from './hoc/simpleHoc'
import TestWrapperHoc from './components/testWrapperHOC'
import Hero from './components/Hero'
import ErrorBoundaryWrapper from './hoc/ErrorBoundaryWrapper'

class App extends Component {

  state={
    name:'Aman',
    age:31
  }

  onChangeHandler=(event)=>{
    if(event.target.name==='username'){
       this.setState({name:event.target.value})
    }
    if(event.target.name==='age'){
       this.setState({age:event.target.value})
    }
  }

  render() {
    return (
        <SimpleHoc>
            <InfoViewer {...this.state} onChangeHandler={this.onChangeHandler}/>
            <UpdateTestClass age={this.state.age}/>
            <UpdateTestFunct {...this.state}/>
            <UpdateTestFunct2 {...this.state} />
            <UpdateTestPureComp age={this.state.age}/>
            <br/>
            <CompReturnArray />
            <TestWrapperHoc {...this.state}/>

            <hr/>

            <ErrorBoundaryWrapper>
                <Hero heroName={'Batman'}/>
            </ErrorBoundaryWrapper>

            <ErrorBoundaryWrapper>
                <Hero heroName={'Superman'}/>
            </ErrorBoundaryWrapper>

            <ErrorBoundaryWrapper>
                <Hero heroName={'Joker'}/>
            </ErrorBoundaryWrapper>

        </SimpleHoc>
    );
  }
}

export default App;
