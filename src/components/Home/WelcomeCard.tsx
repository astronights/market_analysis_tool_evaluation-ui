import React from "react";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";

class WelcomeCard extends React.Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Welcome to MATE.
          </Typography>
          <Typography variant="body2">
            Your Market Analysis Technical Evaluation.
            <br />
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default WelcomeCard;
