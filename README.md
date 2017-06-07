SETUP
=====

## Requirements

Before you get started, make sure you have the following dependencies installed on your machine:

- [NodeJS](https://nodejs.org) `>=5` and `npm 3`. **npm 2 is not supported.**
- [Homebrew](http://brew.sh/) (or an alternative way to install OSX packages)
- Latest React Native CLI

          $ npm install -g react-native-cli

## Installation

Install dependencies

    $ npm install
    $ react-native link

### Running the iOS application

1. Install Requirements:

  - Xcode for iOS development (download from Mac App Store)
  - [Ruby](https://www.ruby-lang.org) (>2.2) to run CocoaPods
  - [CocoaPods](https://cocoapods.org/) 1.0 or newer for iOS package management.

**Please note that CocoaPods 0.x will not work, and at the time of writing the version in Homebrew is still 0.39, so check your `pod --version` and install 1.0 with `gem` if necessary.**

2. Install native iOS dependencies

        $ (cd ios; pod init; pod repo update; pod install)

3. Build the app and run the simulator via react-native:

        $ react-native run-ios

**In the case, that this error `Print: Entry, ":CFBundleIdentifier", Does Not Exist` occurs on build, you may need to run `react-native upgrade` to run the latest version of react-native.**

4. Build the app and run on an iPhone via xcode:

1. Open `ios/T7Chicken.xcworkspace` with Xcode
2. Plug in your device via USB cable
3. Change 'Iphone 7Plus' to your device
4. Click **View->Navigators->Project Navigator**
5. Scroll down to 'Signing' and add a signature. You will need an Apple developer account.
6. Click the 'Play' button to build and run on your device

[More Information on running on a device](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/LaunchingYourApponDevices/LaunchingYourApponDevices.html)

**If you see a linker error when trying to build the app, close the project and make sure you open the .xcworkspace file and not the .xcodeproj file**

### Running the Android application

More details here: [React Native Android Setup](https://facebook.github.io/react-native/docs/android-setup.html)

1. Install latest JDK

    ```
$ brew update
$ brew upgrade
$ brew cask install java
$ brew install gradle
    ```

2. Install the Android SDK

          $ brew install android-sdk

3. Set ANDROID_HOME environment variable in .bashrc, .zshrc or similar:

          $ export ANDROID_HOME=/usr/local/opt/android-sdk

4. Start Android SDK Manager

          $ android

5. Add SDK tools via Android sdk manager

  - Android SDK tools
  - Android SDK Platform-tools
  - Android SDK Build-tools (**Important**: Rev. 23.0.1)
  - SDK Platform
  - Intel x86 Atom_64 System Image
  - Intel x86 Atom System Image
  - Android Support Repository
  - Android Support Library
  - Intel x86 Emulator Accelerator (HAXM installer)
  - Android Studios

6. Configure and install hardware acceleration

          $ open /usr/local/opt/android-sdk/extras/intel/Hardware_Accelerated_Execution_Manager/IntelHAXM_<version>.dmg

7. Open Android Virtual Device manager

          $ android avd

8. Add new virtual device

  - name: reactnative
  - Device: Nexus 5
  - Target: Android 6 - API Level 23
  - CBU: Intel Atom x86
  - check Use Host GPU

9. Run Android Studios

  - You will need to open the project's `/android` directory which will then have Android Studios configure the 'gradle' files in the project. These files are crucial to building the project for android testing.

10. Build app and run emulator:

        $ react-native run-android

### Contributing
Feel free to clone or fork this repo if you'd like to make any changes. `master branch` is the working branch, `develop` is used for any changes. Make a branch off of `develop`, once you confirm that your changes are good to go submit the Pull Request to `develop`. From there we will merge into master after review.
