import React from 'react'
import './Edit.css';
class Content extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         name:'',
    //         email:'',
    //         phone:'',
    //         education:'',
    //         work:'',
    //     }
    //     this.onChangeUpdate=this.onChangeUpdate.bind(this);
    //     this.addEdu=this.addEdu.bind(this);
    //     this.addWork=this.addWork.bind(this);
    // }

    // onChangeUpdate(){
    //     //General Info state handler
    //     this.setState({
    //         name:document.querySelector('#name').value,
    //         email:document.querySelector('#email').value,
    //         phone:document.querySelector('#phone').value,
    //     })

    //     //Education Info state handler
    //     const eduArr=[];
    //     this.setState({education:''});
    //     document.querySelectorAll('#eduContainer .groupBox').forEach((el)=>{
    //              eduArr.push({
    //                  compName:el.querySelector('.compTB').value,
    //                  title:el.querySelector('.titleTB').value,
    //                  start:el.querySelector('.dateStart').value,
    //                  end:el.querySelector('.dateEnd').value,
    //                 });
    //              this.setState({
    //                 education:eduArr,
    //              });
    //     });

    //     //Work Info state handler
    //     const workArr=[];
    //     this.setState({work:''});
    //     document.querySelectorAll('#workContainer .groupBox').forEach((el)=>{
    //              workArr.push({
    //                  compName:el.querySelector('.compTB').value,
    //                  title:el.querySelector('.titleTB').value,
    //                  jobdesc:el.querySelector('.jobTB').value,
    //                  start:el.querySelector('.dateStart').value,
    //                  end:el.querySelector('.dateEnd').value,
    //                 });
    //              this.setState({
    //                 work:workArr,
    //              });
    //     });


    //     console.log(workArr);
    // }
    // addEdu(){
    //     const parent=this;
    //     //delete button function
    //     function delBtnFunc(){
    //         const targetBox=this.closest('.groupBox');
    //         targetBox.innerHTML='';
    //         targetBox.remove();
    //         parent.onChangeUpdate();
    //     }

    //     const mainContainer=document.querySelector('#eduContainer');

    //     //small box to group up everything
    //     const groupBox=document.createElement('div');
    //     groupBox.classList.add('groupBox');
    //     mainContainer.appendChild(groupBox);

    //     //School/Company Name
    //     const compLabel=document.createElement('div');
    //     compLabel.innerHTML='School Name';
    //     compLabel.classList.add('label');
    //     groupBox.appendChild(compLabel);
    //     const compTB=document.createElement('input');
    //     compTB.classList.add('compTB');
    //     groupBox.appendChild(compTB);

    //     //Title
    //     const titleLabel=document.createElement('div');
    //     titleLabel.innerHTML='Title of study';
    //     titleLabel.classList.add('label');
    //     groupBox.appendChild(titleLabel);
    //     const titleTB=document.createElement('input');
    //     titleTB.classList.add('titleTB');
    //     groupBox.appendChild(titleTB);

    //     //Date
    //     const dateLabel=document.createElement('div');
    //     dateLabel.innerHTML='Year of study (Start-End)';
    //     dateLabel.classList.add('label');
    //     groupBox.appendChild(dateLabel);
    //     const dateContainer=document.createElement('div');
    //     dateContainer.classList.add('dateContainer')
    //     groupBox.appendChild(dateContainer);
    //     const dateStart=document.createElement('input');
    //     dateStart.classList.add('dateStart');
    //     dateContainer.appendChild(dateStart);
    //     const dateEnd=document.createElement('input');
    //     dateEnd.classList.add('dateEnd');
    //     dateContainer.appendChild(dateEnd);

    //     //delete button
    //     const delBtn=document.createElement('i');
    //     delBtn.classList.add('fas','fa-trash','label','delBtn');
    //     delBtn.addEventListener("click",delBtnFunc);
    //     dateContainer.appendChild(delBtn);

    //     //Event Listener to all textboxes
    //     document.querySelectorAll('input').forEach((el)=>{
    //         el.addEventListener('input',this.onChangeUpdate);
    //     });

    //     groupBox.appendChild(document.createElement('br'));
    // }

    // addWork(){
    //     const parent=this;
    //     //delete button function
    //     function delBtnFunc(){
    //         const targetBox=this.closest('.groupBox');
    //         targetBox.innerHTML='';
    //         targetBox.remove();
    //         parent.onChangeUpdate();
    //     }

    //     const mainContainer=document.querySelector('#workContainer');

    //     //small box to group up everything
    //     const groupBox=document.createElement('div');
    //     groupBox.classList.add('groupBox');
    //     mainContainer.appendChild(groupBox);

    //     //School/Company Name
    //     const compLabel=document.createElement('div');
    //     compLabel.innerHTML='Company Name';
    //     compLabel.classList.add('label');
    //     groupBox.appendChild(compLabel);
    //     const compTB=document.createElement('input');
    //     compTB.classList.add('compTB');
    //     groupBox.appendChild(compTB);

    //     //Title
    //     const titleLabel=document.createElement('div');
    //     titleLabel.innerHTML='Job title';
    //     titleLabel.classList.add('label');
    //     groupBox.appendChild(titleLabel);
    //     const titleTB=document.createElement('input');
    //     titleTB.classList.add('titleTB');
    //     groupBox.appendChild(titleTB);

    //     //Job Description
    //     const jobLabel=document.createElement('div');
    //     jobLabel.innerHTML='Job Description';
    //     jobLabel.classList.add('label');
    //     groupBox.appendChild(jobLabel);
    //     const jobTB=document.createElement('input');
    //     jobTB.classList.add('jobTB');
    //     groupBox.appendChild(jobTB);

    //     //Date
    //     const dateLabel=document.createElement('div');
    //     dateLabel.innerHTML='Year of study (Start-End)';
    //     dateLabel.classList.add('label');
    //     groupBox.appendChild(dateLabel);
    //     const dateContainer=document.createElement('div');
    //     dateContainer.classList.add('dateContainer')
    //     groupBox.appendChild(dateContainer);
    //     const dateStart=document.createElement('input');
    //     dateStart.classList.add('dateStart');
    //     dateContainer.appendChild(dateStart);
    //     const dateEnd=document.createElement('input');
    //     dateEnd.classList.add('dateEnd');
    //     dateContainer.appendChild(dateEnd);

    //     //delete button
    //     const delBtn=document.createElement('i');
    //     delBtn.classList.add('fas','fa-trash','label','delBtn');
    //     delBtn.addEventListener("click",delBtnFunc);
    //     dateContainer.appendChild(delBtn);

    //     //Event Listener to all textboxes
    //     document.querySelectorAll('input').forEach((el)=>{
    //         el.addEventListener('input',this.onChangeUpdate);
    //     });

    //     groupBox.appendChild(document.createElement('br'));
    // }


    render(){
        return(
            <div>
                <div class='bigLabel'>General Information</div>

                <div class='label'>Name</div>
                <input type='text' id='name' onChange={this.props.onChangeUpdate}></input>

                <div class='label'>Email</div>
                <input type='text' id='email' onChange={this.props.onChangeUpdate}></input>

                <div class='label'>Phone</div>
                <input type='text' id='phone' onChange={this.props.onChangeUpdate}></input>

                <div class='bigLabel'>
                    Education
                    <i class="fas fa-plus-circle fa-xs label" onClick={this.props.addEdu}></i>
                </div>
                
                <div id='eduContainer'></div>

                <div class='bigLabel'>
                    Work Experience
                    <i class="fas fa-plus-circle fa-xs label" onClick={this.props.addWork}></i>
                    </div>
                <div id='workContainer'></div>      
            </div>
        )
    }
}
export default Content;