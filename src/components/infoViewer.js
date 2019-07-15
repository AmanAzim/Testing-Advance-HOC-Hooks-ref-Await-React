import React from 'react';
import MyInput from './myInput'

const InfoViewer = (props) => {

    const {name, age, onChangeHandler}=props;

    return (
        <div>
            name:{name} <br/>
            age:{age}<br/>

            <MyInput type="text" name="username" value={name} onChangeHandler={onChangeHandler}/>
            <MyInput type="number" name="age" value={age} onChangeHandler={onChangeHandler}/>
        </div>
    );
};

export default InfoViewer;