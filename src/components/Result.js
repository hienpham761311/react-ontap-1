import React, {Component} from 'react';

class Result extends Component {
	

	setStyle(){
		return {
			backgroundColor : this.props.color,
            fontSize : this.props.fontSize
		};
	}
    render(){
        return (
            <div className="row mt-4 mr-2 ml-2">
                <p className="col-12 p-2 mb-2 text-white"
                	style={this.setStyle()}
                >this is result</p>
            </div>
                );
            }
  
        }

export default Result;
