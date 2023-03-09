import React from "react";
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import LineChart from "./charts/LineChart";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import CommentIcon from "@mui/icons-material/Comment";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigateTo = useNavigate();
  const productButtonClick = (index) => {
    console.log(index);
    if (index === 0) {
      navigateTo("/product");
    }
    if (index === 1) {
      navigateTo("/user");
    }
    if (index === 2) {
      navigateTo("/post");
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {["Products", "Users", "Posts & Comments", "To Do"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    productButtonClick(index);
                  }}
                >
                  <ListItemIcon>
                    {index === 0 ? <CategoryIcon /> : null}
                    {index === 1 ? <PersonIcon /> : null}
                    {index === 2 ? <CommentIcon /> : null}
                    {index === 3 ? <NotificationsActiveIcon /> : null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          paddingLeft: "250px",
          paddingTop: "30px",
          height: "380px",
        }}
      >
        <BarChart />
        <PieChart />
      </Box>
      <div style={{ display: "flex", paddingLeft: "250px" }}>
        <LineChart />
      </div>
    </Box>
  );
}

export default Dashboard;