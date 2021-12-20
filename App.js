import './App.css';
import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import useFetch from "react-fetch-hook"

const words = [
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  },
]
function SimpleWordcloud() {
  return <ReactWordcloud words={words} />
}
const Component = () => {
  const { isLoading, data, errors } = useFetch("http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=michael+jackson&song=thriller", {mode: 'cors', credentials: "include",});
  console.log({data});

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>{data}</div>
  );
}
function App() {
  return (
    <div className="App">
        <SimpleWordcloud />
        <Component />
    </div>
  );
}

export default App;
