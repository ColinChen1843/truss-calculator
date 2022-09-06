import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../images/trussbackground.jpg";

const style = {
  backgroundImage: `url(${image})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "68vh",
  width: "100wh",
  mt: -3,
  mb: 3,
  pt: 25,
};

function HomepageText() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Card sx={style} square={true}>
        <CardContent align="center">
          <Typography variant="h2" sx={{ color: "white" }}>
            ECOR 1046 Truss Calculator
          </Typography>
          <Typography variant="h5" sx={{ color: "white" }}>
            These Caculators can be used to perform the nessecary
          </Typography>
          <Typography variant="h5" sx={{ color: "white" }}>
            calculations in the ECOR 1046 truss project.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            size="large"
            variant="contained"
            sx={{ background: "#00ADB5", "&:hover": { background: "#018D94" } }}
            onClick={scrollToBottom}
          >
            Get Started
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default HomepageText;
