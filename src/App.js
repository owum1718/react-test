import { TextField } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 id="title">Amistee</h1>

      <form>
        <div>
          <select>
            <option value="Service Needed">Service Needed </option>
            <option value="Service Needed">
              Residential Air Duct Cleanaing{" "}
            </option>
            <option value="Service Needed">
              Commercial Air Duct Cleanaing
            </option>
            <option value="Service Needed">Insulation </option>
            <option value="Service Needed">
              Duct Sealing Powered By Aeroseal&reg;
            </option>
            <option value="Service Needed">
              Duct Lining Powered By Duct Armor&reg;{" "}
            </option>
          </select>
        </div>
        <div>
          <TextField
            placeholder="First Name"
            id="outlined-basic"
            variant="outlined"
            size="small"
          />

          <TextField
            placeholder="Last Name"
            id="outlined-basic"
            variant="outlined"
            size="small"
          />
        </div>
        <div>
          <TextField placeholder="Zip*" size="small"></TextField>
          <TextField placeholder="city*" size="small"></TextField>
          <TextField placeholder="State*" size="small"></TextField>
        </div>
        <div>
          <TextField cols="30" rows="10" placeholder="Address*"></TextField>
        </div>
        <div>
          <TextField placeholder="Phone*" size="small"></TextField>
          <TextField placeholder="email*" size="small"></TextField>
        </div>
        <div>
          <TextField placeholder="How did you first hear about Amistee?*"></TextField>
        </div>

        <div>
          <select>
            <option value="" key="">
              Are you re-scheduling an existing appointment?{" "}
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div>
          <select>
            <option value='' key=''> 
            placeholder="Approx.Sq. Footage of Living Space(Not Including Basement"</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default App;
