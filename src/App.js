import React, {Component} from 'react';

import InfoViewer from './components/infoViewer'
import UpdateTestClass from './components/UpdateTestClass'
import UpdateTestFunct from './components/UpdateTestFunct'
import UpdateTestFunct2 from './components/UpdateTestFunction2'
import UpdateTestPureComp from './components/UpdateTestPureComp'
import CompReturnArray from './components/CompReturnArray'
import SimpleHoc from './hoc/simpleHoc'
import TestWrapperHoc from './components/testWrapperHOC'

import Hero from './components/errorHandelingTest/Hero'
import ErrorBoundaryWrapper from './hoc/ErrorBoundaryWrapper'
import Hero2 from './components/errorHandelingTest/Hero2'

import AwaitAndPromise from './components/awaitÂndPromise/awaitAndPromise'

import MapAndSet from './components/MapAndSet/MapAndSet'

class App extends Component {

  constructor(){
      super();
      this.appBodyRef=React.createRef();
      this.bottomRef=React.createRef();
  }

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
  };

  goToBottom=()=>{
      this.bottomRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
      });
  };

 //we must use "componentDidUpdate" with it
    getSnapshotBeforeUpdate(prevProps, prevState) {
      //return  this.appBodyRef.current.scrollHeight-this.appBodyRef.current.scrollTop;
        const x=window.screenX;
        const y=window.screenY;
        return window.scrollY;//
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('snapshot',snapshot);
       // snapshot.focus()
       // this.appBodyRef.current.scrollTop=this.appBodyRef.current.scrollHeight-snapshot
       // window.scrollTo(0, 0);
        window.scrollTo(0, snapshot)
    }


  render() {
    //const container = document.querySelector('#container')// Will not work as this container is mounted in the virtual DOM.//We can select any element from the index.html with i
     console.log(window)

    return (
        <SimpleHoc>
            <button onClick={()=>setTimeout(()=>this.forceUpdate(),2000)}>Force Update</button>
            <button onClick={this.goToBottom}>Go to Bottom</button>
            <hr/>
            <div ref={this.appBodyRef} id="container">
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
                    <Hero heroName={'Joke'}/>
                </ErrorBoundaryWrapper>
                <hr/>

                <Hero2 heroName={'Catma'}/>
                <Hero2 heroName={'Spiderman'}/>
                <hr/>

                <AwaitAndPromise myref={this.bottomCompRef}/>
                <hr/>
                <MapAndSet />
                <hr/>
                <p ref={this.bottomRef}>I am Bottom</p>
            </div>
        </SimpleHoc>
    );
  }
}

export default App;
