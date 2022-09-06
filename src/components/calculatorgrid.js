import CalculatorCard from "../components/calculatorcard";
import { Grid } from "@mui/material";
import image1 from "../images/rinkbackground1.jpg";
import image2 from "../images/rinkbackground2.jpg";
import image3 from "../images/rinkbackground3.jpg";

const calculators = [
  {
    title: "Deliverable 2",
    image: image1,
    description: "Calculates the internal forces and HSS members of a truss.",
    url: "/calculator1",
  },
  {
    title: "Deliverable 3",
    image: image2,
    description: "Not Available",
    url: "/calculator2",
  },
  {
    title: "Deliverable 4",
    image: image3,
    description: "Not Available",
    url: "/calculator3",
  },
];

function CalculatorGrid() {
  return (
    <Grid container align="center">
      {calculators.map((calculator) => {
        return (
          <Grid item xs={true}>
            <CalculatorCard
              title={calculator.title}
              image={calculator.image}
              description={calculator.description}
              url={calculator.url}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CalculatorGrid;
