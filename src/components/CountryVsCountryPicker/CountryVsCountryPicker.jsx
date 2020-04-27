import React, { useState, useEffect } from "react";
// Material-UI
import { NativeSelect, FormControl } from "@material-ui/core";
// import api
import { fetchCountries } from "../../api";
//import styles
import styles from "./CountryVsCountryPicker.module.css";

const CountryVsCoutryPicker = ({
  handleCountryChange_1,
  handleCountryChange_2,
}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchApi();
  }, [setFetchedCountries]);

  return (
    <div className='row pt-5'>
      <div className="col-5">
        <FormControl className={styles.formControl}>
          <NativeSelect
            defaultValue=""
            onChange={(e) => handleCountryChange_1(e.target.value)}
          >
            <option value="">Global</option>
            {fetchedCountries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>
      <div className="col">
      <span>VS</span>
      </div>

      <div className="col-5">
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange_2(e.target.value)}
        >
          <option value="">Global</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      </div>
    </div>
  );
};

export default CountryVsCoutryPicker;
