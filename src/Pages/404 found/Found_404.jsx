import React from "react";
import "./Found_404.css";
import { Link } from "react-router-dom";
function Found_404() {
  // Parallax Code
  // var scene = document.getElementById("scene");
  // var parallax = new Parallax(scene);
  return (
    <>
      {/* about */}
      <section className="wrapper">
        <div className="aaa">
          <div id="scene" className="scene" data-hover-only="false">
            <div className="circle" data-depth="1.2" />
            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece" />
                <span className="piece" />
                <span className="piece" />
              </div>
            </div>
            <div className="two" data-depth="0.60">
              <div className="content">
                <span className="piece" />
                <span className="piece" />
                <span className="piece" />
              </div>
            </div>
            <div className="three" data-depth="0.40">
              <div className="content">
                <span className="piece" />
                <span className="piece" />
                <span className="piece" />
              </div>
            </div>
            <p className="p404" data-depth="0.50">
              404
            </p>
            <p className="p404" data-depth="0.10">
              404
            </p>
          </div>
          <div className="text">
            <article>
              <p>
                Uh oh! Looks like you got lost. <br />
                Go back to the homepage if you dare!
              </p>
              <Link to={''}>
              
              <button>Back Site</button>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Found_404;
