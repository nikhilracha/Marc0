import React from 'react';
import SearchBar from 'react-native-search-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const Location = () => (
    <SafeAreaView>
        <SearchBar
  ref="searchBar"
  placeholder="Search"
  onChangeText={...}
  onSearchButtonPress={...}
  onCancelButtonPress={...}
/>

    </SafeAreaView>
);