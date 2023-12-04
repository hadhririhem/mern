import React , { useState } from 'react'; 
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Display from './display';

const Tabss = (props) => {
    const {allTabs, currentTabIndex, setCurrentTabIndex} = props;

    const setSelectedTab = (index ) => {
        setCurrentTabIndex(index)
    }
    const handlesubmit =(e) => {
        e.preventDefault();
    }; 

    return (
        <div>
            { allTabs.map( (item,index) => (
                <div style={{display : "inline-block"}} onClick={(e) => setSelectedTab(index) }>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                <Tab eventKey= {item.title} title={item.title}>
                </Tab>
                </Tabs>
                </div> 
            ))}
        </div>
    )

}

export default Tabss; 