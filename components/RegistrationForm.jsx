import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  Pressable,
  KeyboardAvoidingView
} from "react-native";
import { ValidateEmail } from "../helpers/validate";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";
import UserPhoto from "./UserPhoto";

export default function RegistrationForm({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);
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
      <UserPhoto style={styles.avatar} photo={photo} setPhoto={setPhoto}/>

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
  avatar: {
    position: 'absolute',
    top: -60,
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