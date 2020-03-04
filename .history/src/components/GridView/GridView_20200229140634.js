import GridView from 'react-native-grid-view';
...
class GridViewClass extends Component {
render() {
    return (
      <ScrollView style={styles.gridScrollView} key={"scrollView"+this.props.parentKey+Math.random()}>
        <GridView
          key={"gridview"+this.props.parentKey}
          items={this.props.gridViewData}
          itemsPerRow={2}
          renderItem={(item, sec, i) => this._renderRow(item, sec, i)}
          style={styles.gridView}
          enableEmptySections={true}
        />
      </ScrollView>
    );
  }
}