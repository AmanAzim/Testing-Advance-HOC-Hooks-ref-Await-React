import React from 'react';

const WithHoc = (Component, styleName) => {
    return (props)=>{
        return (
            <div style={styleName}>
                <Component />
            </div>
        );
    }
};

export default WithHoc;