import React, {Component, PropTypes} from 'react';
import {
  View,
  ListView
} from 'react-native';

class DataList extends Component {

  /**
   * method: createRowData
   * @param rawData [array]
   * Creates Layout Data needed to create ListView DataSource
    [
      {
        index: [int],
        cells: [array]
      },
      ...
    ]
   */
  createLayoutData(rawData = [], cellsPerRow = 1) {
    const rowsData = [];
    let index = 0;
    let currentRow = [];

    for (let i = 0; i < rawData.length; i++) {
      currentRow.push(rawData[i]);
      if (currentRow.length === cellsPerRow || i === rawData.length) {
        rowsData.push({ index, cells: currentRow });
        currentRow = [];
        index++;
      }
    }
    console.log(rowsData);
    return rowsData;
  }

  /**
   * method: formatDataSource
   * @param layoutData [array]
   * Creates DataSource formatted for ListView comp
   */
  formatDataSource(layoutData = []) {
    const fd = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !==r2});
    // let dataSource = fd.cloneWithRows([this.renderFrameData(this.frameDataFilter)]);
    let dataSource = fd.cloneWithRows(layoutData);
    console.log(dataSource);

    return dataSource;
  }

  /**
   * method: _renderRow
   * @param rowData [array]
   * @param cellComponent [component]
   * Rendering function used to create a row for the list
   * renders the cell in row as cellComponent given
   */
  _renderRow(rowData, CellComponent, rowStyle) {
    console.log(rowData, CellComponent);
    // will need to add param for using rowComponent
    return (
      <View style={rowStyle}>
        {
          rowData.cells.map((cell, i) => {
            return (<CellComponent {...cell} key={i} />);
          })
        }
      </View>
    );
  }

  render() {
    const {
      styles, containerStyle, rowStyle, cellStyle,
      cellComponent, listData, cellsPerRow
    } = this.props;
    // data source creation
    const dataSource = this.formatDataSource( this.createLayoutData(listData, cellsPerRow) );
    return(
      <ListView
        style={styles}
        contentContainerStyle={containerStyle}
        dataSource={dataSource}
        renderRow={(rowData) => this._renderRow(rowData, cellComponent, rowStyle)}
      />
    );
  }
}

export default DataList;
