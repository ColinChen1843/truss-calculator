import CalculatorStepper from "../components/calculatorstepper";
import NavigationToolbar from "../components/navigationtoolbar";
import TrussSpecifications from "../components/inputpages/trussspecifications";
import GivenValues from "../components/inputpages/givenvalues";
import Results from "../components/inputpages/results";

const steps = ["Truss Specifications", "Fixed Values", "Results"];
const inputs = [TrussSpecifications, GivenValues, Results];

function CalculatorPage1() {
  return (
    <div>
      <NavigationToolbar title="Deliverable 2 Calculator" />
      <CalculatorStepper steps={steps} inputs={inputs} />
    </div>
  );
}

export default CalculatorPage1;
