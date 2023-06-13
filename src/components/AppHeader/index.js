import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ title, refresh }) => (
  <Appbar.Header>
    <Appbar.Content title={title} titleStyle={{fontWeight: '500'}} />
    <Appbar.Action icon="refresh" onPress={() => { refresh() }} />
  </Appbar.Header>
);

export default Header;