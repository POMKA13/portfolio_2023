import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import card from './cardList'

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <main className='wrapper'>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/projects' element={<Projects card={card}/>}/>
                        <Route path='/contacts' element={<Contacts />}/>
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>

    );
}

export default App;
