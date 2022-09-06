import HomepageText from "../components/homepagetext";
import NavigationToolbar from "../components/navigationtoolbar";
import CalculatorGrid from "../components/calculatorgrid";
import Typography from "@mui/material/Typography";

function HomePage() {
  return (
    <div>
      <NavigationToolbar title="ECOR 1046 Truss Calculator" />
      <HomepageText />
      <Typography variant="h2" align="center">Calculators</Typography>
      <CalculatorGrid />
    </div>
  );
}

export default HomePage;
