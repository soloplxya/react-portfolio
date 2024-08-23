import React, { Component } from 'react';
import { send } from 'emailjs-com';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    const onSubmit = (e) => {
      e.preventDefault()
      const { name, email, message } = e.target.elements
      let conFom = {
        to_name: "Shaine",
        from_name: name.value,
        email: email.value,
        message: message.value,
      }

      send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        conFom,
        process.env.REACT_APP_PUBLIC_KEY,
      ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    }


    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p style={{color: "#FFF", fontSize: "20px"}}>
              Feel free to contact me for any work or suggestions below!
              </p>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input className="form-control" type="text" id="name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input className="form-control" type="email" id="email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea className="form-control" id="message" required />
                </div>
                <button className="button submit" type="submit" > Submit </button>
              </form>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
              </div>
            </aside>
          </div>
        </section>
        );
  }
}