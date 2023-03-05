import { Box, Button, IconButton, Typography, AppBar, Toolbar, Link } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";


const LandingPage = ({ onScrollClick }) => {
  return (    
    
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("/images/test.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: "bold", marginBottom: "30px" }}>
          Newborn Again
        </Typography>
        <Typography variant="h4" sx={{width: "70%", textAlign: "center"}}>A site for past, current, and future mothers to lend a hand to one another through donations.</Typography>
        <Button 
          href="/browse"
          variant="contained"
          size="large"
          sx={{
            borderRadius: "10px",
            mt: "100px",
            fontSize: "25px",
            textTransform: "none",
            backgroundColor: "#E3E9FC",
            border: "solid 2px black",
            color: "black",
            boxShadow: "none",
            ":hover": {
              bgcolor: "#A8D0E5",
              border: "solid 2px #A8D0E5",
              color: "white",
              boxShadow: "none",
          }}}
        >
          START BROWSING
        </Button>
        <IconButton
          aria-label="continue"
          size="small"
          sx={{ position: "absolute", bottom: 30 }}
          onClick={onScrollClick}
        >
          <ExpandMoreIcon style={{ fontSize: "60px"}} />
        </IconButton>
      </Box>
    </Box>
    
  );
};

export default LandingPage;
