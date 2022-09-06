import { Typography, AppBar, Toolbar, Link } from "@mui/material";
import icon from "../images/trussicon3.png";

function NavigationToolbar(props) {
  return (
    <div>
      <AppBar
        position="static"
        sx={{ height: 95, background: "#222831", justifyContent: "center" }}
      >
        <Toolbar>
          <img src={icon} height="37" width="55" alt="cool" />
          <Link href="/" underline="none" variant="h5" color="white" sx={{ margin: 1 }}>
            {props.title}
          </Link>
        </Toolbar>
      </AppBar>
      <br />
    </div>
  );
}

export default NavigationToolbar;
