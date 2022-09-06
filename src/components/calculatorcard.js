import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalculatorButton from "./calculatorbutton";

function CalculatorCard(props) {
  return (
    <Card
      sx={{ mt: 2, mb: "38vh", height: "50vh", background: "#393E46" }}
      square={true}
    >
      <CardMedia sx={{ pb: 8, justifyContent: "center" }}>
        <CalculatorButton
          title={props.title}
          image={props.image}
          url={props.url}
        />
      </CardMedia>
      <CardContent>
        <Typography variant="body1" color="white">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ pt: 6.5, justifyContent: "center" }}>
        <Button
          size="medium"
          variant="contained"
          sx={{ background: "#00ADB5", "&:hover": { background: "#018D94" } }}
          href={props.url}
        >
          Calculate
        </Button>
      </CardActions>
    </Card>
  );
}

export default CalculatorCard;
