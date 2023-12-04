import { useState } from 'react';
import './App.css';
import Tabss from './components/tabs';
import Display from './components/display';

function App() {
  const tabsArray = [ 
    {title : 'tab1 ' , content : 'Tab 1 content is showing'},
    {title : 'Tab2 ', content : 'Tab2 content is showing'},
    {title : 'Tab3', content : 'Tab3 content is showing'},
    {title : 'Tab4', content : 'Tab4 content is showing'}, 
  ];
    const [allTabs, setAllTabs] = useState(tabsArray);

    const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <div className="App">
      <Tabss
      allTabs = {allTabs}
      currentTabIndex = {currentTabIndex}
      setCurrentTabIndex = {setCurrentTabIndex}
      />

      <Display
      allTabs = {allTabs}
      currentTabIndex = {currentTabIndex}
      />
    </div>
  );
}

export default App;
