import React, { Component } from 'react';
import TypewriterComponent from 'typewriter-effect';

export default class MyMusic extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="my_music">
         <div className="row">
            <div className="my_music container"> 
                <div className="five column">
                    <h2>  
                        <TypewriterComponent
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 75,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                .typeString(`Music I Enjoy`)
                                .callFunction(() => {
                                    console.log("String typed out!");
                                })
                                .pauseFor(10000000000)
                                .deleteAll()
                                .start();
                            }}
                            /> 
                        </h2>
                    <p > I enjoy listening to a wide variety of music! My current favourites are English oldies, especially songs from Frank Sinatra. :D I also really enjoy listening to Japanese retro music from the 1970s.</p>
                </div>
                <div className="seven column spotify-containers"> 
                    <div className="six column container-one">  
                        <iframe style={{borderRadius:"12px", margin: "0", padding: "0"}} src="https://open.spotify.com/embed/playlist/7pypFNE6K9Ocd3EYqVVBDM?utm_source=generator" height="400px" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                    {/* <div className="six column container-two"> 
                        <iframe style={{borderRadius:"12px", marginLeft: "25%", padding: "0"}} src="https://open.spotify.com/embed/playlist/7MtspAwIajxdyCsUsVDYo0?utm_source=generator" height="400px" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div> */}
                </div>
            </div>
        </div>
      </section>
    );
  }
}