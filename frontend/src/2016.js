import React,{useEffect,useState}from 'react';
import { ProgressBar } from 'react-bootstrap';
import logo from './images/LOGO21.png';
import ECL from './images/ECL2.jpg';
import HH from './images/HH.jpg'
import {ComposableMap, Geographies, Geography} from "react-simple-maps"
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
import {scaleQuantile} from "d3-scale"
import Table from './components/Table';
import ElevenYear from './2011';
import App from './App';
import { Doughnut } from 'react-chartjs-2';

//MAP CONFIGURATION
const geoUrl = ('./zambia.topo.json');
const PROJECTION_CONFIG = {
  scale:2500,
  center: [27.8493,-13.1339],
  
};

function Twentysixteen(){
  //API LINKS
  const ProgressBarLink = "https://andyson.pythonanywhere.com/api/"
  const Sixteen = 'https://andyson.pythonanywhere.com/api/2016/'
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
    const response = await fetch(Sixteen);
    const responseJson = await response.json();
    setData(responseJson);
  };
  useEffect(()=>{
    getdata();
  },[]);
  
  // COLOR SCALE FOR CHOROPLETH MAP
  const colorScale = scaleQuantile().domain(data.map(d=>d.provincewinner)).range([
    "red",
    "green"
    
    ]);

  //SETTING UP CHART
  const options = {
        legend: {
          display: false,
          position: "right"
        },
        elements: {
          arc: {
            borderWidth: 6
          }
        }
      };
    
      const dataset = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ["PF", "UPND", "OTHER"],
        datasets: [
        {
          
            data: [50.35,47.68,3],
            backgroundColor: [
                'green',
                'red',
                'gray'
              ],
          }
        ]
      };
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/2016"> 
          <nav>
        <img className="Title" src={logo} alt="logo"/>
      </nav>
      <div className="header">
      <p>Zambia Elections</p>
      <p className="lr">LIVE RESULTS</p> 
      </div>
      <div className="links">
      <p className="one"><NavLink to='/'>2021</NavLink></p>
      <p className="sixteen"><NavLink to='/2016'activeStyle={{fontWeight: "bold" , color: "black"}}>2016</NavLink></p>
      <p className="eleven"><NavLink to='/2011' activeStyle={{fontWeight: "bold", color: "black"}}>2011</NavLink></p>
      </div>
      <div className="divme">
      <div className="profile"><img className="ECL" src={ECL} alt="president"/>
      {pbdata.filter(data1=>data1.year ==="2016").map(votes=><p className="lungu">LUNGU EDGAR| PF<br/>{ votes.cadidate1votes}|{votes.candidate2}%</p>)}
      
      </div>
      <p className="key1">|</p>
      {pbdata.filter(data=>data.year === "2016").map(info =>  <ProgressBar className="right" animated now={info.candidate2}></ProgressBar>)}
      </div>
      <div className="divme1">
      {pbdata.filter(data=>data.year === "2016").map(info =>  <ProgressBar className="left" animated now={info.candidate1}></ProgressBar>)}
      <p className='key2'>|</p>
      <div className="profile1"><img className="Haka" src={HH} alt="candidate"/>
      {pbdata.filter(data1=>data1.year ==="2016").map(votes=><p className="hichilema">HICHILEMA HAKAINDE| UPND<br/>{votes.cadidate2votes}|{votes.candidate1}%</p>)}
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
      </div>
      <div className="title1"><h1>PROVINCES</h1></div>
      <Table object={data} one="Hichilema" two="Lungu"/>
      <div className="chart">
      <div className="title1"><h1>CHART</h1></div>
       <Doughnut data={dataset} options={options} />
      </div>
      <footer>
        <p>All data displayed is from <a href="https://www.elections.org.zm/">Electoral Commission of Zambia</a></p>
        <p>For contact <a href="https://amjwebsite.netlify.app/">AMJWEBSITE</a></p>
        <p>© ZAMBIA DECIDES 2021</p>
      </footer>
          </Route>
          <Route exact path="/">
            <App/>
          </Route>
          <Route exact path="/2011">
            <ElevenYear/>
          </Route>
        </Switch>
      </Router>
      </div>
     
  );

}

export default Twentysixteen;