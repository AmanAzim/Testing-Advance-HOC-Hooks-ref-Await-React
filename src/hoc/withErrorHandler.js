import React,{Component} from 'react';

const WithErrorHandler = (WrappedComponent) => {
    return class extends Component{

         state={
            hasError: false,
            errorMessage:'',
         };

         static getDerivedStateFromError(error) {
            return {
                hasError: true,
                errorMessage: error.message
            };
         }

        //Soon going to be deprecated from React
         componentDidCatch(error, errorInfo) {
            // console.log('errorinfo:',errorInfo);
            // this.setState({errorMessage: error.message});
         }

         render() {
            if(this.state.hasError){
                return <p style={{color:'red'}}>{this.state.errorMessage}</p>
            }
            return <WrappedComponent {...this.props}/>
         }
    }
};

export default WithErrorHandler;