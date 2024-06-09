import React from "react";
import "./Information.css";
import {useState} from 'react'
import laptop from "../Vidios/5-transcode (1).mp4";
import phone from "../Vidios/6-transcode (1).mp4";
import qoravoy from "../Vidios/1-transcode.mp4";
import man_img from '../images/aaada.png'


function Information() {
  const [prices, setPrices] = useState({
    basic: "$199.99",
    professional: "$249.99",
    master: "$399.99",
  });

  const handleToggle = () => {
    setPrices((prevPrices) => ({
      basic: prevPrices.basic === "$199.99" ? "$19.99" : "$199.99",
      professional: prevPrices.professional === "$249.99" ? "$24.99" : "$249.99",
      master: prevPrices.master === "$399.99" ? "$39.99" : "$399.99",
    }));
  };
  return (
    <div className="Information">

      <div className="new_man">
        <div className="customers">
          <h1 className="customer-title">
            How we work features for <br />
            customers
          </h1>
          <p className="customer-text">
            Whether you need help launching a single product in a <br />
            specific country or are looking for a global
          </p>
          <section>
            <img
              width={48}
              height={48}
              src="https://img.icons8.com/color/48/light.png"
              alt="light"
            />

            <article>
              <h3>Discover new ideas</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing <br />
                and typesetting industry. Lorem Ipsum
              </p>
            </article>
          </section>
          <section>
            <img
              width={60}
              height={60}
              src="https://img.icons8.com/papercut/60/positive-dynamic.png"
              alt="positive-dynamic"
            />

            <article>
              <h3>Planning &amp; analysis</h3>
              <p>
                Lorem Ipsum has been the industry's standard <br />
                dummy text ever since the 1500s
              </p>
            </article>
          </section>
          <section>
            <img
              width={60}
              height={60}
              src="https://img.icons8.com/papercut/60/copy.png"
              alt="copy"
            />

            <article>
              <h3>Book your providers</h3>
              <p>
                It is a long established fact that a reader will be <br />
                distracted by the readable content of a page
              </p>
            </article>
          </section>
        </div>
        <div className="grp02">
          <img className="man_img" src={man_img} alt="" />
        </div>
      </div>
      <div className="purchase">
        <>
          <header>
            <h1>Our Pricing</h1>
            <div className="toggle">
              <label>Annually </label>
              <div className="toggle-btn">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                  onChange={handleToggle}
                />
                <label className="sub" htmlFor="checkbox">
                  <div className="circle" />
                </label>
              </div>
              <label> Monthly</label>
            </div>
          </header>
          <div className="cards">
            <div className="card shadow">
              <ul>
                <li className="pack">Basic</li>
                <li className="price bottom-bar">
                  {prices.basic}
                </li>
                <li className="bottom-bar">500 GB Storage</li>
                <li className="bottom-bar">2 Users Allowed</li>
                <li className="bottom-bar">Send up to 3 GB</li>
                <li>
                  <button className="btn">Learn More</button>
                </li>
              </ul>
            </div>
            <div className="card active">
              <ul>
                <li className="pack">Professional</li>
                <li className="price bottom-bar">
                  {prices.professional}
                </li>
                <li className="bottom-bar">1 TB Storage</li>
                <li className="bottom-bar">5 Users Allowed</li>
                <li className="bottom-bar">Send up to 10 GB</li>
                <li>
                  <button className="btn active-btn">Learn More</button>
                </li>
              </ul>
            </div>
            <div className="card shadow">
              <ul>
                <li className="pack">Master</li>
                <li className="price bottom-bar">
                  {prices.master}
                </li>
                <li className="bottom-bar">2 TB Storage</li>
                <li className="bottom-bar">10 Users Allowed</li>
                <li className="bottom-bar">Send up to 20 GB</li>
                <li>
                  <button className="btn">Learn More</button>
                </li>
              </ul>
            </div>
          </div>
        </>

      </div>

      <div className="laptop_page">
        <div className="vidio">
          <video autoPlay loop muted className="vidio_mp4" src={laptop}></video>
        </div>
        <div className="vidio_info">
          <div className="first_tech">
            <img
              className="student_logo"
              src="https://img.icons8.com/3d-fluency/94/student-male--v3.png"
              alt=""
            />
            <h2 className="text_v1">LEARN VITAL LIFE LESSONS</h2>
          </div>
          <ul>
            <li> World-class custom built learning application</li>
            <li> Scale from Zero to $10k/month as fast as possible</li>
            <li> Master the skills you need to maximize your income</li>
          </ul>
        </div>
      </div>
      {/* Laptop page end */}
      <div className="phone_page">
        <div className="phone_vidio">
          <video autoPlay muted loop className="p_vidio" src={phone}></video>
        </div>
        <div className="phone_info">
          <div className="divv">
            <img
              className="boy_logo"
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-boys-vacation-planning-guys-trip-flaticons-flat-flat-icons-2.png"
              alt=""
            />
            <h1>JOIN A PRIVATE NETWORK</h1>
          </div>
          <ul>
            <li> Celebrate your wins with people who understand</li>
            <li> Make like-minded friends on your journey</li>
            <li> Network with 200,000+ people</li>
          </ul>
        </div>
      </div>
      {/* Phone page end */}
      <div className="qoravoy">
        <div className="qora_vidio">
          <video className="q_vidio" autoPlay muted loop src={qoravoy}></video>
        </div>
        <div className="qora_info">
          <div className="divvv">
            <img
              className="q_logo"
              src="https://img.icons8.com/external-others-phat-plus/64/external-rich-consumer-behaviour-color-line-others-phat-plus.png"
              alt=""
            />
            <h1>ACCESS TO MULTIMILLIONAIRES</h1>
          </div>
          <ul>
            <li> Mentors are hyper-successful experts in their field</li>
            <li> Get mentored every step of your journey</li>
            <li> 1-on-1 advice from industry experts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Information;
