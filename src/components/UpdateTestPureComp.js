import React, {PureComponent} from 'react';

class UpdateTestPureComp extends PureComponent {
    render() {
        //It by default performs all the props checks that we do inside ComponentShouldUpdate so a PureComponent will only rerender if any of its props changes
        console.log('UpdateTestPureComp rerendered');
        return (
            <div>
                <p>I am *UpdateTestPureComp* component age:{this.props.age}</p>
            </div>
        );
    }
}

export default UpdateTestPureComp;