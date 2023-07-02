import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

export default function LoginScreen(params) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.formContainer}>

          <Text style={styles.formTitle}>Увійти</Text>

          <SafeAreaView>
            <View style={styles.inputWrap}>
              <TextInput
                style={styles.input}
                //onChangeText={onChangeNumber}
                //value=""
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#BDBDBD"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputWrap}>
              <TextInput
                style={styles.input}
                //onChangeText={onChangeNumber}
                //value=""
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                keyboardType="default"
                secureTextEntry={true}
              />
              <Text style={styles.inputText}>Показати</Text>
            </View>

            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>

            <Text style={styles.textLink}>Немає акаунту? Зареєструватися</Text>
          </SafeAreaView>

        </View>
        </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  formContainer: {
    paddingTop:32,
    backgroundColor: '#ffffff',
    paddingBottom: 20,
  },

  formTitle: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 32,
  },

  inputWrap: {
    marginHorizontal: 16,
    marginBottom: 16,
    justifyContent: "center",
  },

  input: {
    padding: 16,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#212121",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },

  inputText: {
    position: "absolute",
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#1B4371",
    right: 16,
  },

  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginHorizontal: 16,
    marginTop: 27,
    marginBottom: 16,
  },

  buttonText: {
    padding: 16,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#FFFFFF",
    textAlign: "center",
  },

  textLink: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto",
  }
})