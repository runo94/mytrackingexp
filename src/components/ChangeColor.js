import React, {Fragment, Component} from 'react';

class ChangeColor extends Component {

    constructor(props){
        super()
        this.state = {
            colors: ["green", "red", "blue", "yellow", "purple"],
            hexes: ["#13dd5a", "#ff0000", "#1352dd", "#ffe100"]
        }
    }

    coloresFiltered = () => {
        let filteredColors = this.state.colors.map((color, index) => {
                index++
                return Object.assign({id: index}, {color: color})           
            })            
        
        filteredColors = filteredColors.map((color,index)=> {
            return Object.assign({...color}, {hex: this.state.hexes[index]})              
        })

        return filteredColors.map((color, index)=> {
            return !!color.hex ? <span style={{background: color.hex, display: "inline-block", width: "25px", height: "25px"}}></span> : ''
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