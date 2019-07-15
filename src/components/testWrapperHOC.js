import React from 'react';

import withHOC from '../hoc/withHOC'

const style={
  color:'green'
};

const TestWrapperHoc = () => {
    return (
        <div>
            
        </div>
    );
};

export default withHOC(TestWrapperHoc, style);