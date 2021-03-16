import React from 'react';

const Home = () => {
  return (
    <section className="app-inner">
        <div className="content-area">
        <pre>{`<body>`}</pre>
        <pre>{`<h>`}</pre>
        <h1 className="home-content">안녕하세요.<br/>
            <span className="red">그림쟁이</span>
            <span className="mint">Web developer1</span><br/>
            <span className="blue">최예인</span>
        입니다.</h1>
        <pre>{`</h>`}</pre>
        <pre>{`</body>`}</pre>
        </div>
    </section>
  );
};

export default Home;