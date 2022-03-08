import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function RightLanguage() {
   const [age, setAge] = React.useState("");

   const handleChange = (event) => {
      setAge(event.target.value);
   };

   return (
      <div>
         <FormControl variant="standard" sx={{ minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">Translate to</InputLabel>
            <Select
               labelId="demo-simple-select-standard-label"
               id="demo-simple-select-standard"
               value={age}
               onChange={handleChange}
               label="Language"
            >
               <MenuItem value="">
                  <em>None</em>
               </MenuItem>
               <MenuItem value={10}>Ten</MenuItem>
               <MenuItem value={20}>Twenty</MenuItem>
               <MenuItem value={30}>Thirty</MenuItem>
            </Select>
         </FormControl>
      </div>
   );
}
