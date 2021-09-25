import React from "react";
import "../../assets/css/Component.scss";
import Card from "@mui/material/Card";
import CountUp from "react-countup";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { CardContent, Typography } from "@mui/material";

interface StatsCardProps {
  coinCount: number;
  lastUpdated: number;
}

const StatsCard = (props: StatsCardProps) => {
  return (
    <Card className="stats-card">
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
        <Button size="small">Update</Button>
      </CardActions>
    </Card>
  );
};

export default StatsCard;
