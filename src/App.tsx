import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchFlightScreen from "./screens/SearchFlightScreen/SearchFlightScreen";
import InfoFlightScreen from "./screens/InfoFlightScreen/InfoFlightScreen";

function App() {
  return (
    <Router>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/avia' element={<SearchFlightScreen />} />
            <Route path='/avia/info' element={<InfoFlightScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
