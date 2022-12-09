import React, { Component } from 'react';
import TypewriterComponent from 'typewriter-effect';
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
               <h2 className='responsive-headline'>
                  <TypewriterComponent
                      options={{
                        autoStart: true,
                        loop: true,
                        delay: 75,
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(`About Me`)
                          .callFunction(() => {
                            console.log("String typed out!");
                          })
                          .pauseFor(10000000000)
                          .deleteAll()
                          .start();
                      }}
                    />
               </h2>
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