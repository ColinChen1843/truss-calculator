import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

function GivenValues({ formData, setFormData }) {
  function handleDeadLoadFactor(event) {
    setFormData({ ...formData, deadLoadFactor: event.target.value });
  }
  function handleSnowLoadFactor(event) {
    setFormData({ ...formData, snowLoadFactor: event.target.value });
  }
  function handleSnowWeight(event) {
    setFormData({ ...formData, snowWeight: event.target.value });
  }
  function handleRainLoad(event) {
    setFormData({ ...formData, rainLoad: event.target.value });
  }
  function handleConcreteWeight(event) {
    setFormData({ ...formData, concreteWeight: event.target.value });
  }
  function handleRoofInsulation(event) {
    setFormData({ ...formData, roodInsulation: event.target.value });
  }
  function handleSteelDeckWeight(event) {
    setFormData({ ...formData, steelDeckWeight: event.target.value });
  }
  function handleSteelDeckHeight(event) {
    setFormData({ ...formData, steelDeckHeight: event.target.value });
  }

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl sx={{ mr: 5, mt: 1, width: 220 }}>
          <TextField
            id="dead-load-factor"
            label="Dead Load Factor"
            type="number"
            defaultValue={formData.deadLoadFactor}
            onChange={handleDeadLoadFactor}
          />
          <TextField
            id="snow-load-factor"
            label="Snow Load Factor"
            type="number"
            defaultValue={formData.snowLoadFactor}
            onChange={handleSnowLoadFactor}
          />
        </FormControl>
        <FormControl sx={{ mr: 5, mt: 1, width: 220 }}>
          <TextField
            id="snow-weight"
            label="Snow Weight"
            type="number"
            defaultValue={formData.snowWeight}
            onChange={handleSnowWeight}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">kN/m^3</InputAdornment>
              ),
            }}
          />
          <TextField
            id="concrete-weight"
            label="Concrete Weight"
            type="number"
            defaultValue={formData.concreteWeight}
            onChange={handleConcreteWeight}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">kN/m^3</InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl sx={{ mr: 5, mt: 1, width: 220 }}>
          <TextField
            id="rain-load"
            label="Rain Load"
            type="number"
            defaultValue={formData.rainLoad}
            onChange={handleRainLoad}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">kPa</InputAdornment>
              ),
            }}
          />
          <TextField
            id="roof-insulation"
            label="Roof Insulation"
            type="number"
            defaultValue={formData.roofInsulation}
            onChange={handleRoofInsulation}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">kPa</InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl sx={{ mr: 5, mt: 1, width: 220 }}>
          <TextField
            id="steel-deck-weight"
            label="Steel Deck Weight"
            type="number"
            defaultValue={formData.steelDeckWeight}
            onChange={handleSteelDeckWeight}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">kPa</InputAdornment>
              ),
            }}
          />
          <TextField
            id="steel-deck-height"
            label="Steel Deck Height"
            type="number"
            defaultValue={formData.steelDeckHeight}
            onChange={handleSteelDeckHeight}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">mm</InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Box>
    </div>
  );
}

export default GivenValues;
