import React, { Component } from 'react';
import { StyleSheet, Text, View, AppState } from 'react-native';
import { WebView } from 'react-native-webview';
import ReactNativeComponentTree from 'react-native';

// ...
export default class MyWebComponent extends Component {
    componentDidMount() {
        // window.addEventListener("click", this.handleClick, false)
        AppState.addEventListener("change", function (params) {
            console.log(AppState.currentState); // (active/background) for page changes
            // (inactive) for ios
        });
    }

    handleClick(e) {
        try {
            // click names
            // console.log(e._targetInst.child.memoizedProps)
            // console.log(ReactNativeComponentTree.getInstanceFromNode(e.currentTarget));
            console.log(e)
            
        } catch (error) {
            console.log("catch");
            console.log(error)
        }
    }

    render() {
        console.log(this.props);
        return <WebView
        ref={(r) => {this.webref = r}}
        originWhitelist={['*']}
        url={{ uri: 'http://unireply.com/andy.html' }}
        source={{ uri: 'http://unireply.com/andy.html' }}
        style={styles.visible}
        onError={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
        }}
        domStorageEnabled={true}
        javaScriptCanOpenWindowsAutomatically={true}
        mixedContentMode={"compatibility"}
        thirdPartyCookiesEnabled={true}
        allowsFullscreenVideo={true}
        allowsInlineMediaPlayback={false}
        dataDetectorTypes={['all']}
        directionalLockEnabled={false}
        geolocationEnabled={false}
        keyboardDisplayRequiresUserAction={true}
        allowsBackForwardNavigationGestures={true}
        allowFileAccess={true}
        cacheMode={"LOAD_NO_CACHE"}
        pagingEnabled={true}
        allowsLinkPreview={true}
        sharedCookiesEnabled={true}
        textZoom={100} />;
    }

    setEvent(name) {
        console.log("got to setevent")
        this.webref.injectJavaScript(`fibo.setEvent("${name}")`);
    }
}

const styles = StyleSheet.create({
    visible: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "transparent",
        flex: 1,
        zIndex: 999999
    },
    hidden: {
        position: "absolute",
        height: 0,
        width: 0,
        backgroundColor: "transparent",
        flex: 0,
    }
});