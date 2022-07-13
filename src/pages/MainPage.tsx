import React, {FC, useEffect, useState} from 'react';

const MainPage:FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  });

  if (loading) {
    return (
      <div className="App">

        <div id="reader" className={'reader'} style={{width: '100%'}}/>

        <p>LOADING...</p>
      </div>
    );
  }

  return (
    <div className="page main">
      <p>Main page</p>
    </div>
  );
}

export {MainPage};
