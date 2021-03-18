import React from 'react';
import './../animation.css';

const Home = () => {
  return (
    <section className="app-inner">
        <div className="content-area">
        <pre>{`<body>`}</pre>
        <pre>{`<h>`}</pre>
        <div class="typewriter">   
          <h1 className="home-content">
            <span className="active">안녕하세요.</span><br/>
              <span className="red">그림쟁이</span>
              <span className="mint">Web developer1</span><br/>
              <span className="blue">최예인</span>
              입니다.
          </h1>
        </div>
        <pre>{`</h>`}</pre>
        <pre>{`</body>`}</pre>
        </div>
    </section>
  );
};

export default Home;