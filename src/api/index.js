import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

//fetch data globaly or per country for lastUpdate
export const fetchData = async (country) => {
   let changeableUrl = url
   if (country) {
      changeableUrl = `${url}/countries/${country}`
   }
   try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl)

      return {
         confirmed, recovered, deaths, lastUpdate
      }


   } catch (error) {
      console.log('error', error);
   }
}

// fetch global daily data 
export const fetchDailyData = async () => {
   try {
      //const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url)
      const { data } = await axios.get(`${url}/daily`)
      const modifieddata = data.map((dailyData) => ({
         confirmed: dailyData.confirmed.total,
         deaths: dailyData.deaths.total,
         recovered: dailyData.recovered.total,
         date: dailyData.reportDate,
      }))

      return modifieddata

   } catch (error) {
      console.log('error', error);

   }

}

// fetch the name of countries
export const fetchCountries = async () => {
   try {
      const { data: { countries } } = await axios.get(`${url}/countries`)

      return countries.map((country) => country.name)
   } catch (error) {
      console.log(error)
   }
}


// daily data for each country from '01-22-2020' till lastupdate
export const fetchDailyData_byCountry = async (country) => {
   let value = 0; 
   let i
   try {
      const { data } = await axios.get(`${url}/daily`)

      const dates = data.map((dailyData) =>
         dailyData.reportDate
      )

      console.log(dates[0])
      /*for(i=0 ; i<dates.length ; i++){
         value = await axios.get(`${url}/daily/${dates[i]}`)
      }
 
      console.log(value)*/
   } catch (error) {
      console.log('error in fetching tata from ', 'error:', error)
   }
}

