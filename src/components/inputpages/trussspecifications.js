import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import image from "../../images/trusstypes5.png";

function TrussSpecifications({ formData, setFormData }) {
  function handleSpan(event) {
    setFormData({ ...formData, span: event.target.value });
  }
  function handleTrussSpacing(event) {
    setFormData({ ...formData, trussSpacing: event.target.value });
  }
  function handleSJSpacing(event) {
    setFormData({ ...formData, sjSpacing: event.target.value });
  }
  function handleTrussHeight(event) {
    setFormData({ ...formData, trussHeight: event.target.value });
  }
  function handleTrussType(event) {
    setFormData({ ...formData, trussType: event.target.value });
  }
  function handleConcreteThickness(event) {
    setFormData({ ...formData, concreteThickness: event.target.value });
  }
  function handleSnowAccumulation(event) {
    setFormData({ ...formData, roofSnowAccumulation: event.target.value });
  }

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="top"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl sx={{ mr: 5, width: 220 }}>
          <TextField
            id="span"
            label="Span"
            type="number"
            defaultValue={formData.span}
            onChange={handleSpan}
            InputProps={{
              endAdornment: <InputAdornment position="start">m</InputAdornment>,
            }}
          />
          <TextField
            id="spacing-between-trusses"
            label="Trusses Spacing"
            type="number"
            defaultValue={formData.trussSpacing}
            onChange={handleTrussSpacing}
            InputProps={{
              endAdornment: <InputAdornment position="start">m</InputAdornment>,
            }}
          />
          <TextField
            id="spacing-between-steel-joists"
            label="Steel Joist Spacing"
            type="number"
            defaultValue={formData.sjSpacing}
            onChange={handleSJSpacing}
            InputProps={{
              endAdornment: <InputAdornment position="start">m</InputAdornment>,
            }}
          />
        </FormControl>
        <FormControl sx={{ mr: 5, width: 220 }}>
          <TextField
            id="truss-depth"
            label="Truss Depth/Height"
            type="number"
            defaultValue={formData.trussHeight}
            onChange={handleTrussHeight}
            InputProps={{
              endAdornment: <InputAdornment position="start">m</InputAdornment>,
            }}
          />
          <TextField
            id="concrete-thickness"
            label="Concrete Thickness"
            type="number"
            defaultValue={formData.concreteThickness}
            onChange={handleConcreteThickness}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">mm</InputAdornment>
              ),
            }}
          />
          <TextField
            id="snow-accumulation"
            label="Snow Accumulation"
            type="number"
            defaultValue={formData.roofSnowAccumulation}
            onChange={handleSnowAccumulation}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">cm</InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl sx={{ mr: 5, mt: 1, width:220 }}>
          <InputLabel id="truss-type-label">Truss Type</InputLabel>
          <Select
            labelId="truss-type-label"
            id="demo-simple-select"
            value={formData.trussType}
            input={<OutlinedInput label="Truss Type" />}
            onChange={handleTrussType}
          >
            <MenuItem value={"Howe"}>Howe</MenuItem>
            <MenuItem disabled value={"Pratt"}>
              Pratt
            </MenuItem>
            <MenuItem disabled value={"Warren"}>
              Warren
            </MenuItem>
            <MenuItem disabled value={"Warren With Verticals"}>
              Warren With Verticals
            </MenuItem>
            <MenuItem disabled value={"Parker"}>
              Parker
            </MenuItem>
          </Select>
        </FormControl>
        <img src={image} alt="Truss Types" height="250px" />
      </Box>
    </div>
  );
}

export default TrussSpecifications;
