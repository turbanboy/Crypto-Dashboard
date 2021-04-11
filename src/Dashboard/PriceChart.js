import highchartsConfig from './HighchartsConfig';
import React from 'react';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';
import HighchartsTheme from './HighchartsTheme';
import ChartSelect from './ChartSelect';
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function(){
    return(
    <AppContext.Consumer>
        {({historical, changeChartSelect}) => 
        <Tile>
            <ChartSelect
            defaultvalue='months'
            onChange = {e => changeChartSelect(e.target.value)}
            >
                <option valie ='days'>Days</option>
                <option valie ='weeks'>Weeks</option>
                <option valie ='months'>Months</option>
            </ChartSelect>
           { historical ? 
           <ReactHighcharts config = {highchartsConfig(historical)}/>
           :<div>Loading Chart</div>}
        </Tile>
        }
    </AppContext.Consumer>
    )
}