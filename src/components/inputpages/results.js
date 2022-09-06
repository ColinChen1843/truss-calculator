import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import image from "../../images/trussnaming2.png";

function createData(member, internalForce, hssName) {
  return { member, internalForce, hssName };
}

function Results({ formData, setFormData }) {
  const rows = [];

  //Results
  const labels = [];
  const values = [];
  const hssValues = [];
  const hss = [];
  const names = [];
  // HSS values
  hss[0] = [1030, 17.6];
  hss[1] = [1350, 26.1];
  hss[2] = [1600, 25.1];
  hss[3] = [2010, 30.5];
  hss[4] = [2320, 38.4];
  hss[5] = [2410, 35.8];
  hss[6] = [2790, 35.0];
  hss[7] = [3030, 41.7];
  hss[8] = [3280, 43.2];
  hss[9] = [3620, 54.8];
  hss[10] = [4240, 54.0];
  hss[11] = [4840, 53.1];
  hss[12] = [5210, 70.3];
  hss[13] = [5870, 69.3];
  hss[14] = [6680, 68.4];
  hss[15] = [6180, 75.1];
  hss[16] = [7100, 74.2];
  hss[17] = [7660, 99.9];
  hss[18] = [9090, 99.1];
  hss[19] = [1800, 97.6];
  hss[20] = [7970, 73.4];
  hss[21] = [8230, 91.0];
  hss[22] = [9260, 90.1];
  hss[23] = [9280, 121];
  hss[24] = [9090, 113];
  hss[25] = [10500, 112];
  hss[26] = [11800, 111];
  hss[27] = [12800, 119];
  hss[28] = [14400, 118];

  names[0] = "HSS 51 X 51 X 6.4";
  names[1] = "HSS 76 X 51 X 6.5";
  names[2] = "HSS 76 X 51 X 8.0";
  names[3] = "HSS 89 X 64 X 8.0";
  names[4] = "HSS 102 X 102 X 6.4";
  names[5] = "HSS 102 X 76 X 8.0";
  names[6] = "HSS 102 X 76 X 9.5";
  names[7] = "HSS 127 X 64 X 9.5";
  names[8] = "HSS 127 X 76 X 9.5";
  names[9] = "HSS 152 X 102 X 8.0";
  names[10] = "HSS 152 X 102 X 9.5";
  names[11] = "HSS 152 X 102 X 11";
  names[12] = "HSS 203 X 102 X 9.5";
  names[13] = "HSS 203 X 102 X 11";
  names[14] = "HSS 203 X 102 X 13";
  names[15] = "HSS 203 X 152 X 9.5";
  names[16] = "HSS 203 X 152 X 11";
  names[17] = "HSS 254 X 254 X 8.0";
  names[18] = "HSS 254 X 254 X 9.5";
  names[19] = "HSS 254 X 254 X 13";
  names[20] = "HSS 203 X 152 X 13";
  names[21] = "HSS 254 X 152 X 11";
  names[22] = "HSS 254 X 152 X 13";
  names[23] = "HSS 305 X 305 X 8.0";
  names[24] = "HSS 305 X 203 X 9.5";
  names[25] = "HSS 305 X 203 X 11";
  names[26] = "HSS 305 X 203 X 13";
  names[27] = "HSS 305 X 305 X 11";
  names[28] = "HSS 305 X 305 X 13";
  names[29] = "No Suitable HSS Member";

  //inputs
  const span = formData.span;
  const roofLength = formData.roofLength;
  const trussSpacing = formData.trussSpacing;
  const sjSpacing = formData.sjSpacing;
  const trussHeight = formData.trussHeight;
  const trussType = formData.trussType;
  const concreteThickness = formData.concreteThickness / 1000;
  const roofSnowAccumulation = formData.roofSnowAccumulation / 100;
  const deadLoadFactor = formData.deadLoadFactor;
  const snowLoadFactor = formData.snowLoadFactor;
  const snowWeight = formData.snowWeight;
  const concreteWeight = formData.concreteWeight;
  const rainLoad = formData.rainLoad;
  const roofInsulation = formData.roofInsulation;
  const steelDeckWeight = formData.steelDeckWeight;
  const steelDeckHeight = formData.steelDeckHeight / 1000;

  //Snow Load Calculations
  const snowLoad =
    snowLoadFactor * (snowWeight * roofSnowAccumulation + rainLoad);
  //Roof Component Load Calculations
  const concreteSlab = concreteWeight * (concreteThickness - steelDeckHeight);
  const concreteBetweenFlutes = concreteWeight * (steelDeckHeight / 2);
  const roofComponentLoad =
    deadLoadFactor *
    (steelDeckWeight + roofInsulation + concreteSlab + concreteBetweenFlutes);
  //Important Load Calculations
  const totalLoad = snowLoad + roofComponentLoad;
  const pointLoad = totalLoad * sjSpacing * trussSpacing;
  const numLoads = Math.floor(span / sjSpacing) - 1;
  const reactionForces = (pointLoad * numLoads) / 2;
  const numJoints = numLoads * 2 + 2;
  //Truss Length Calculations
  const diagonalLength = Math.sqrt(
    trussHeight * trussHeight + sjSpacing * sjSpacing
  );
  const xComponent = sjSpacing / diagonalLength;
  const yComponent = trussHeight / diagonalLength;
  console.log(pointLoad);
  let prevDiag = reactionForces / yComponent;
  let prevTop = -1 * prevDiag * xComponent;
  let prevBot = 0;
  let prevVert = 0;

  labels.push("AC");
  labels.push("AB");
  values.push(prevTop);
  values.push(prevDiag);
  hsscomp(-prevTop, 2);
  hsstens(prevDiag);

  let botMember = 0,
    topMember = 0,
    diagMember = 0,
    vertMember = 0;

  function topJoint(jointNum) {
    diagMember = (-1 * prevVert - pointLoad) / yComponent;
    topMember = prevTop - diagMember * xComponent;

    let label1 =
      String.fromCharCode(jointNum + 64) + String.fromCharCode(jointNum + 66);
    let label2 =
      String.fromCharCode(jointNum + 64) + String.fromCharCode(jointNum + 65);

    labels.push(label1);
    labels.push(label2);
    values.push(topMember);
    values.push(diagMember);

    prevDiag = diagMember;
    prevTop = topMember;
  }

  function bottomJoint(jointNum) {
    botMember = prevDiag * xComponent + prevBot;
    vertMember = -1 * prevDiag * yComponent;

    let label1 =
      String.fromCharCode(jointNum + 64) + String.fromCharCode(jointNum + 66);
    let label2 =
      String.fromCharCode(jointNum + 64) + String.fromCharCode(jointNum + 65);

    labels.push(label1);
    labels.push(label2);
    values.push(botMember);
    values.push(vertMember);

    prevBot = botMember;
    prevVert = vertMember;
  }

  function hsstens(F) {
    let index = 29;
    let greatest = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < 29; i++) {
      let resistance = (0.9 * 370.0 * hss[i][0]) / 1000;
      if (resistance > F && resistance < greatest) {
        index = i;
        greatest = resistance;
      }
    }
    hssValues.push(names[index]);
  }

  function hsscomp(F, t) {
    let index = 29;
    let greatest = Number.MAX_SAFE_INTEGER;
    let l = 35.0 / 11.0;
    if (t === 2) {
      l = 2.5;
    }
    l *= 1000;

    for (let i = 0; i < 29; i++) {
      let resistance, f, lambda, oe, o, e;
      o = Math.PI * Math.PI * 200000;
      e = (l / hss[i][1]) * (l / hss[i][1]);
      oe = o / e;
      lambda = Math.sqrt(370 / oe);
      f = 1 / Math.pow(1 + Math.pow(lambda, 2.38), 1.0 / 1.34);

      resistance = 0.9 * f * 370 * hss[i][0];
      resistance /= 1000;

      if (resistance > F && resistance < greatest) {
        index = i;
        greatest = resistance;
      }
    }
    hssValues.push(names[index]);
  }

  // Calculations

  let char = 2;

  for (let i = 2; i <= numJoints / 2 - 1; i++, char++) {
    if (i % 2) {
      topJoint(i);
      hsscomp(-topMember, 2);
      hsstens(diagMember);
    } else {
      bottomJoint(i);
      hsscomp(-vertMember, 1);
      hsstens(botMember);
    }
  }

  let middleMember = prevDiag * yComponent * 2;
  labels.push(String.fromCharCode(char + 64) + String.fromCharCode(char + 65));
  values.push(middleMember);
  hsscomp(middleMember, 1);

  let size = values.length;
  char += 3;
  let memberNum = 1;

  for (let i = 0; i < size - 1; i++) {
    let char1 = char + 64,
      char2 = char + 62,
      char3 = char + 61,
      char4 = char + 65;
    if (i >= size - 3) {
      char1--;
    }
    if (char1 > 90) {
      char1 += 6;
    }
    if (char2 > 90) {
      char2 += 6;
    }
    if (char3 > 90) {
      char3 += 6;
    }
    if (char4 > 90) {
      char4 += 6;
    }
    if (char % 2) {
      if (memberNum) {
        labels.push(String.fromCharCode(char1) + String.fromCharCode(char3));
        memberNum = 0;
      } else {
        labels.push(String.fromCharCode(char1) + String.fromCharCode(char2));
        char--;
        memberNum = 1;
      }
    } else {
      if (memberNum) {
        labels.push(String.fromCharCode(char1) + String.fromCharCode(char4));
        memberNum = 0;
      } else {
        labels.push(String.fromCharCode(char1) + String.fromCharCode(char2));
        char += 3;
        memberNum = 1;
      }
    }
    values.push(values[size - 2 - i]);
    hssValues.push(hssValues[size - 2 - i]);
  }

  for (let i = 0; i < values.length; i++) {
    let add = " (T)";
    if (values[i] < 0) {
      add = " (C)";
      values[i] *= -1;
    }
    rows.push(createData(labels[i], values[i] + add, hssValues[i]));
  }

  return (
    <div>
      <Typography variant="h5" align="center" sx={{ m: 1 }}>
        Results
      </Typography>
        <TableContainer component={Paper} sx={{ width: 700, m: 1 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Truss Member</TableCell>
                <TableCell>Internal Force</TableCell>
                <TableCell>HSS Member</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.member}
                  </TableCell>
                  <TableCell>{row.internalForce}</TableCell>
                  <TableCell>{row.hssName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <img
          src={image}
          alt="Joint Naming Convention"
          height="145px"
          style={{ position: 'fixed' , top: 185, left: 720}}
        />
    </div>
  );
}

export default Results;
