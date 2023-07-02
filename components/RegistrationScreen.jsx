import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

export default function RegistrationScreen(params) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.formContainer}>

          <View style={styles.imgWrap}>
            <TouchableOpacity style={styles.addBtn}>
              <ImageBackground
                source={require("../assets/imgs/add.png")}
                resizeMode="cover"
                style={styles.addBtnBg}></ImageBackground>
            </TouchableOpacity>
          </View>

          <Text style={styles.formTitle}>Реєстрація</Text>

          <SafeAreaView>
            <View style={styles.inputWrap}>
              <TextInput
                style={styles.input}
                //onChangeText={onChangeNumber}
                //value=""
                placeholder="Логін"
                placeholderTextColor="#BDBDBD"
                keyboardType="default"
                selectTextOnFocus={false}
              />
            </View>

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
              />
              <Text style={styles.inputText}>Показати</Text>
            </View>

            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText}>Зареєстуватися</Text>
            </TouchableOpacity>

            <Text style={styles.textLink}>Вже є акаунт? Увійти</Text>
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
    paddingTop:92,
    backgroundColor: '#ffffff',
    paddingBottom: 20,
    marginTop:60
  },

    imgWrap: {
      width: 120,
      height: 120,
      backgroundColor: '#F6F6F6',
      position: 'absolute',
      top: -60,
      alignSelf: "center",
      borderRadius: 16,
    },

      addBtn: {
        position: "absolute",
        bottom: 14,
        right: -12,
        width: 25,
        height: 25,
      },

        addBtnBg: {
          flex: 1,
          justifyContent: 'center',
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