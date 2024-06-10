import React, { Fragment, useEffect, useState } from "react";
import "./main.css";
import vidio_1 from "../Vidios/ddd.mp4";
import Un_shablon from "../images/behruz_u.png";
import students from "../images/univeristy-students.webp";
import laptop from "../Vidios/5-transcode (1).mp4";
import phone from "../Vidios/6-transcode (1).mp4";
import qoravoy from "../Vidios/1-transcode.mp4";
import Slider from "../Slider/Slider";
import Hamkors from "../Hamkor/hamkor";

function Main() {
  const [json, setJson] = useState([]);
  const [link, setLink] = useState("http://localhost:3000/texts");

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const req = await fetch(link);
        const data = await req.json();
        setJson(data);
      } catch (error) {
        console.error(`Siz Olmoqchi bo'lgan ma'lumotda Xatolik bor`, error);
      }
    };
    dataFetch();
  }, [link]);

  // const [MainYozuv, setMainYozuv] = useState([]);
  // const [link_yozuv, setLink_yozuv] = useState("http://localhost:3000/Main_Yozuv");

  // useEffect(() => {
  //   const dataFetch = async () => {
  //     try {
  //       const req = await fetch(link_yozuv);
  //       const data = await req.json();
  //       setMainYozuv(data);
  //     } catch (error) {
  //       console.error(`Siz Olmoqchi bo'lgan ma'lumotda Xatolik bor`, error);
  //     }
  //   };
  //   dataFetch();
  // }, [link]);

  //HTML
  return (

    <div className="MainPage">
      <div className="box1">
        {/* {MainYozuv.map((yozuvbek) => (
          <Fragment key={yozuvbek}>
            <h1 className="text_1">{yozuvbek.yozuvbek1}</h1>
            <h1 className="text_2">{yozuvbek.yozuvbek2}</h1>
            <h1 className="text_3">{yozuvbek.yozuvbek3}</h1>
            <h3 className="text_4">{yozuvbek.yozuvbek4}</h3>
          </Fragment>
        ))} */}



        <h1 className="text_1">UNIVERSITY.COM</h1>
        <h1 className="text_2">IN A WORLD RACING FORWARD,</h1>
        <h1 className="text_3">CAN YOU AFFORD TO STAND STILL?</h1>
        <h3 className="text_4">
          The clock is ticking, the world is spinning, and the only constant is
          relentless change.
          <br />
          The future belongs to the people who act, the learners of REAL skills
          that matter here and now.
        </h3>

        <video
          poster={Un_shablon}
          src={vidio_1}
          controls
          className="Vidio_1"
        ></video>

        <div className="wrapper111">
          <a
            target="_blank"
            className="cta"
            href="https://youtube.com/@PROGMASTERY?si=OsPqAMX5_XZMKF_Q"
          >
            <span>WATCH</span>
            <span>
              <svg
                width="66px"
                height="43px"
                viewBox="0 0 66 43"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="arrow"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="one"
                    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  />
                  <path
                    className="two"
                    d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  />
                  <path
                    className="three"
                    d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                    fill="#FFFFFF"
                  />
                </g>
              </svg>
            </span>
          </a>
        </div>
      </div>
      {/* Box 1 end */}

      <div className="box2">
        <p className="bosh"></p>
        <div className="logo"></div>
        <h1 className="text_5">YOU DO NOT HAVE TIME TO WASTE</h1>
        <h1 className="text_66">
          While most have their heads buried in study for 4 years…
        </h1>
        <h1 className="text_6">
          World innovators and powerful men are getting richer by the second.
        </h1>
        <h1 className="text_7">
          Countless opportunities for wealth are slipping by and you don’t even
          notice.
        </h1>
        <h1 className="text_8">
          It's time you took control of the opportunities most people ignore,
          and learn the <br />
          most important skill for living a good life...
        </h1>
        <h1 className="text_9">How to make money online.</h1>
        <div className="wrapper2">
          <a
            target="_blank"
            className="cta2"
            href="https://youtube.com/@PROGMASTERY?si=OsPqAMX5_XZMKF_Q"
          >
            <span>LEARN MORE</span>
            <span>
              <svg
                width="66px"
                height="43px"
                viewBox="0 0 66 43"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="arrow"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="one"
                    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  />
                  <path
                    className="two"
                    d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  />
                  <path
                    className="three"
                    d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                    fill="#FFFFFF"
                  />
                </g>
              </svg>
            </span>
          </a>
        </div>

        <img className="students" src={students} alt="" />
        <div className="join">
          <h3>
            Join <span>200,000+</span> like-minded students
          </h3>
        </div>
      </div>
      {/* Box 2 end */}

      {/* Box 3 end */}
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
      {/* Box3_start */}
      <div className="slider">
        <h1>My University.com</h1>
        <Slider />
      </div>
      {/* box3 end */}
      {/* Hamkor */}
      <div className="hamkor">
        <h1>Bizning hamkorlar 🤝</h1>
        <div className="hamkor-parent">
          <Hamkors />
        </div>
      </div>

      {/* Hamkor */}
      <div className="box3">
        <h1 className="map_t_first">Maps for find me👨‍💻</h1>
        <div className="box3-in">
          <div className="xarita">
            <>
              <iframe
                className="frame_map"
                scrolling="no"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=520&height=282&hl=en&q=Toshkent%20UIC%20group%20Tashkent+(Behruzbek%20Berdimurodov)&t=k&z=19&ie=UTF8&iwloc=B&output=embed"
              />{" "}
            </>
          </div>
          <div className="map_info">
            <h1 className="text_10">Contact us 🔗</h1>
            {json.map((texts) => (
              <Fragment key={texts}>
                <h3 className="text_11">{texts.map_txt}</h3>
                <h1></h1>
              </Fragment>
            ))}

            <h3 className="text_12">
              👨‍💻Youtube Channel :{" "}
              <a className="a" href="https://www.youtube.com/@PROGMASTERY">
                Youtube Kanalimiz
              </a>
            </h3>
            <h3 className="text_13">
              Youtube channel Admin : Behruzbek Berdimurodov ✔️
            </h3>
            <button className="buttons-s">
              Watch students
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
