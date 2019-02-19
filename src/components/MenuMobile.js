import React, {Component} from 'react';

class MenuMobile extends Component {
    
    positionRender = () => {
        let position = this.props.position.x - window.innerWidth;
        if (position < 1) {
            console.log("position < 1", position)
            return position
        }
               
        if (position > 1) {
            console.log("position < 1", position)
            return position
        } 

    }

    render(){                
        return (
            <div className="mobileMenu" style={{left: this.positionRender()}}>
                <h2>HELLO I'M HEARE</h2>
            </div>
        )
    }
} 

export default MenuMobile;