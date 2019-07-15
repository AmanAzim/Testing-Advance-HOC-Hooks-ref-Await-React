import React from 'react';

const UpdateTestFunct = (props) => {

     //console.log('UpdateTestFunct rerendered');
     return (
         <div>
             <p>I am *UpdateTestFunct* component age:{props.age}</p>
         </div>
     );
};

//export default UpdateTestFunct;// rerender each time when partent rerenders
export default React.memo(UpdateTestFunct, (prevState, nextState)=>{
    if(prevState.age===nextState.age){
        console.log('UpdateTestFunct did not rerendered');
        return true; //will not rerender
    }else{
        console.log('UpdateTestFunct rerendered');
        return false; //will rerender
    }
});// It will update if a particular props changes