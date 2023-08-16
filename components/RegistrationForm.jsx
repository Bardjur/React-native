import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  Pressable,
  KeyboardAvoidingView
} from "react-native";
import { ValidateEmail } from "../helpers/validate";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";

export default function RegistrationForm({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHiddenPass, setIsHiddenPass] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const dispatch = useDispatch();

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  }

  const checkEmail = () =>{
    email !== '' && !ValidateEmail(email) ? setIsValidEmail(false) : setIsValidEmail(true)
  }

  const handleBtn = () => {
    Keyboard.dismiss();
    if (name === '' || email === '' || password === '' || !ValidateEmail(email)) {
      return
    }

    const formData = {
      name,
      email,
      password
    }

    dispatch(register(formData));
    resetForm();
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.imgWrap}>
        <TouchableOpacity style={styles.addBtn}>
          <ImageBackground
            source={require("../assets/imgs/add.png")}
            resizeMode="cover"
            style={styles.addBtnBg}></ImageBackground>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Text style={styles.formTitle}>Реєстрація</Text>

        <SafeAreaView>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              onChangeText={(e) => {setName(e)}}
              value={name}
              type="email"
              placeholder="Логін"
              placeholderTextColor="#BDBDBD"
              keyboardType="default"
              selectTextOnFocus={false}
            />
          </View>

          <View style={styles.inputWrap}>
            <TextInput
              style={{
                ...styles.input,
                borderColor: isValidEmail ? "#E8E8E8" : "red",
              }}
              onChangeText={(e) => {setEmail(e)}}
              onEndEditing={checkEmail}
              value={email}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
              keyboardType="email-address"
            />
            {!isValidEmail && <Text style={styles.inputError}>некоректний email</Text>}
          </View>

          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              onChangeText={(e) => {setPassword(e)}}
              value={password}
              secureTextEntry={isHiddenPass}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              keyboardType="default"
            />
            <Pressable style={styles.inputTextBtn} onPress={() => {setIsHiddenPass(!isHiddenPass)}}>
                <Text style={styles.inputText}>{isHiddenPass ? 'Показати' : 'Приховати'}</Text>
            </Pressable>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleBtn}>
            <Text style={styles.buttonText}>Зареєстуватися</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {navigation.navigate('Login')} }>
          <Text style={styles.textLink}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({

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
    top: -62,
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

  inputTextBtn: {
    position: "absolute",
    right: 16,
  },

  inputText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#1B4371",
  },

  inputError: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "red",
    position: "absolute",
    left:15,
    bottom:1
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