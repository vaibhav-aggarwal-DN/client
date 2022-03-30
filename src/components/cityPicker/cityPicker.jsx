import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchAllCities } from "../../api";
import styles from "./cityPicker.module.css"

const CityPicker = ({ handleCityChange }) => {
    const [cities, setCities] = useState([]);
    useEffect(() => {
        const fetchCitiesAPI = async () => {
            setCities(await fetchAllCities());
        }
        fetchCitiesAPI();
    }, [setCities]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCityChange(e.target.value)}>
                <option value='' className={styles.options}>India</option>
                { cities.map((city, i) => <option key={i} value={city} className={styles.options}>{city}</option>) }
            </NativeSelect>
        </FormControl>
    )
}

export default CityPicker;
