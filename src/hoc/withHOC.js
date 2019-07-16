import React from 'react';

const WithHoc = (Component, styleName) => {
    //Must return props so that the "Component receives all the props passed by its parent"
    return (props)=>{
        return (
            <div style={styleName}>
                <Component {...props}/>
            </div>
        );
    }
};

export default WithHoc;