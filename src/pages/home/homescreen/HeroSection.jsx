import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function HeroSection()
{
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey I'm Chhewang Paljur</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            web 
                        </span>{""}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        <br /> Eos hic necessitatibus, totam laboriosam ipsum beatae?
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>

            </div>
            <div className="hero--section--img">
                <img className="hero-img" src="./chhewang.jpg" alt="hero section" width={400} />
            </div>
        </section>
    );
}