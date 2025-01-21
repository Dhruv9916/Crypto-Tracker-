import * as React from "react";
import { useState } from "react";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9", // Custom primary color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid">
          <div>
            {coins.map((item, i) => {
              return (
                <div key={i}>
                  <img src={item.image} />
                  <p>
                    {i + 1}. {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <div>
            {coins.map((item, i) => {
              return (
                <p key={i}>
                  {i + 1}. {item.id}
                </p>
              );
            })}
          </div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
