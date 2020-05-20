import React, {Component} from 'react';

class ColorPicker extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			colors : ['red','blue','#28a745','yellow']
		};
	};
	showColor(color){
		return {
			backgroundColor : color,
		};
	}
	setActiveColor(color){
		this.props.onReceiveColor(color);
	}

    render(){
    	var elmColor = this.state.colors.map((color,index) =>{
    		return <span  
		    			key={index} 
		    			className={this.props.color === color ? 'p-4 mr-4 ml-4 active' : 'p-4 mr-4 ml-4'} 
		    			style={this.showColor(color)}
		    			onClick={() => this.setActiveColor(color)}
		    		>

	    			</span>
    	});	
        return (
			<div className="card">
				<div className="col-12 p-2 mb-2 bg-success text-white">
					Color Picker
				</div>
				<div className="card-body">
					<div className="row">
						{elmColor}
					</div>
				</div>
			</div>
                );
            }
  
        }

export default ColorPicker;
