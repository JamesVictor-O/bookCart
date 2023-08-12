import React from 'react'
import { ReactDOM } from 'react'
import { NavigationBar } from './component/navBar/navigationBar';
import { DashBoard } from './component/DashBoard.component/dashBoard/dashBoard';

function App() {
  return (
    <div className='flex flex-row m-[30px] rounded-lg'>
      <NavigationBar />
      <DashBoard/>
    </div>
   )
}

export default App
