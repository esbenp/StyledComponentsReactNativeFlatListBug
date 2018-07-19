import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import styled from 'styled-components/native'

class Test extends Component {
  state = {
    rows: []
  }

  componentDidMount() {
    this.setState({
      rows: test
    })
  }

  render() {
    const { rows } = this.state

    return (
      <Container>
        <FlatList
          data={rows}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </Container>
    )
  }

  _renderItem = ({ item: row, index }) => {
    return (
      <EventContainer>
        <Text>YO</Text>
      </EventContainer>
    )
  }

  _keyExtractor = (row) => {
    return row.id.toString()
  }
}

export default Test

const Container = styled.View`
  backgroundColor:black;
  flex:1;
`

const EventContainer = styled.View`
  backgroundColor:green;
  flex:1;
`

const EventContainerNative = ({ children }) => <View style={{backgroundColor: 'green', flex: 1}}>{ children }</View>

const test = []
for(var i = 0; i <= 100; i++) {
  test.push({
    id: i,
    label: 'yo'
  })
}
