import React from "react";

import { Cards, Charts, CityPicker, Footer } from "./components";
import styles from "./App.module.css";
import { fetchCases } from "./api";
import image from "./image/img.png"

class App extends React.Component {

    state = {
        data: {},
        city: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchCases();
        this.setState({ data: fetchedData})
    }

    handleCityChange = async (city) => {
        console.log("city changed to ", city);
        const fetchedData = await fetchCases(city);
        this.setState({ data: fetchedData, city })
    }

    render() {
        const { data, city } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="Covid-19"/>
                <Cards data={data} />
                <CityPicker handleCityChange={this.handleCityChange}/>
                <Charts data={data} city={city}/>
                <Footer data={data}/>
            </div>
        )
    }
}

export default App;
