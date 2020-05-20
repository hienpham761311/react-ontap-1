import React, {Component} from 'react';
import ColorPicker from './components/ColorPicker';
import FontSize from './components/FontSize';
import Result from './components/Result';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            color : 'red',
            fontSize : 15
        };
    }
    onSetColor = (params) => {
        this.setState({
            color : params
        })
    }
    onSetFontSize = (fs) =>{
        this.setState({
            fontSize : fs
        })
    }
    

    render(){
        return (
            <div className="container">
                <div className="row p-2 mt-4">
                    <div className="col-sm-6">
                        <ColorPicker
                            color = {this.state.color}
                            onReceiveColor={this.onSetColor}
                         />
                    </div>
                    <div className="col-sm-6">
                        <FontSize
                            fontSize = {this.state.fontSize}
                            setFontSize = { this.onSetFontSize }
                         />
                    </div>
                </div>
                <Result
                    color = {this.state.color}
                    fontSize = {this.state.fontSize}
                 />
            </div>
                );
            }
  
        }

export default App;
