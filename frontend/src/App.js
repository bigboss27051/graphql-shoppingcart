
import React from "react"
import { RecoilRoot } from "recoil"
import recoilPersist from "recoil-persist"
import './App.css'
import Layout from './components/Layout'

function App() {
  const { RecoilPersist, updateState } = recoilPersist(["cartHoldState", "authenState"], {
    key: "recoil-persist", 
    storage: localStorage, 
  })

  return (
    <RecoilRoot initializeState={updateState}>
      <RecoilPersist />
      <Layout />
    </RecoilRoot>

  );
}

export default App;
