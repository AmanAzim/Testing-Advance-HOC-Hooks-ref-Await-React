import React, {Component} from 'react';
import SimpleHoc from '../../hoc/simpleHoc'
import '../../App.css'
import injectSheet from 'react-jss'

const style={
    gridContainer:{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto'
    }
};

class AwaitAndPromise extends Component {

    state={
        job:'Undone',
        doneBy:'',
        condition:'',
        author:'',

        job2:'Undone',
        doneBy2:'',
        condition2:'',
        author2:'',

        job3:'Undone',
        doneBy3:'',
        condition3:'',
        author3:'',

        ticket:''
    };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    testThen=()=>{
        const doJob=new Promise((resolve, reject)=>{
            setTimeout(()=>{
                //resolve(this.setState({job:'Done'}));
                resolve('Done');
            },3000);
        });
        const jobDoneBy=doJob.then((value)=>{
            this.setState({job:value});

            return new Promise(resolve=>{
                setTimeout(()=>{
                    resolve('Promise');
                },1000);
            });
        });
        const jobCondition=jobDoneBy.then((value)=>{
            this.setState({doneBy:value});
            return new Promise(resolve => {
                setTimeout(()=>{
                    resolve('Messy');
                },1000);
            });
        });
        jobCondition.then((value)=>{
            this.setState({condition:value});
        });
        this.setState({author:'Aman'});//this code will execute immediately without waiting for the promise to resolve and the promise will do its work sometime in future
    };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //"await" can be used only in a "async" function !!!!
    testAwait=async()=>{
        const doJob=new Promise((resolve, reject)=>{
            setTimeout(()=>{
                //resolve(this.setState({job:'Done'}));
                resolve('Done');
            },3000);
        });
        const doJob_ResolveValue= await doJob;//Instead of "then()"
        this.setState({job2:doJob_ResolveValue}); //no need to use "doJob.then()" to do this task because this line of code will execute only after "doJob" resolves as it is in "await"


        const jobDoneBy=new Promise(resolve=>{
            setTimeout(()=>{
                resolve('Await');
            },1000);
        });
        const jobDoneBy_ResolveValue=await jobDoneBy;//Instead of "then()"
        this.setState({doneBy2:jobDoneBy_ResolveValue});


        const jobCondition=new Promise(resolve => {
                setTimeout(()=>{
                    resolve('Clean');
                },1000);
        });
        const jobCondition_ResolveValue=await jobCondition;//Instead of "then()"
        this.setState({condition2:jobCondition_ResolveValue});

        this.setState({author2:'Rumman'});//This code will execute only after finishing all "await" codes
    };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    testAwait2=async()=>{
        const doJob=new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('Done');
            },3000);
        });
        const jobDoneBy=new Promise(resolve=>{
            setTimeout(()=>{
                resolve('Await all([])');
            },1000);
        });
        const jobCondition=new Promise(resolve => {
                setTimeout(()=>{
                    resolve('Clean');
                },1000);
        });

        const [doJob_ResolveValue, jobDoneBy_ResolveValue, jobCondition_ResolveValue]=await Promise.all([doJob, jobDoneBy, jobCondition]);

        //now all the states will be updated on the same time as we wait for all the promises to resolve together
        this.setState({job3:doJob_ResolveValue});
        this.setState({doneBy3:jobDoneBy_ResolveValue});
        this.setState({condition3:jobCondition_ResolveValue});

        this.setState({author3:'Azim'});
    };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    testAwaitWithError=async()=>{
        const myTicket=new Promise((resolve, reject)=>{
            //resolve('Ticket available');
            reject('Sorry No ticket');
        });

        let myTicket_ResolveValue='';
        try {
            myTicket_ResolveValue=await myTicket;
        }catch (e) {
            myTicket_ResolveValue=e;
        }
        this.setState({ticket:myTicket_ResolveValue});
    };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    render() {
        /* this.testPromise();
         We cannot do this it will cause infinite update loop problem
         because this function does "this.setState()" outside of a promise.
         Inside "render()" we cannot "this.setState()" or call a function that dose it
         unless the function is doing "this.setState()" inside a "Promise" */

        return (
            <SimpleHoc className={style.gridContainer}>
                 <div className={style.gridItems}>
                    <button onClick={()=>this.testThen()}>Chick to test Promise with *then()*</button>
                    <p>The job is: {this.state.job}</p>
                    <p>Done by: {this.state.doneBy}</p>
                    <p>Job condition: {this.state.condition}</p>
                 <p>Author: {this.state.author}</p>
                </div>
                <div>
                    <button onClick={()=>this.testAwait()}>Chick to test Promise with Await</button>
                    <p>The job is: {this.state.job2}</p>
                    <p>Done by: {this.state.doneBy2}</p>
                    <p>Job condition: {this.state.condition2}</p>
                    <p>Author: {this.state.author2}</p>
                </div>
                 <div>
                    <button onClick={()=>this.testAwait2()}>Chick to test Promise with Await with all await array</button>
                    <p>The job is: {this.state.job3}</p>
                    <p>Done by: {this.state.doneBy3}</p>
                    <p>Job condition: {this.state.condition3}</p>
                    <p>Author: {this.state.author3}</p>
                </div>
                <div>
                    <button onClick={()=>this.testAwaitWithError()}>Chick to test Promise with Await with error handler</button>
                    <p>The ticket is: {this.state.ticket}</p>
                </div>
            </SimpleHoc>
        );
    }
}

export default injectSheet(style)(AwaitAndPromise);