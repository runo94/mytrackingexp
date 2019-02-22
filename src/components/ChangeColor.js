import React, {Fragment, Component} from 'react';

class ChangeColor extends Component {

    constructor(){
        super()
        this.state = {
            colors: ["green", "red", "blue", "yellow", "purple"],
            hexes: ["#13dd5a", "#ff0000", "#1352dd", "#ffe100"]
        }
    }

    coloresFiltered = () => {
        
        let filteredColors = [];

        let colorsArray = this.state.colors.map((color, index) => {
                index++
                return Object.assign({id: index}, {color: color})           
            })            
        let hexesArray = this.state.hexes.map((hex, index) => {
            index++
            return Object.assign({id: index}, {hex: hex})           
        })     
        
        return filteredColors = colorsArray.map((color) => {
           return hexesArray.map((hex) => {
                if (color.id === hex.id) {     
                    return <span style={{background: hex.hex, display: "inline-block", width: "25px", height: "25px"}} key={color.id}></span>
                }                 
            })
        })

    }

    render(){
        return(
            <div className="colorWrapper">
                {this.coloresFiltered()}
            </div>
        )
    }
}

export default ChangeColor