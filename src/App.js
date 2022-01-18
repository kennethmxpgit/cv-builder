import logo from './logo.svg';
import './App.css';
import Edit from './Components/Edit';
import Preview from './Components/Preview';
import React from 'react';

class App extends React.Component{

  constructor(){
    super();
    this.state={
        name:'',
        email:'',
        phone:'',
        education:'',
        work:'',
    }
    this.onChangeUpdate=this.onChangeUpdate.bind(this);
    this.addEdu=this.addEdu.bind(this);
    this.addWork=this.addWork.bind(this);
}
delMe(){
  if(window.confirm("Are you sure you want to delete this?")){
    const targetBox=this.closest('.groupBox');
    targetBox.innerHTML='';
    targetBox.remove();
    this.onChangeUpdate();
  }
}

onChangeUpdate(){
    //Education Info Array
    const eduArr=[];
    this.setState({education:''});
    document.querySelectorAll('#eduContainer .groupBox').forEach((el)=>{
             eduArr.push({
                 compName:el.querySelector('.compTB').value,
                 title:el.querySelector('.titleTB').value,
                 start:el.querySelector('.dateStart').value,
                 end:el.querySelector('.dateEnd').value,
                });
    });

    //Work Info Array
    const workArr=[];
    this.setState({work:''});
    document.querySelectorAll('#workContainer .groupBox').forEach((el)=>{
             workArr.push({
                 compName:el.querySelector('.compTB').value,
                 title:el.querySelector('.titleTB').value,
                 jobdesc:el.querySelector('.jobTB').value,
                 start:el.querySelector('.dateStart').value,
                 end:el.querySelector('.dateEnd').value,
                });
    });

    //General Info state handler
    this.setState({
        name:document.querySelector('#name').value,
        email:document.querySelector('#email').value,
        phone:document.querySelector('#phone').value,
        education:eduArr,
        work:workArr,
    })
    
}
addEdu(){
  this.onChangeUpdate();
  const mainContainer=document.querySelector('#eduContainer');
  //small box to group up everything
  const groupBox=document.createElement('div');
  groupBox.classList.add('groupBox');
  mainContainer.appendChild(groupBox);

  //School/Company Name
  const compLabel=document.createElement('div');
  compLabel.innerHTML='School Name';
  compLabel.classList.add('label');
  groupBox.appendChild(compLabel);
  const compTB=document.createElement('input');
  compTB.classList.add('compTB');
  groupBox.appendChild(compTB);

  //Title
  const titleLabel=document.createElement('div');
  titleLabel.innerHTML='Title of study';
  titleLabel.classList.add('label');
  groupBox.appendChild(titleLabel);
  const titleTB=document.createElement('input');
  titleTB.classList.add('titleTB');
  groupBox.appendChild(titleTB);

  //Date
  const dateLabel=document.createElement('div');
  dateLabel.innerHTML='Year of study (Start-End)';
  dateLabel.classList.add('label');
  groupBox.appendChild(dateLabel);
  const dateContainer=document.createElement('div');
  dateContainer.classList.add('dateContainer')
  groupBox.appendChild(dateContainer);
  const dateStart=document.createElement('input');
  dateStart.classList.add('dateStart');
  dateStart.setAttribute('type','month');
  dateContainer.appendChild(dateStart);
  const dateEnd=document.createElement('input');
  dateEnd.classList.add('dateEnd');
  dateEnd.setAttribute('type','month');
  dateContainer.appendChild(dateEnd);

  //delete button
  const delBtn=document.createElement('i');
  delBtn.classList.add('fas','fa-trash','label','delBtn');
  delBtn.addEventListener("click",this.delMe);
  dateContainer.appendChild(delBtn);

  //Event Listener to all textboxes
  document.querySelectorAll('input').forEach((el)=>{
      el.addEventListener('input',this.onChangeUpdate);
  });

  groupBox.appendChild(document.createElement('br'));
}

addWork(){
  this.onChangeUpdate();

  const mainContainer=document.querySelector('#workContainer');

  //small box to group up everything
  const groupBox=document.createElement('div');
  groupBox.classList.add('groupBox');
  mainContainer.appendChild(groupBox);

  //School/Company Name
  const compLabel=document.createElement('div');
  compLabel.innerHTML='Company Name';
  compLabel.classList.add('label');
  groupBox.appendChild(compLabel);
  const compTB=document.createElement('input');
  compTB.classList.add('compTB');
  groupBox.appendChild(compTB);

  //Title
  const titleLabel=document.createElement('div');
  titleLabel.innerHTML='Job title';
  titleLabel.classList.add('label');
  groupBox.appendChild(titleLabel);
  const titleTB=document.createElement('input');
  titleTB.classList.add('titleTB');
  groupBox.appendChild(titleTB);

  //Job Description
  const jobLabel=document.createElement('div');
  jobLabel.innerHTML='Job Description';
  jobLabel.classList.add('label');
  groupBox.appendChild(jobLabel);
  const jobTB=document.createElement('input');
  jobTB.classList.add('jobTB');
  groupBox.appendChild(jobTB);

  //Date
  const dateLabel=document.createElement('div');
  dateLabel.innerHTML='Work Year (Start-End)';
  dateLabel.classList.add('label');
  groupBox.appendChild(dateLabel);
  const dateContainer=document.createElement('div');
  dateContainer.classList.add('dateContainer')
  groupBox.appendChild(dateContainer);
  const dateStart=document.createElement('input');
  dateStart.classList.add('dateStart');
  dateContainer.appendChild(dateStart);
  dateStart.setAttribute('type','month');
  const dateEnd=document.createElement('input');
  dateEnd.classList.add('dateEnd');
  dateEnd.setAttribute('type','month');
  dateContainer.appendChild(dateEnd);

  //delete button
  const delBtn=document.createElement('i');
  delBtn.classList.add('fas','fa-trash','label','delBtn');
  delBtn.addEventListener("click",this.delMe);
  dateContainer.appendChild(delBtn);

  //Event Listener to all textboxes
    document.querySelectorAll('input').forEach((el)=>{
        el.addEventListener('input',this.onChangeUpdate);
    });

  groupBox.appendChild(document.createElement('br'));
}

  render(){
    let fakeData={
      name:'Samantha Dawkins',
      email:'samanthadawkins@gmail.com',
      phone:'312-452-3948',
      education:[
          {
              compName:'Cornell University',
              title:'Master in Software Engineering',
              start:'2016-2',
              end:'2018-1',
          },
          {
              compName:'University of Michigan',
              title:'Bachelor of Software Engineering',
              start:'2012-4',
              end:'2016-3',
          }
      ],
      work:[
          {
              compName:'Meta Platforms, Inc',
              title:'Software Engineer',
              jobdesc:'Analyze and modify existing software as well as design, construct and test end-user applications to meet user needs',
              start:'2021-11',
              end:'2020-12',
          },
          {
              compName:'Google Inc',
              title:'Data Scientist',
              jobdesc:'Analyze, process, and model data then interpret the results to create actionable plans for the company',
              start:'2020-3',
              end:'2018-5',
          }
      ]
    }
    return(
      <div>
      <div id='header'>
        <p>CV Builder</p>
        </div>
      <div id='content'>
        <div id='edit'>
        <Edit
          onChangeUpdate={this.onChangeUpdate.bind(this)}
          addEdu={this.addEdu.bind(this)}
          addWork={this.addWork.bind(this)}
          />
        </div>
        <div id='preview'>
        <Preview data={this.state}/>
          
        </div>
        
      </div>
      <div id='footer'>
        <p>
          <a href='https://github.com/kennethmxpgit/cv-builder'>&copy; Copyright 2021 kennethmxpgit</a>
        </p>
        </div>
    </div>
    )
  }

}
export default App;
