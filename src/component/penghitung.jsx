import React, { Component } from 'react';
import SourceHitung from './srcHitung';

class Penghitung extends Component {
  render() {
    const { tombolReset, penghitung, tombolHapus, tombolTambah, tombolKurang } = this.props;
    return ( 
      <div>
        <button
          onClick={tombolReset}
          className="btn btn-success btn-sm m-2">
            Reset
        </button>

        {penghitung.map(hitung =>
          <SourceHitung
            key={hitung.id}
            hapus={tombolHapus}
            tambah={tombolTambah}
            kurang={tombolKurang}
            hitung={hitung}
          />
        )}
      </div>
    );
  }
}
 
export default Penghitung;