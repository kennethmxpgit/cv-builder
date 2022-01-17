import React from 'react'
import './Edit.css';
class Edit extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            phone:'',
        }
        this.onChangeUpdate=this.onChangeUpdate.bind(this);
    }
    onChangeUpdate(){
        console.log('is changing');
        this.setState({
            name:document.querySelector('#name').value,
            email:document.querySelector('#email').value,
            phone:document.querySelector('#phone').value,
        })
    }

    render(){
        return(
            <div>
                <form>
                    <div class='bigLabel'>General Information</div>

                    <div class='label'>Name</div>
                    <input type='text' id='name' onChange={this.onChangeUpdate}></input>

                    <div class='label'>Email</div>
                    <input type='text' id='email' onChange={this.onChangeUpdate}></input>

                    <div class='label'>Phone</div>
                    <input type='text' id='phone' onChange={this.onChangeUpdate}></input>

                    <div class='bigLabel'>Education</div>

                    <div class='bigLabel'>Work Experience</div>

                    <div class='label'>
                        Test Output <br></br>
                        name : {this.state.name}<br></br>
                        email : {this.state.email}<br></br>
                        phone : {this.state.phone}<br></br>
                        
                        </div>



                </form>
            </div>
        )
    }
}
export default Edit;