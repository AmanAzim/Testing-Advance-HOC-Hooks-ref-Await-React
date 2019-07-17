import React from 'react'; //dont need as we are not using any jsx

const SimpleHoc = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};
export default SimpleHoc;