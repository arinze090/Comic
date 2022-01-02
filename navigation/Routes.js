/* eslint-disable prettier/prettier */
import React from 'react';

import AuthProvider from './AuthProvider';
import RootNavigator from './RootNavigator';

/**
 * Wrap all providers here
 */

const Routes = () => {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
};

export default Routes;
