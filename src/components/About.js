import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
               <h2 className='responsive-headline'>About Me</h2>
               <p style={{color: "#ffe5d9", fontSize: 20}}>
                
                     {
                        resumeData.aboutme
                     }
                
               </p>
            </div>
         </div>
      </section>
    );
  }
}