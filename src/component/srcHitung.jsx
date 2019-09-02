import React, { Component } from 'react';

class SourceHitung extends Component {
  render() { 
    return ( 
      <div>
        <span className={this.kotakAngka()}>{this.formatHitung()}</span>
        <button
          onClick={() => this.props.tambah(this.props.hitung)}
          className="btn btn-secondary btn-sm">
            +
        </button>
        <button
          onClick={() => this.props.kurang(this.props.hitung)}
          className="btn btn-secondary btn-sm">
            -
        </button>
        <button
        onClick={() => this.props.hapus(this.props.hitung.id)}
        className="btn btn-danger btn-sm m-2">
          Hapus
        </button>
      </div>
    );
  }
  kotakAngka() {
    let kotak = "";
    kotak += this.props.hitung.value === 0 ? "badge m-2 badge-warning" : "badge m-2 badge-primary";
    return kotak;
  }
  
  formatHitung() {
    const { value } = this.props.hitung;
    return value === 0 ? "kosong" : value;
  }
}

export default SourceHitung;