import React, { Component } from 'react';

import classes from './Board.module.css'
import Tiles from '../../Component/Tiles/Tiles';


class Board extends Component {
    state = {
        tiles:[
            [1,1],[1,2],[1,3],[1,4],[1,5],
            [2,1],[2,2],[2,3],[2,4],[2,5],
            [3,1],[3,2],[3,3],[3,4],[3,5],
            [4,1],[4,2],[4,3],[4,4],[4,5],
            [5,1],[5,2],[5,3],[5,4],[5,5],
        ],
        dragging:false,
        selectedBeer:[],
        switchBeer:[]
       
    }

    componentDidMount(){
        const tiles = [...this.state.tiles];
        let type = 0;

        for(let tile in tiles){
            type = Math.floor(Math.random() * 5) +1;
            tiles[tile].push(type);
        }
        this.setState({tiles:tiles});
    }
    

    dragBeerHandler = (id) => {
        const index = this.state.tiles.indexOf(id);
        const beer = [...this.state.tiles[index]];
        
        const selectedBeer = [...this.state.selectedBeer];
        selectedBeer.push(beer);
        this.setState({selectedBeer:selectedBeer,dragging:true});

        console.log(this.state.selectedBeer);
    }

    switchBeerHander = (id) => {
   
       if(this.state.dragging){
        const index = this.state.tiles.indexOf(id);
        const droppedBeer = [...this.state.tiles[index]];
        const draggedBeer = [...this.state.selectedBeer]

        console.log("dragged: " + draggedBeer + "dropped: " + droppedBeer );
        
        this.setState({dragging:false});

       } 
      
    }

    render(){

        return (
            <div className={classes.Board}>
                {this.state.tiles.map(tile => {
                    return(
                        <Tiles 
                            key={tile}
                            type={tile[2]}
                            dragTile={(e) => this.dragBeerHandler(tile,e)}
                            dropTile={(e) => this.switchBeerHander(tile,e)}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Board;