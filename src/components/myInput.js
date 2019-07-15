import React from 'react';

const MyInput = (props) => {
    return (
        <div>
           <input {...props} onChange={props.onChangeHandler}/>
        </div>
    );
};

export default MyInput;