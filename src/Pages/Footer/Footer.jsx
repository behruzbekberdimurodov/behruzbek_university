import React from 'react'
import logo from '../images/university-logo.png'
import { Link } from 'react-router-dom'
import './Text.css'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-in-1">
        <img className='logo' src={logo} alt="" />
        <h3>Hello, how are you? This is the site prepared by Behruzbek Berdimurodob for the exam. You can find out information about the university from this site. Note that I made this footer on the exam day</h3>

        <Link to='' className="btn">Jump to top</Link>
      </div>
      <div className="footer-in-2">
        <h1>Useful links</h1>
        <ul>
          <li>
            <Link to="">
              {" "}
              <h3 className="text_first txt_1">HOME </h3>
            </Link>
          </li>
          <li>
            <Link to="/NewInformation">
              {" "}
              <h3 className="text_first txt_2">NEW INFORMATION</h3>
            </Link>
          </li>
          <li>

            <Link to="Reviewes">
              <h3 className=" text_first txt_3">REVIEWES</h3>

            </Link>
          </li>
          <li>
            <Link to="THE-ALTERNATIVE">

              <h3 className="text_first txt_4">THE-ALTERNATIVE</h3>
            </Link>
          </li>
          <li>
            <Link to="Contact">
              <h3 className="text_first txt_5">CONTACT</h3>
            </Link>
          </li>




        </ul>
        <div className="rating">
          <input type="radio" id="star5" name="rate" defaultValue={5} />
          <label htmlFor="star5" title="text">
            <svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="star-solid"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </label>
          <input type="radio" id="star4" name="rate" defaultValue={4} />
          <label htmlFor="star4" title="text">
            <svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="star-solid"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </label>
          <input
            defaultChecked=""
            type="radio"
            id="star3"
            name="rate"
            defaultValue={3}
          />
          <label htmlFor="star3" title="text">
            <svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="star-solid"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </label>
          <input type="radio" id="star2" name="rate" defaultValue={2} />
          <label htmlFor="star2" title="text">
            <svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="star-solid"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </label>
          <input type="radio" id="star1" name="rate" defaultValue={1} />
          <label htmlFor="star1" title="text">
            <svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="star-solid"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </label>
        </div>

      </div>
      <div className="footer-in-3">
        <h1> Find us </h1>
        <div style={{ width: "100%" }}>
          <iframe
            className='mapss'
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=UIC%20Group+(My%20BusiUniversityness%20Name)&t=k&z=16&ie=UTF8&iwloc=B&output=embed"
          >
            &lt;a href="https://www.gps.ie/"&gt;gps devices&lt;/a&gt;
          </iframe>
        </div>

        <h2>&copy; Behruzbek Berdimurodov</h2>
      </div>
    </div>
  )
}

export default Footer
