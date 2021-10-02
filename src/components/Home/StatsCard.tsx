import React from "react";
import "../../assets/css/Component.scss";
import Card from "@mui/material/Card";
import CountUp from "react-countup";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { CardContent, Typography } from "@mui/material";
import { updatePrices } from "../../api/ohlcv";
import { getTimeStamp } from "../../utils/DateUtils";

interface StatsCardProps {
  coinCount: number;
  lastUpdated: number;
  alert: any;
}

const StatsCard = (props: StatsCardProps) => {
  const fetchLatestPrices = () => {
    updatePrices(props.lastUpdated, getTimeStamp(new Date()))
      .then((_prices) => {
        return props.alert.success("Coin prices updated!");
      })
      .catch((_error) => {
        return props.alert.error("Could not update prices. Try manually.");
      });
  };
  return (
    <Card
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent className="card-content">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Coins
        </Typography>
        <CountUp end={props.coinCount} duration={0.5} />
      </CardContent>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Last Updated
        </Typography>
        <Typography variant="body2">
          {new Date(props.lastUpdated * 1000).toLocaleString()}
          <br />
        </Typography>
      </CardContent>
      <CardActions className="card-action">
        <Button size="small" onClick={fetchLatestPrices}>
          Update
        </Button>
      </CardActions>
    </Card>
  );
};

export default StatsCard;
