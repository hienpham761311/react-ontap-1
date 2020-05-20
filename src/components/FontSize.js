import React, {Component} from 'react';

class FontSize extends Component {
    // constructor(props){
    //     super(props);
    // };
    up(){
        if(this.props.fontSize<30){
        this.props.setFontSize(this.props.fontSize+1);
    }
        };
    down(){
        if(this.props.fontSize>1)
        this.props.setFontSize(this.props.fontSize-1);
        };    
    render(){
        return (
            <div className="card">
                <div className="col-12 p-2 mb-2 bg-success text-white">
                Size : {this.props.fontSize}
                </div>
                <div className="card-body">
                <div className="row">
                    <button type="button" className="btn btn-success mr-4 ml-4" onClick={() => this.up()}>Up</button>
                    <button type="button" className="btn btn-success mr-4 ml-4" onClick={() => this.down()}>Down</button>
                </div>
                </div>
            </div>
                );
            }
  
        }

export default FontSize;
