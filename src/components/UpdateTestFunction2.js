import React from 'react';

const UpdateTestFunct2 = (props) => {

     console.log('UpdateTestFunct-2 rerendered');
     return (
         <div>
             <p>I am *UpdateTestFunct* component age:{props.age}</p>
         </div>
     );
};

//export default UpdateTestFunct;// rerender each time when partent rerenders
export default React.memo(UpdateTestFunct2); //It will update if any props changes