import React from "react";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";

const WelcomeCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
          Welcome to MATE.
        </Typography>
        <Typography variant="body2">
          Market Analysis Technical Evaluation.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
