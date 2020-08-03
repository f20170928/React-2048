import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Board/>
    </div>
  );
}

function Grid(props){
  let tileType="grid "+"tile"+props.value;
  if(props.value == null || props.value<=64){
    return(
      <div className={tileType}>
        {props.value}
      </div>
    );
  }
  else{
      return(
        <div className='grid tilex'>
          {props.value}
        </div>);
  }
  
}

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state={
      grids:Array(16).fill(null),
      score: 0,
      history: Array(),
      historyScore: Array(),
    }
     //Random Tile Genration
     let firstTile = Math.floor(Math.random()*16);
     let secondTile= Math.floor(Math.random()*16);
     while(secondTile == firstTile){
       secondTile= Math.floor(Math.random()*16);
     }
     this.state.grids[firstTile] = 2;
     this.state.grids[secondTile] = 2;
  }

  restart(){
    let resetGridState=Array(16).fill(null);
    let firstTile = Math.floor(Math.random()*16);
    let secondTile= Math.floor(Math.random()*16);
    while(secondTile == firstTile){
      secondTile= Math.floor(Math.random()*16);
    }
    resetGridState[firstTile] = 2;
    resetGridState[secondTile] = 2;

    this.setState({grids:resetGridState,score:0,history:Array(),historyScore:Array()});

  }

  undo(){
    let undoHistory = this.state.history.slice();
    let undoScore = this.state.historyScore.slice();

    if(undoHistory.length > 0){
      let currenState = undoHistory.pop();
      let currentScore = undoScore.pop();
      this.setState({grids:currenState,score:currentScore,history:undoHistory,historyScore:undoScore});
    }
  }

  renderGrid(i){
    return <Grid value={this.state.grids[i]}/>
  }

  indexCalc(row,col){
    return row*4+col;
  }

  randomNullPostionGen(grid){
    let nullPos = new Array();
    for(let i=0;i<4;i++){
      if(grid[i] == null){
        nullPos.push(i);
      }
      if(grid[12+i] == null){
        nullPos.push(12+i);
      }
    }
    if(grid[4] == null){
      nullPos.push(4);
    }
    if(grid[7] == null){
      nullPos.push(7);
    }
    if(grid[8] == null){
      nullPos.push(8);
    }
    if(grid[11] == null){
      nullPos.push(11);
    }
    if(nullPos.length == 1){
      return null;
    }
    else{
    return nullPos[Math.floor(Math.random()*nullPos.length)];
    }

  }

  onUp(){
    let newGridsState = this.state.grids.slice();
    let score = this.state.score;
    
    for(let col=0;col<4;col++){
      for(let row=0;row<4;row++){
        if(newGridsState[this.indexCalc(row,col)] != null){
          for(let row2=row+1;row2<4;row2++){
            if(newGridsState[this.indexCalc(row2,col)] != null){
              if(newGridsState[this.indexCalc(row,col)] == newGridsState[this.indexCalc(row2,col)]){
                newGridsState[this.indexCalc(row,col)] *= 2;
                score += newGridsState[this.indexCalc(row,col)];
                newGridsState[this.indexCalc(row2,col)] = null;
              }
              break;
            }
          }
        }
      }
    }

    for(let col=0;col<4;col++){
      for(let row=0;row<4;row++){
        if(newGridsState[this.indexCalc(row,col)] == null){
          for(let row2=row+1;row2<4;row2++){
            if(newGridsState[this.indexCalc(row2,col)] != null){
              newGridsState[this.indexCalc(row,col)] = newGridsState[this.indexCalc(row2,col)];
              newGridsState[this.indexCalc(row2,col)] = null;
              break;
            }
          }
        }
      }
    }
    let randomIndex = this.randomNullPostionGen(newGridsState);
    if(randomIndex == null){
      this.restart();
    }
    else{
      newGridsState[randomIndex] = 2;
    }
    let newHistory = this.state.history;
    let newScoreHistory = this.state.historyScore;
    newHistory.push(this.state.grids.slice());
    newScoreHistory.push(score);
    this.setState({grids : newGridsState, score:score,history:newHistory,historyScore:newScoreHistory});
    
  }

  onDown(){
    let newGridsState = this.state.grids.slice();
    let score = this.state.score;

    for(let col=3;col>=0;col--){
      for(let row=3;row>=0;row--){
        if(newGridsState[this.indexCalc(row,col)] != null){
          for(let row2=row-1;row2>=0;row2--){
            if(newGridsState[this.indexCalc(row2,col)] != null){
              if(newGridsState[this.indexCalc(row,col)] == newGridsState[this.indexCalc(row2,col)]){
                newGridsState[this.indexCalc(row,col)] *= 2;
                score += newGridsState[this.indexCalc(row,col)];
                newGridsState[this.indexCalc(row2,col)] = null;
              }
              break;
            }
          }
        }
      }
    }

    for(let col=3;col>=0;col--){
      for(let row=3;row>=0;row--){
        if(newGridsState[this.indexCalc(row,col)] == null){
          for(let row2=row-1;row2>=0;row2--){
            if(newGridsState[this.indexCalc(row2,col)] != null){
              newGridsState[this.indexCalc(row,col)] = newGridsState[this.indexCalc(row2,col)];
              newGridsState[this.indexCalc(row2,col)] = null;
              break;
            }
          }
        }
      }
    }
    let randomIndex = this.randomNullPostionGen(newGridsState);
    if(randomIndex == null){
      this.restart();
    }
    else{
      newGridsState[randomIndex] = 2;
    }

    let newHistory = this.state.history;
    let newScoreHistory = this.state.historyScore;
    newHistory.push(this.state.grids.slice());
    newScoreHistory.push(score);
    this.setState({grids : newGridsState, score:score,history:newHistory,historyScore:newScoreHistory});
  }

  onLeft(){
    let newGridsState = this.state.grids.slice();
    let score = this.state.score;

    for(let row=0;row<4;row++){
      for(let col=0;col<4;col++){
        if(newGridsState[this.indexCalc(row,col)] != null){
          for(let col2=col+1;col2<4;col2++){
            if(newGridsState[this.indexCalc(row,col2)] != null){
              if(newGridsState[this.indexCalc(row,col)] == newGridsState[this.indexCalc(row,col2)]){
                newGridsState[this.indexCalc(row,col)] *= 2;
                score += newGridsState[this.indexCalc(row,col)];
                newGridsState[this.indexCalc(row,col2)] = null;
              }
              break;
            }
          }
        }
      }
    }

    for(let row=0;row<4;row++){
      for(let col=0;col<4;col++){
        if(newGridsState[this.indexCalc(row,col)] == null){
          for(let col2=col+1;col2<4;col2++){
            if(newGridsState[this.indexCalc(row,col2)] != null){
              newGridsState[this.indexCalc(row,col)] = newGridsState[this.indexCalc(row,col2)];
              newGridsState[this.indexCalc(row,col2)] = null;
              break;
            }
          }
        }
      }
    }
    let randomIndex = this.randomNullPostionGen(newGridsState);
    if(randomIndex == null){
      this.restart();
    }
    else{
      newGridsState[randomIndex] = 2;
    }

    let newHistory = this.state.history;
    let newScoreHistory = this.state.historyScore;
    newHistory.push(this.state.grids.slice());
    newScoreHistory.push(score);
    this.setState({grids : newGridsState, score:score,history:newHistory,historyScore:newScoreHistory});
    
  }

  onRight(){
    let newGridsState = this.state.grids.slice();
    let score = this.state.score;
    
    for(let row=3;row>=0;row--){
      for(let col=3;col>=0;col--){
        if(newGridsState[this.indexCalc(row,col)] != null){
          for(let col2=col-1;col2>=0;col2--){
            if(newGridsState[this.indexCalc(row,col2)] != null){
              if(newGridsState[this.indexCalc(row,col)] == newGridsState[this.indexCalc(row,col2)]){
                newGridsState[this.indexCalc(row,col)] *= 2;
                score += newGridsState[this.indexCalc(row,col)];
                newGridsState[this.indexCalc(row,col2)] = null;
              }
              break;
            }
          }
        }
      }
    }

    for(let row=3;row>=0;row--){
      for(let col=3;col>=0;col--){
        if(newGridsState[this.indexCalc(row,col)] == null){
          for(let col2=col-1;col2>=0;col2--){
            if(newGridsState[this.indexCalc(row,col2)] != null){
              newGridsState[this.indexCalc(row,col)] = newGridsState[this.indexCalc(row,col2)];
              newGridsState[this.indexCalc(row,col2)] = null;
              break;
            }
          }
        }
      }
    }
    let randomIndex = this.randomNullPostionGen(newGridsState);
    if(randomIndex == null){
      this.restart();
    }
    else{
      newGridsState[randomIndex] = 2;
    }

    let newHistory = this.state.history;
    let newScoreHistory = this.state.historyScore;
    newHistory.push(this.state.grids.slice());
    newScoreHistory.push(score);
    this.setState({grids : newGridsState, score:score,history:newHistory,historyScore:newScoreHistory});
    
  }


  render(){
    return(
      <div className="game">
        <div className="title-score">
          <div className="title">2048</div>
          <div className="score">Score:{this.state.score}</div>
          <button className="reset-button" onClick={()=>this.restart()}>Restart</button>
          <button className="undo-button" onClick={()=>this.undo()}>⟲</button>
        </div>
        <div className="board">
          <div className="row">
            {this.renderGrid(0)}
            {this.renderGrid(1)}
            {this.renderGrid(2)}
            {this.renderGrid(3)}
          </div>
          <div className="row">
            {this.renderGrid(4)}
            {this.renderGrid(5)}
            {this.renderGrid(6)}
            {this.renderGrid(7)}
            </div>    
          <div className="row">
            {this.renderGrid(8)}
            {this.renderGrid(9)}
            {this.renderGrid(10)}
            {this.renderGrid(11)}
            </div>    
          <div className="row">
            {this.renderGrid(12)}
            {this.renderGrid(13)}
            {this.renderGrid(14)}
            {this.renderGrid(15)}
            </div>          
        </div>
        <div className="controls">
          <div className="row">
            <button className="up btn" onClick={()=>this.onUp()}>↑</button>
          </div>
          <div className="row">
            <button className="left btn" onClick={()=>this.onLeft()}>←</button>
            <button className="down btn" onClick={()=>this.onDown()}>↓</button>
            <button className="right btn" onClick={()=>this.onRight()}>→</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
