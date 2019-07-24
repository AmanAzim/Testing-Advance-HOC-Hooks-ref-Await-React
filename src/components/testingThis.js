import React, {Component} from 'react';

class TestingThis extends Component {
    constructor(){
        super()
        this.room='Class own room';
        this.home={
            room:"Class's proprrty object Home's room"
        }

        let hotel={ //is not access able
            room:"Private variable Hotel's room"
        }

        this.myObeject1={
             room:"Class Objects's property room",
             showRoom:()=>{
                 return `This is ${this.myObeject1.room}`
             }
         }
    }

    simpleMethod=()=>{

    }

    render() {

        let myObeject2={
             room:"normal Objects's property room",
             showRoom:()=>{
                 return `This is ${this.room}`//React changed the behaviour of "this" here that is why here "this" is refering to the whole class// According to normal Javascript behavior here "this" is refereing to the Object "myObeject" it self so the "this.room" will also be the "room" insode this object
             }
        };

        return (
            <div>
                {this.room} || {this.home.room} || {this.myObeject1.showRoom()}||{myObeject2.showRoom()}
            </div>
        );
    }
}

export default TestingThis;