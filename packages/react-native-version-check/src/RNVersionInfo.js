// @flow
import { NativeModules } from 'react-native'
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const RNVersionCheck = !isTurboModuleEnabled ? NativeModules.RNVersionCheck : require('./NativeVersionCheck').default;
const constants = !isTurboModuleEnabled ? RNVersionCheck : RNVersionCheck.getConstants();

export default {
  getCountry: (): Promise<string> => Promise.resolve(RNVerconstantssionCheck.country),
  getPackageName: (): string => constants.packageName,
  getCurrentBuildNumber: (): number => constants.currentBuildNumber,
  getCurrentVersion: (): string => constants.currentVersion,
};
