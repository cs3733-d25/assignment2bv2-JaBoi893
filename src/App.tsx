import './App.css'
import Title from './components/title.tsx'
import {Intro} from './components/intro.tsx'
import Hobby1 from "./components/hobby1.tsx";
import {Hobby2} from "./components/hobby2.tsx";

function App () {
    return (
        <>
            <Title />
            <Intro names={[ "John Perveiler", "Thomas Ricci" ]} />
            <Hobby1 />
            <Hobby2 />
        </>
    )
}

export default App
