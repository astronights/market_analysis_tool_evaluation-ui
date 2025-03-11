import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";

const WelcomeCard = () => {
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
      <CardContent>
        <Typography sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
          Welcome to CryptoMATE.
        </Typography>
        <Typography variant="body2">
          A simple web-app for Cryptocurrency Technical Analysis.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
