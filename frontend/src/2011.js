import React,{useEffect,useState}from 'react';
import { ProgressBar } from 'react-bootstrap';
import logo from './images/LOGO21.png';
import SATA from './images/SATA1.jpg';
import RB from './images/RB1.jpg'
import {ComposableMap, Geographies, Geography} from "react-simple-maps"
import {scaleQuantile} from "d3-scale"
import Table from './components/Table';
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
import Twentysixteen from './2016';
import App from './App';
import { Doughnut } from 'react-chartjs-2';

//MAP CONFIGURATION
const geoUrl = ('./zambia.topo.json');
const PROJECTION_CONFIG = {
  scale:2500,
  center: [27.8493,-13.1339],
  
};

function ElevenYear(){
    //API LINKS
    const ProgressBarLink = "https://andyson.pythonanywhere.com/api/"
    const eleven = 'https://andyson.pythonanywhere.com/api/2011/'

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
    const response = await fetch(eleven);
    const responseJson = await response.json();
    setData(responseJson);
  };
  useEffect(()=>{
    getdata();
  },[]);
  
  //COLOR SCALE FOR CHOROPLETH MAP
  const colorScale = scaleQuantile().domain(data.map(d=>d.provincewinner)).range([
    "red",
    "green",
    "blue"
        
    ]);

  // SETTING UP CHART
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
        labels: ["PF", "MMD", "UPND", "OTHER"],
        datasets: [
        {
          
            data: [42,36,18,15],
            backgroundColor: [
                'green',
                'blue',
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
        <Route exact path="/2011">
        <nav>
        <img className="Title" src={logo} alt="logo"/>
      </nav>
      <div className="header">
      <p>Zambia Elections</p>
      <p className="lr">LIVE RESULTS</p> 
      </div>
      <div className="links">
      <p className="one"><NavLink to='/'>2021</NavLink></p>
      <p className="sixteen"><NavLink to='/2016'activeStyle={{fontWeight: "bold", color: "black"}}>2016</NavLink></p>
      <p className="eleven"><NavLink to='/2011' activeStyle={{fontWeight: "bold" ,color: "black"}}>2011</NavLink></p>
      </div>
      <div className="divme">
      <div className="profile"><img className="RB" src={RB} alt="president"/>
      {pbdata.filter(data1=>data1.year ==="2011").map(votes=><p className="lungu">BANDA RUPIAH| MMD<br/>{ votes.cadidate2votes}|{votes.candidate2}%</p>)}
      </div>
      <p className="key1">|</p>
      {pbdata.filter(data=>data.year === "2011").map(info =>  <ProgressBar className="rb" animated now={info.candidate2}></ProgressBar>)}
      </div>
      <div className="divme1">
      {pbdata.filter(data=>data.year === "2011").map(info =>  <ProgressBar className="sata" animated now={info.candidate1}></ProgressBar>)}
      <p className='key2'>|</p>
      <div className="profile1"><img className="SATA" src={SATA} alt="candidate"/>
      {pbdata.filter(data1=>data1.year ==="2011").map(votes=><p className="hichilema">SATA MICHEAL| PF<br/>{votes.cadidate1votes}|{votes.candidate1}%</p>)}
      </div>
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
      <div className="middle"><div className="mmd"></div><p className="info">Movement for Multi Party Democracy win</p></div>
      <div className="middle2"><div className="other2"></div><p className="info">United Party for National Development win</p></div>
      </div>
      <div className="title1"><h1>PROVINCES</h1></div>
      <Table object={data} one="Sata" two="Banda"/>
      <div className="chart">
      <div className="title1"><h1>CHART</h1></div>
       <Doughnut data={dataset} options={options} />
     <div>
</div>
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
          <Route exact path="/2016">
            <Twentysixteen/>
          </Route>
      </Switch>
    </Router>
      </div>
     
  );

    
}
export default ElevenYear;