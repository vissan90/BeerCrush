import React, { Component } from 'react';

import Beer from '../Beer/Beer';
import classes from './Tiles.module.css'

class Tiles extends Component{
    render(){
        return(
            <div className={classes.Tile}
                onMouseUp={this.props.dropTile}
                onMouseDown={this.props.dragTile}
                >
                    <Beer 
                        type={this.props.type} 
                        position={this.props.position}
                    />
            </div>
        )
    }
}

export default Tiles;