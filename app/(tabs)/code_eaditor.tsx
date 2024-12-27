import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const SandboxExample = () => {
  const [code, setCode] = useState("// Write your code here\nconsole.log('Hello, sandbox!');");
  const [output, setOutput] = useState("");

  const handleRunCode = () => {
    const sandboxHTML = `
      <html>
        <body>
          <script>
            (function() {
              try {
                const output = [];
                const console = {
                  log: (...args) => output.push(args.join(' ')),
                  error: (...args) => output.push('Error: ' + args.join(' ')),
                };
                // Execute the user-provided code
                eval(\`${code}\`);
                window.ReactNativeWebView.postMessage(output.join('\\n'));
              } catch (e) {
                window.ReactNativeWebView.postMessage('Error: ' + e.message);
              }
            })();
          </script>
        </body>
      </html>
    `;

    webviewRef?.injectJavaScript(`
      document.open();
      document.write(\`${sandboxHTML}\`);
      document.close();
    `);
  };

  let webviewRef: WebView<{ ref: unknown; onMessage: unknown; style: { display: "none"; }; }> | null;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        multiline
        value={code}
        onChangeText={setCode}
        placeholder="Write JavaScript code here..."
      />
      <Button title="Run Code" onPress={handleRunCode} />
      <Text style={styles.outputLabel}>Output:</Text>
      <Text style={styles.output}>{output}</Text>
      <WebView
        ref={(ref) => (webviewRef = ref)}
        onMessage={(event) => setOutput(event.nativeEvent.data)}
        style={{ display: "none" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  textInput: {
    height: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  outputLabel: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  output: {
    marginTop: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    minHeight: 50,
  },
});

export default SandboxExample;
