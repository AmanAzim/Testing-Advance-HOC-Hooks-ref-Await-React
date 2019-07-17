import React from 'react';

const ChildInputRef = (props) => {
     return (
        <input type="text" name="input2"
               value={props.value}
               onChange={props.onChange}
               ref={props.childRef}
               onKeyUp={props.onKeyUp}
        />
     );
};

export default ChildInputRef;