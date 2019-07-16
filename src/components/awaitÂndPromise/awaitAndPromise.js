import React, {Component} from 'react';
import SimpleHoc from '../../hoc/simpleHoc'

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
    }

    testPromise=()=>{
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

    render() {
        /* this.testPromise();
         We cannot do this it will cause infinite update loop problem
         because this function does "this.setState()" outside of a promise.
         Inside "render()" we cannot "this.setState()" or call a function that dose it
         unless the function is doing "this.setState()" inside a "Promise" */

        return (
            <SimpleHoc>
                 <div>
                    <button onClick={()=>this.testPromise()}>Chick to test Promise with *then()*</button>
                    <p>The job is: {this.state.job }</p>
                    <p>Done by: {this.state.doneBy}</p>
                    <p>Job condition: {this.state.condition}</p>
                 <p>Author: {this.state.author}</p>
                </div>
                <div>
                    <button onClick={()=>this.testAwait()}>Chick to test Promise with Await</button>
                    <p>The job is: {this.state.job2 }</p>
                    <p>Done by: {this.state.doneBy2}</p>
                    <p>Job condition: {this.state.condition2}</p>
                    <p>Author: {this.state.author2}</p>
                </div>
            </SimpleHoc>
        );
    }
}

export default AwaitAndPromise;