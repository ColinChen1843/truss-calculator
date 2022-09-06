import { useState, React } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

function CalculatorStepper(props) {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [formData, setFormData] = useState({
    span: null,
    roofLength: null,
    trussSpacing: null,
    sjSpacing: null,
    trussHeight: null,
    trussType: null,
    concreteThickness: null,
    roofSnowAccumulation: null,
    deadLoadFactor: 1.25,
    snowLoadFactor: 1.5,
    snowWeight: 3.2,
    concreteWeight: 24,
    rainLoad: 0.4,
    roofInsulation: 0.31,
    steelDeckWeight: 0.1,
    steelDeckHeight: 38,
  });

  const totalSteps = props.steps.length;
  const allStepsCompleted = activeStep === totalSteps - 2;
  const resultsStep = activeStep === totalSteps - 1;

  function back() {
    const newCompleted = completed;
    newCompleted[activeStep] = false;
    setCompleted(newCompleted);
    setActiveStep(activeStep - 1);
  }

  function next() {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep(activeStep + 1);
  }

  const Form = props.inputs[activeStep];

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {props.steps.map((step) => (
          <Step
            sx={{
              "& .MuiStepLabel-root .Mui-completed": {
                color: "#00ADB5",
              },
              "& .MuiStepLabel-root .Mui-active": {
                color: "#00ADB5",
              },
            }}
          >
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Form formData={formData} setFormData={setFormData} />
      <Button
        onClick={back}
        disabled={activeStep === 0}
        variant="text"
        sx={{ color: "#00ADB5" }}
      >
        Back
      </Button>
      {allStepsCompleted ? (
        <Button
          onClick={next}
          variant="text"
          sx={{ color: "#00ADB5", ml: 170 }}
        >
          Submit
        </Button>
      ) : resultsStep ? (
        <></>
      ) : (
        <Button
          onClick={next}
          variant="text"
          sx={{ color: "#00ADB5", ml: 170 }}
        >
          Next
        </Button>
      )}
    </div>
  );
}

export default CalculatorStepper;
