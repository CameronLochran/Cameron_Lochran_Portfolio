import "./HomePage.css";

const Home = () => {
  return (
    <>
      <div className="home-page-container">
        <head>
          <title>Cameron Lochran</title>
        </head>

        <center>
          <div className="head">
            <header>
              
            </header>
            
              <h1>Welcome!</h1>
              <h2>What would you like to see first of me?</h2>
          </div>

          <h3>
            <a href="https://www.linkedin.com/in/cameron-lochran-371610234/">
              My LinkedIn,
            </a>
            <br />
          </h3>
          <h3>
            <a href="/projects">Projects, </a>
            <br />
          </h3>
          <h3>
            <a href="/aboutme">About Me </a>
            <br />
          </h3>
          <h3>&</h3>
          <h3>
            <a href="/contactpage">Ways To Contact Me</a>
            <br />
          </h3>
        </center>
      </div>
    </>
  );
};

export default Home;
