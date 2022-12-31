import { Container, CssBaseline } from "@mui/material";
import { Box } from "@mui/material";
import Header from "./components/header";
import LocationCards from "./components/locationCards";
import NavigationTabs from "./components/tabs";

function App() {
  return (
    <CssBaseline>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Box>
          <Header />
          <NavigationTabs />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            overflowY: "scroll",
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
          </Container>
        </Box>
      </Box>
    </CssBaseline>
  );
}

export default App;
