import React from 'react';
import './Preview.css';

class Preview extends React.Component{
    render(){
        return(
            <div id='preview'>
                <div>Hi, {this.props.data.name}. This is a header of the preview

                </div>
                <div id='paperContainer'>
                    <div id='paper'>
                    </div>
                </div>
            </div>
        )
    }
}
export default Preview;