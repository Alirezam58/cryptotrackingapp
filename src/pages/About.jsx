import React from "react"
import aboutImg from "../assets/images/About.png"
import aboutusImg from "../assets/images/AboutUs.png"

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <img src={aboutImg} alt="About Us" className="img-fluid rounded-3 my-4" />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-7 aboutus-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ut
          quod maiores quia enim perspiciatis rerum pariatur deleniti, expedita
          est? Dignissimos qui nisi laudantium, ut magnam reiciendis corrupti
          ipsum neque fugiat quibusdam optio, a tempora! Odio ea corporis
          assumenda vitae obcaecati facilis corrupti excepturi id praesentium?
          Unde facilis libero reiciendis aliquid est incidunt cum cumque
          corporis soluta amet atque iure molestias impedit eligendi magnam
          fuga, dignissimos at labore eum similique ea quo doloremque debitis.
          Minus, cum ullam? Et impedit laudantium, minima dolores aut voluptas
          accusamus aperiam magnam obcaecati atque quae consequatur velit
          molestias! Asperiores, eligendi. Exercitationem dolore deserunt
          commodi suscipit.
          corporis soluta amet atque iure molestias impedit eligendi magnam
          fuga, dignissimos at labore eum similique ea quo doloremque debitis.
          Minus, cum ullam? Et impedit laudantium, minima dolores aut voluptas
          accusamus aperiam magnam obcaecati atque quae consequatur velit
          molestias! Asperiores, eligendi. Exercitationem dolore deserunt
          commodi suscipit.corporis soluta amet atque iure molestias impedit eligendi magnam
          fuga, dignissimos at labore eum similique ea quo doloremque debitis.
          Minus, cum ullam? Et impedit laudantium, minima dolores aut voluptas
        </div>
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img src={aboutusImg} alt="About Us" className="img-fluid aboutus-img" />
        </div>
      </div>
    </div>
  );
}

export default About;
