import React,{useEffect,useState}from 'react';
import { ProgressBar } from 'react-bootstrap';
import logo from './images/LOGO21.png';
import ECL from './images/ECL21.png';
import HH from './images/HH.jpg'
import {ComposableMap, Geographies, Geography} from "react-simple-maps"
import {scaleQuantile} from "d3-scale"
import Table from './components/Table';
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
import Twentysixteen from './2016';
import ElevenYear from './2011';
const geoUrl = ('./zambia.topo.json');
const PROJECTION_CONFIG = {
  scale:2500,
  center: [27.8493,-13.1339],
  
};

function App() {
  //API LINKS
  const ProgressBarLink = "https://andyson.pythonanywhere.com/api/"
  const twentyOne = 'https://andyson.pythonanywhere.com/api/2021/'
  
  //STORING IN STATE
  const [pbdata, setPbdata] = useState([]);
  const [data, setData] = useState([]);

  const getpddata = async ()=>{
    const response = await fetch(ProgressBarLink);
    const responseJson = await response.json();
    setPbdata(responseJson);
  };
  useEffect(()=>{
    getpddata();
  },[]);

  const getdata = async ()=>{
    const response = await fetch(twentyOne);
    const responseJson = await response.json();
    setData(responseJson);
  };
  useEffect(()=>{
    getdata();
  },[]);
  
  //COLOR SCALE FOR CHOROPLETH MAP
  const colorScale = scaleQuantile().domain(data.map(d=>d.provincewinner)).range([
    "red",
    "green"
    
    ]);

  
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/">
        <nav>
        <img className="Title" src={logo} alt="logo"/>
      </nav>
      <div className="header">
      <p>Zambia Elections</p>
      <p className="lr">LIVE RESULTS</p> 
      </div>
      <div className="links">
      <p className="one"><NavLink to='/' activeStyle={{fontWeight: "bold" ,color: "black"}}>2021</NavLink></p>
      <p className="sixteen"><NavLink to='/2016'activeStyle={{fontWeight: "bold", color: "black"}}>2016</NavLink></p>
      <p className="eleven"><NavLink to='/2011' activeStyle={{fontWeight: "bold", color: "black"}}>2011</NavLink></p>
      </div>
      
        <div className="divme">
          <div className="profile"><img className="ECL" src={ECL} alt="president"/>
          {pbdata.filter(data1=>data1.year ==="2021").map(votes=><p className="lungu">LUNGU EDGAR| PF<br/>{votes.candidate1vote}|{votes.candidate1}%</p>)}
          </div>
          <p className="key1">|</p>
      {pbdata.filter(data=>data.year === "2021").map(info => <ProgressBar className="right" animated now={info.candidate2}></ProgressBar>)}
      </div>
      <div className="divme1">
      {pbdata.filter(data=>data.year === "2021").map(info =>  <ProgressBar className="left" animated now={info.candidate1}></ProgressBar>)}
      <p className='key2'>|</p>
      <div className="profile1"><img className="Haka" src={HH} alt="candidate"/>
      {pbdata.filter(data1=>data1.year ==="2021").map(votes=><p className="hichilema">HICHILEMA HAKAINDE| UPND<br/>{votes.candidate2vote}|{votes.candidate2}%</p>)}
      </div>
      </div>
      <div className='key3'>
        <p>(50 + 1)% of votes required to win</p>
      </div>
      <div className="title1"><h1>CHOROPLETH MAP</h1></div>
      <ComposableMap data-tip="" projectionConfig={PROJECTION_CONFIG} projection="geoMercator" height={500}>
        <Geographies geography={geoUrl}>
          {({geographies}) => 
            geographies.map(geo => {
              const object = data.find(province => province.provinceCode === geo.id);
              return (
                <Geography key={geo.rsmKey} geography={geo} 
                style={{
                  default: {
                    outline: "none"
                  },
                  hover: {
                    fill: "#000000",
                    transition: 'all 250ms',
                    outline: "none"
                  },
                  pressed: {
                    outline: "none"
                  }
                }}
                strokeWidth="0.6" stroke="#000000"
                fill={object ? colorScale(object.provincewinner) : "#EEE"} />
              )
            }
               )
          }
        </Geographies>
      </ComposableMap>
      <div className="key4">
      <div className="middle1"><div className="pf"></div><p className="info">Patriotic Front win</p></div>
      <div className="middle"><div className="upnd"></div><p className="info">United Party for National Development win</p></div>
      <div className="middle2"><div className="other"></div><p className="info">Other Party win</p></div>
      <div className="middle3"><div className="undecided"></div><p className="info">Undecided</p></div>
      </div>
      <div className="title1"><h1>PROVINCES</h1></div>
      <Table object={data} one="Lungu" two="Hichilema"/>
      <footer>
        <p>All data displayed is from <a href="https://www.elections.org.zm/">Electoral Commission of Zambia</a></p>
        <p>For contact <a href="https://amjwebsite.netlify.app/">AMJWEBSITE</a></p>
        <p>© ZAMBIA DECIDES 2021</p>
      </footer>
        </Route>
          <Route exact path="/2016">
            <Twentysixteen/>
          </Route>
          <Route exact path="/2011">
            <ElevenYear/>
          </Route>
        </Switch>
      </Router>

      </div>
     
  );
}

export default App;
