import { useRef, useEffect, useState } from 'react'
import './App.css'
import Typed from 'typed.js';
import { useInView } from 'react-intersection-observer';

function App() {
  const el = useRef(null);
  const options = {
    triggerOnce: true,
    threshold: 0.5 // Adjust threshold as needed
  }

  const [infoRef, infoInView] = useInView(options);
  const [logoRef, logoInView] = useInView(options);
  const [btnRef, btnInView] = useInView(options);
  const [headRef, headInView] = useInView(options);
  const [containerRef, containerInView] = useInView(options);
  const [socialRef, socialnView] = useInView(options);
  const [lineRef, lineInView] = useInView(options)
  const [expRef, expInView] = useInView(options)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["web developing", "AI developing", "UI developing", "Designing", "API developing"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 100
    });

    return () => {
      typed.destroy();
    };
  }, []);


  // useEffect(() => {
  //   if (containerInView) {
  //     const links = containerRef.current.querySelectorAll('.icons a');
  //     links.forEach((link, index) => {
  //       link.style.setProperty('--i', index + 1);
  //     });
  //   }
  // }, [containerInView]);


  return (
    <>
      <header>
        <div className={`logo ${logoInView ? 'visible' : ''}`} ref={logoRef}>
          <h1>Vs</h1>
        </div>
      </header>

      <main>
        <div className={`info ${infoInView ? 'visible' : ''}`} ref={infoRef}>
          Hi <i>👋</i> I Am
          <br />
          <div></div>
          <span>
            Venkat Sai
          </span>
          <br />
          <div></div>
          I Got <br /> <span ref={el}></span>
        </div>
      </main>

      <section>
        <a href="src/VenkatSai.pdf" download="venkatsResume.pdf">
          <button className={`btn ${btnInView ? 'visible' : ''}`} ref={btnRef}>
            Resume
          </button>
        </a>
      </section>


      <div className="contact" >
        <div className={`head ${headInView ? 'visible' : ''}`} ref={headRef}>
          <p>Work Experiance</p>
        </div>

        <div className="items">
          <div className={`line ${lineInView ? 'visible' : ''}`} ref={lineRef}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div  className={`exp ${expInView ? 'visible' : ''}`} ref={expRef}>
            <div className="work-experience">
              <div className="position">Freelancer</div>
              <div className="company">Fiverr</div>
              <div className="dates">June 2020 - Present</div>
            </div>
            <div className="work-experience">
              <div className="position">Social enturpunership</div>
              <div className="company">Hamari pehchan</div>
              <div className="dates">june 2023 - Present</div>
            </div>
            <div className="work-experience">
              <div className="position">Internshala student patner</div>
              <div className="company">Internshala</div>
              <div className="dates">April 2023 - May 2023</div>
            </div>
            <div className="work-experience">
              <div className="position">Web Engineer</div>
              <div className="company">Businessweb Tech Inc.</div>
              <div className="dates">June 2022 - january 2023</div>
            </div>
            <div className="work-experience">
              <div className="position">Web desinger</div>
              <div className="company">For Schools</div>
              <div className="dates">Feb 2022 - May 2022</div>
            </div>
          </div>
        </div>


      </div>

      <footer>
        <div className={`social ${socialnView ? 'visible' : ''}`} ref={socialRef}>
          <h1>Social</h1>
        </div>

        <div className='container'>

          <div className={`icons ${containerInView ? 'visible' : ''}`} ref={containerRef}>
            <a target='_blank' href="https://www.linkedin.com/in/venkat-sai-utharadhi-705462236" >
              <i className="fab fa-linkedin"></i>
            </a>
            <a target='_blank' href="https://replit.com/@venkatsai004" >
              <i className="fab fa-replit"><img src="https://replit.com/public/icons/favicon-prompt-192.png" alt="replit" width={50} height={50}/></i>
            </a>
            <a target='_blank' href="https://github.com/Venkatsai04" >
              <i className="fab fa-github"></i>
            </a>
            <a target='_blank' href="https://makeit.venkatsai004.repl.co/" >
              🕸
            </a>
          </div>

        </div>

      </footer>

    </>
  )
}

export default App
