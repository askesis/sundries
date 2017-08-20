import React, { Component } from 'react';
import { BrowserRouter,  Route } from 'react-router-dom'
import './App.css';
import TablePlusFilters from './TablePlusFilters';
import FormAdd from './FormAdd';
import { Panel, ButtonToolbar } from 'react-bootstrap';
import Menu from './Menu';
import CounterpartyTables from './Counterparty';
import MenuModal from './MenuModal';

class App extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      to: {
        
        counterparty:'/counterparty',
        root:'/',
        },
      label: {
        
        countreparty:'Counterparty',
        root:'Table',
      }        
    }
  }


  render(){
    const to = this.state.to;
    const label = this.state.label;

    return(
      <BrowserRouter>
        <div>
            <ButtonToolbar>
              <Panel className={"Menu"}>
                <Menu activeOnlyWhenExact={true} to={to.root} label={label.root}/>
                
                <Menu to={to.counterparty} label={label.countreparty}/>
                <MenuModal />
              </Panel>
            </ButtonToolbar>                                            {/* button show here*/}

          <Route exact path={to.root} component={TablePlusFilters}/>
         
          <Route path={to.counterparty} component={CounterpartyTables}/>
        </div>
      </BrowserRouter>
    )
  }
 
}

export default App;