import {Outlet, Link, Route, Routes} from "react-router-dom";
import Game from "./components/Game";

export default function App() {
  return (
     <div>
         <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>

          </li>
          <li>
            <Link to='/game'>Game</Link>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path="/" element ={<Home/>} >
      <Route path="/posts" element={<Post/>}/>
      <Route path="/game" element={<Game/>}/>
      </Route>

      <Route path="/game" element={<Game/>} />
    </Routes>
  </div>
  );
}

function Home() {
  return (
    <>
    <div>Header</div>
    <div>Sidebar</div>
    <Outlet/>
    <div>Footer</div>
    </>
  

  )
}

function Post() {
  return (
    <div>
      My posts
    </div>
  )
}



