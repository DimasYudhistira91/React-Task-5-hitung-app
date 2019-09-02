import React, { Component } from 'react';
import NavBar from './component/navbar';
import Penghitung from './component/penghitung';
import './App.css';

class App extends Component {
  state = { 
    penghitung: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleTambah = hitung => {
    const penghitung = this.state.penghitung;
    const index = penghitung.indexOf(hitung);
    penghitung[index] = hitung;
    penghitung[index].value++;
    this.setState({penghitung});
  };

  handleKurang = hitung => {
    const penghitung = this.state.penghitung;
    const index = penghitung.indexOf(hitung);
    penghitung[index] = hitung;
    if(penghitung[index].value !== 0) {penghitung[index].value--};
    this.setState({penghitung});
  };
  
  handleReset = () => {
    const penghitung = this.state.penghitung.map(rst => {
      rst.value = 0;
      return rst;
    });
    this.setState({penghitung});
  };

  handleHapus = hitungId => {
    const penghitung = this.state.penghitung.filter(hps => hps.id !== hitungId);
    this.setState({penghitung});
  };

  render() { 
    return ( 
      <React.Fragment>
        <NavBar totalHitung={this.state.penghitung.filter(total => total.value > 0).length}/>
        <main className="container">
          <Penghitung
            penghitung={this.state.penghitung}
            tombolReset={this.handleReset}
            tombolTambah={this.handleTambah}
            tombolKurang={this.handleKurang}
            tombolHapus={this.handleHapus}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;