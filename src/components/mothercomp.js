import React, { Component } from 'react'
const UpdatedComponent = (WrappedComponent) =>{
    
    class NewComponent extends Component {
        render() {
            return (
                <div>
                    
                </div>
            )
        }
    }
    
    return NewComponent;
}
export default UpdatedComponent;
