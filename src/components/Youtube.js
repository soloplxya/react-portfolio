import React, { Component } from 'react';
import TypewriterComponent from 'typewriter-effect';

export default class Youtube extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="youtube">
         <div className="row">
            <div className="youtube container">
                <iframe width="600" height="315" src="https://www.youtube.com/embed/4n1EQkbakGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div>
                    <h2>  
                        <TypewriterComponent
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 75,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                .typeString(`My Creative Outlets`)
                                .callFunction(() => {
                                    console.log("String typed out!");
                                })
                                .pauseFor(10000000000)
                                .deleteAll()
                                .start();
                            }}
                            /> 
                        </h2>
                    <p> Video editting has been a very recent interest of mine. I've kinda been stalling on another video production so hopefully I'll get that done once I settle all my exchange stuff! </p>
                </div>
            </div>
         </div>
      </section>
    );
  }
}