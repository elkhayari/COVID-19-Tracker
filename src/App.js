import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Cards, Chart, CountryPicker, CountryVsCoutryPicker, ChartComparaison } from './components'
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.png'



class App extends React.Component {

  state = {
    data: {},
    country: '',
    dataCountry_1: {},
    country_1: '',
    dataCountry_2: {},
    country_2: '',
    position: {
      atl: 'hello'
    }
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({
      data: fetchedData
    })

  }

  handleCountryChange = async (country) => {
    //fetch data
    
    const fetchedData = await fetchData(country)
   
    // set the state
    this.setState({
      data: fetchedData,
      country: country,
    })
  }

 

  //handle country vs country  picker 
  handleCountryChange_1 =  async (country) =>{
    //fetch data for a country
    const fetchedData = await fetchData(country)
   
    // set the state
    this.setState({
      dataCountry_1: fetchedData,
      country_1: country,
    })
    console.log('country 1', this.state.country_1)
    console.log('data', this.state.dataCountry_1)
  }
  handleCountryChange_2 =  async (country) =>{
    //fetch data for a country
    const fetchedData = await fetchData(country)
   
    // set the state
    this.setState({
      dataCountry_2: fetchedData,
      country_2: country,
    })
    console.log('country 2', this.state.country_2)
    console.log('data ', this.state.dataCountry_2)
  }

  render() {
    //1
   
    const { data, country, country_1, country_2 } = this.state
    
    return (
      <div className={styles.container}>
        <img src={coronaImage}  className={styles.image} alt='covid-19'/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
        <CountryVsCoutryPicker handleCountryChange_1={this.handleCountryChange_1}
                              handleCountryChange_2={this.handleCountryChange_2}/>
     
        <ChartComparaison country_1={country_1} country_2={country_2}/>
      </div>
    );
  }
}


export default App;
