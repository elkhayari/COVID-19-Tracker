import React from "react";

import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from 'classnames'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return "Loading...";
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}
                      xs={12} md={3}
                      className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={0} end={confirmed.value} duration={5} separator=","
                            ></CountUp>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Number Of Active cases of COVID-19
                         </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}
                      xs={12} md={3}
                      className={cx(styles.card, styles.recovred)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovred
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={0} end={recovered.value} duration={5} separator=",">
                            </CountUp>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Number Of recovries from COVID-19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}
                      xs={12} md={3}
                      className={cx(styles.card, styles.death)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={0} end={deaths.value} duration={5} separator=",">
                            </CountUp>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Number Of Deathes cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
