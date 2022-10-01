// @flow
import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    +getConstants: () => {|
        packageName: string;
        country: string;
        currentVersion: ?number;
        currentBuildNumber: ?number;
    |};

  }
  
  export default (TurboModuleRegistry.get<Spec>(
    'RNVersionCheck'
    ): ?Spec);