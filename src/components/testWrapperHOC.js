import React from 'react';

import withHOC from '../hoc/withHOC'

const style={
  color:'green'
};

const TestWrapperHoc = (props) => {
    //This props will not reach this component unless we return (props)={} in the wrapper HOC
    return (
        <div>
            <p>I am *TestWrapperHoc* my name:{props.name}</p>
        </div>
    );
};

export default withHOC(TestWrapperHoc, style);