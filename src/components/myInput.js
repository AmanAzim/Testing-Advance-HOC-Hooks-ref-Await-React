import React,{useRef, useEffect} from 'react';

const MyInput = (props) => {

    const inputElemRef=useRef(null);//we create a variable to store reference with a initial value of null.

    useEffect(()=>{
        //inputElemRef.current.focus();
    },[]);

    return (
        <div>
           <input {...props} onChange={props.onChangeHandler} ref={inputElemRef}/>
        </div>
    );
};

export default MyInput;