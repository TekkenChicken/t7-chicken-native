import React, {Component, PropTypes} from 'react';
import {
  View,
  ListView,
  StyleSheet
} from 'react-native';

class DataList extends Component {

  /**
   * method: createRowData
   * @param rawData [array]
   * Creates Layout Data needed to create ListView DataSource
   */
  createLayoutData(rawData = [], cellsPerRow = 1) {
    const layoutData = [];
    let index = 0;
    let currentRow = [];
    for (let i = 0; i < rawData.length; i++) {
      currentRow.push(rawData[i]);
      if (currentRow.length === cellsPerRow || i === rawData.length) {
        layoutData.push({ index, cells: currentRow });
        currentRow = [];
        index++;
      }
    }
    console.log(layoutData);
    return layoutData;
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
    return dataSource;
  }

  /**
   * method: _renderRow
   * @param rowData [array]
   * @param cellComponent [component]
   * Rendering function used to create a row for the list
   * renders the cell in row as cellComponent given
   */
  _renderRow(rowData, CellComponent, rowStyle, cellStyle) {
    // will need to add param for using rowComponent
    return (
      <View style={[styles.row, rowStyle]}>
        {
          rowData.cells.map((cell, i) => {
            return (
              <View style={[styles.cell, cellStyle]} >
                <CellComponent {...cell} key={i} />
              </View>
            );
          })
        }
      </View>
    );
  }

  render() {
    const {
      mainStyle, containerStyle, rowStyle, cellStyle,
      cellComponent, listData, cellsPerRow
    } = this.props;
    // data source creation
    const dataSource = this.formatDataSource( this.createLayoutData(listData, cellsPerRow) );
    return(
      <ListView
        style={mainStyle}
        contentContainerStyle={[styles.container, containerStyle]}
        dataSource={dataSource}
        renderRow={(rowData) => this._renderRow(rowData, cellComponent, rowStyle, cellStyle)}
      />
    );
  }
}

// Initial Styles
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  cell: {
    flex: 1,
    flexGrow: 1,
    flexBasis: 0
  }
});


export default DataList;
