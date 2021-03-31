import { Component } from "react";
import {AppContext, AppProvider} from '../App/AppProvider';

export default function Welcome(props) {
    return (
      <AppContext.Consumer>
        {({firstVisit}) =>
          firstVisit ? <div> Welcome to The CryproScreener, please select your favoite coins to begin. {' '}
          </div> :null     
        }
      </AppContext.Consumer>

    );

    
  };