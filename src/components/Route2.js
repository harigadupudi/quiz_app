import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
import './ques.css'
import "./Mplay.css"

class Route2 extends Component {
    constructor(props) {
        super(props);
        this.inpref = React.createRef();
        this.state = {
            score:0,
            qno:0,
            check:false,
            check1:false,
            qattempetd:0,
            showcomp:false,
            ques:[{
                id:1,
                question:"What kind of component import React from 'react' is?",
                answers:["stateless component","statefull component","pure component","memo component"],
                answer:"stateless component",
            },
            {
                id:2,
                question:"What function allows you to render React content in an HTML page?",
                answers:["React.mount()","ReactDOM.start()","ReactDOM.render()","React.render()"],
                answer:"React.render()",
            },
            {
                id:3,
                question:"Everything in react is a .........",
                answers:["Class"," Module","Package","Component"],
                answer:"Component",
            }
        ]
        }
    }
    validate(e){
        if(((this.state.qno+1)<(this.state.ques.length))){
            if(this.state.ques[this.state.qno].answer === e.target.innerHTML){
                M.toast({
                    html:'Correct answer',
                    displayLength:700,
                    classes: "toast",
                })
                this.setState((prevstate)=>({
                    score:prevstate.score+1,
                    qno:prevstate.qno+1,
                    qattempetd:prevstate.qattempetd+1,
                }))
            }
            else{
                M.toast({
                    html:'Wrong answer',
                    displayLength:700,
                    classes: "toast1",
                })
                this.setState((prevstate)=>({
                    qno:prevstate.qno+1,
                    qattempetd:prevstate.qattempetd+1,
                }))
        }
    }
    else if(((this.state.qno+1)===this.state.ques.length) && (this.state.qattempetd<this.state.ques.length)){
        if(this.state.ques[this.state.qno].answer === e.target.innerHTML){
            M.toast({
                html:'Correct answer',
                displayLength:700,
                classes: "toast",
            })
            this.setState((prevstate)=>({
                score:prevstate.score+1,
                qno:prevstate.qno+0,
                qattempetd:prevstate.qattempetd+1,
            }))
        }
        else{
            M.toast({
                html:'Wrong answer',
                displayLength:700,
                classes: "toast1",
            })
            this.setState((prevstate)=>({
                qno:prevstate.qno+0,
                qattempetd:prevstate.qattempetd+1,
            }))
    }
    }
    } 

    // Function for prev button
    prev(){
        if(this.state.qno === 0){
            this.setState((prevstate) =>({
                qno:prevstate.qno-0,
                
            }))
        }
        else{
            this.setState((prevstate)=>({
                qno:prevstate.qno-1,
                
            }))
        }
    }
    
    //function for next
    next(){
        if(this.state.qno===2){
            this.setState((prevstate)=>({
                qno:prevstate.qno+0,
                
            }))
        }
        else{
            this.setState((prevstate)=>({
                qno:prevstate.qno+1,

            }))
        }
    } 
    
    quit(){
        alert("ended")
    }
    render() {
        return (
            <div className ="main">
                <p className = "queshead" >Question</p>
                <div className ="question" >
                    <span className = "quesno">{this.state.qno+1}/3. </span>
                    <p className ="ques" >{this.state.ques[this.state.qno].question}</p>
                </div>
                
                <div className = "btndiv">
                    {
                        this.state.ques[this.state.qno].answers.map(x =><button key = {x} onClick ={(e)=>this.validate(e)} className="btn">{x}</button>
                         )
                    }
                </div>
                <div className = "foot" >
                    <button onClick = {this.prev.bind(this)} className ="btnf1" disabled ={this.state.check} >Previos</button>
                    <Link className ='btnf2' to ={{pathname:"/1",stats:{score:this.state.score,
                    qa:this.state.qattempetd}}}><button className ='btnf4' onClick={this.quit}>exit</button> </Link>
                    <button onClick = {this.next.bind(this)}  className ="btnf3" disabled = {this.state.check1} >Next</button>
                </div>
                  
            </div>
        )
    }
}

export default Route2

