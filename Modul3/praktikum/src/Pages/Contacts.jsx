import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contacts = () => {
  return (
    <>
      <div class="row">
        
            <div class="col-md-6">
                <h4>Get in touch</h4>
                <div class="row">
                    <div class="col-md-6">
                        <p>
                          <i class="icon icon-phone"></i><strong>SMS/WA/Telegram (Quick Response):</strong><br/>
                          <br/>+62 896-896-01317
                          <br/><a target="_blank" href="http://wa.me/6289689601317"> wa.me/6289689601317 </a>
                          <i class="fa fa-whatsapp" aria-hidden="true"></i>
                        </p>
                        <br/>
                        <img src="https://infotech.umm.ac.id/assets/img/wa.jpg" class="img-responsive animate-if-visible" width="50%" data-animation-options="{&quot;animation&quot;:&quot;scaleIn&quot;, &quot;duration&quot;:&quot;600&quot;}" style={{opacity: 1, transform: 'scale(1, 1)', transition: 'opacity 600ms linear 0s, transform 600ms linear 0s'}}/>
                    </div>
                    <div class="col-md-6">

                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <h4>The Office</h4>
                <ul class="list-unstyled">
                    <li>
                        <i class="icon icon-map-marker"></i><strong>Address:</strong> Jl. Raya Tlogomas No.246,Jawa
                        Timur 65144,
                        Indonesia
                    </li>
                    <li>
                        <i class="icon icon-phone"></i><strong>Phone:</strong> (0341) 464318, ext 252
                    </li>
                    <li>

                    </li>
                    <li>
                        <i class="icon icon-envelope"></i><strong>Email:</strong>
                        <a href="mailto:lab.informatika@umm.ac.id">
                            lab.informatika@umm.ac.id
                        </a>
                    </li>
                </ul>
                <hr class="right"/>
                <h4>Business Hours</h4>
                <ul class="list-unstyled">
                    <li>
                        <i class="icon icon-time"></i> Monday - Friday 8am to 4pm
                    </li>
                    <li>
                        <i class="icon icon-time"></i> Saturday - 8am to 12pm
                    </li>
                    <li>
                        <i class="icon icon-time"></i> Sunday - Closed
                    </li>
                </ul>
                <br/>
                <h4>Form System Issue Tracker</h4>
                <ul class="list-unstyled">
                    <li>
                        <i class="icon icon-envelope"></i><strong>Link:</strong>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScKwC3xuj52vOLnyFc1CwI9QJvZolpcAEtV1GOZ5fH16CS-UQ/viewform">
                            Google Form
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  );
};

export default Contacts;
