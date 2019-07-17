import React from 'react';

import MyInput from './myInput'
import MyInputClassComp from './myInputClassComp'
import MultiInputRefsClassComp from './refs/multiInputRefsClassComp'
import MultiInputRefs2 from './refs/multiInputRefs2'

const InfoViewer = (props) => {

    const {name, age, onChangeHandler}=props;

    return (
        <div>
            name:{name} <br/>
            age:{age}<br/>

            <MyInput type="text" name="username" value={name} onChangeHandler={onChangeHandler}/>
            <MyInputClassComp type="number" name="age" value={age} onChangeHandler={onChangeHandler}/>
            <hr/>
            <MultiInputRefsClassComp />
            <hr/>
             <MultiInputRefs2 />
            <hr/>
        </div>
    );
};

export default InfoViewer;