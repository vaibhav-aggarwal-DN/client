import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import styles from "./cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { active, recovered, deaths, updated_at: updatedAt} }) => {
    if(!updatedAt) {
        return 'Loading...';
    }
    updatedAt = new Date(updatedAt).toDateString();
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.active)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={active} duration={2} separator=','/>
                        </Typography>
                        <Typography color="textSecondary">{updatedAt}</Typography>
                        <Typography variant="body2">Number of Active Cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered} duration={2} separator=','/>
                        </Typography>
                        <Typography color="textSecondary">{updatedAt}</Typography>
                        <Typography variant="body2">Number of Recovered Cases by Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths} duration={2} separator=','/>
                        </Typography>
                        <Typography color="textSecondary">{updatedAt}</Typography>
                        <Typography variant="body2">Number of Deaths by Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
