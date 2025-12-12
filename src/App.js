import logo from './logo.svg';
import './App.css';
import CommunityMain from './communitypage/CommunityMain';
import { Routes, Route, Link, useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CommunityGeneral from './communitypage/CommunityGeneral';
import CommunityReview from './communitypage/CommunityReview';
import CommunityReport from './communitypage/CommunityReport';
import { useEffect } from 'react';
import CommunityWrite from './communitypage/CommunityWrite';
import CommunityView from './communitypage/CommunityView';
import DataInit from './data/DataInit';

function App() {

  let naviate = useNavigate();
  useEffect(()=> DataInit, [])

  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand onClick={() => { naviate('/') }}>FoodMarket</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link onClick={() => { naviate('/community/main/1') }}>CommunityMain</Nav.Link>
            <Nav.Link onClick={() => { naviate('/info') }}>Info</Nav.Link>
            <Nav.Link onClick={() => { naviate('/help') }}>고객센터</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<CommunityMain />}></Route>
        <Route path="/detail" element={<div><h1>Detail page</h1></div>}></Route>
        <Route path="/info" element={<div><h1>Info page</h1></div>}></Route>
        <Route path="/help" element={<div><h1>hello</h1></div>}></Route>
        <Route path="/community/main/:page" element={<CommunityMain />}></Route>
        <Route path="/community/general/:page" element={<CommunityGeneral />}></Route>
        <Route path="/community/report/:page" element={<CommunityReport />}></Route>
        <Route path="/community/review/:page" element={<CommunityReview />}></Route>
        <Route path="/community/:id" element={<CommunityView />}></Route>
        <Route path="/community/write" element={<CommunityWrite />}></Route>
        
        <Route path="*" element={<div><h1>존재하지 않는 주소입니다.</h1></div>}></Route>
      </Routes >
    </div>
  )
}

export default App;
