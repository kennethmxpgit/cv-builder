import React from 'react';
import './Preview.css';



class Preview extends React.Component{
    d=this.props.data


    render(){
        function dateHandler(input){
            const dateFormat={year: 'numeric', month: 'long'};
            let startDate=new Date(input.start);
            startDate=startDate.toLocaleDateString('en-US',dateFormat);
            let endDate=new Date(input.end);
            endDate=endDate.toLocaleDateString('en-US',dateFormat);
            return startDate+' - '+endDate;
        }
        let eduLoad='';
        let workLoad='';
        const dateFormat={weekday: 'long', year: 'numeric', month: 'long'};
        if(this.props.data.education){
            eduLoad=<div>
            {this.props.data.education.map((el)=>
            <div>
                <h3>
                    {el.compName}
                </h3>
                <div>
                    {el.title}
                </div>
                <div>
                    {dateHandler(el)}
                </div>
            </div>
            )}
        </div>
        } else{eduLoad=<div></div>}

        if(this.props.data.work){
            workLoad=
            <div>
                    {this.props.data.work.map((el)=>
                    <div>
                        <h3>
                            {el.compName}
                        </h3>
                        <div>
                            {el.title}
                        </div>
                        <div class='t1 desc'>{el.jobdesc}</div>
                        <div>
                            {dateHandler(el)}
                        </div>
                    </div>
                    )}
                </div>
        }else{workLoad=<div></div>}

        let theme1=
        <div class="t1 tContainer">
            <div class='t1 tSidebar'>
                <h1>{this.props.data.name}</h1>
                <h2>Contact</h2>
                <div>{this.props.data.email}</div>
                <h2>Phone</h2>
                <div>{this.props.data.phone}</div>
            </div>
            <div class='t1 tContent'>
                <h2>Education</h2>
                {eduLoad}                

                <h2>Work Experience</h2>
                {workLoad}
            </div>
        </div>


        return(
            <div id='preview'>
                <div>

                </div>
                <div id='paperContainer'>
                    <div id='paper'>
                        {theme1}
                    </div>
                </div>
            </div>
        )
    }
}
export default Preview;