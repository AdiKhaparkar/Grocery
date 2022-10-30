import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Email from 'react-native-vector-icons/Fontisto';
import  Icon from 'react-native-vector-icons/AntDesign'; 
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addUser} from '../../redux/action/Action';
import styles from '../LoginScreen/styles';
import FormContainer from '../../componentReuse/FormInput';
import auth from '@react-native-firebase/auth';
import imagePath from '../../config/Image';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [validation, setValidation] = useState({
    emailError: '',
    passwordError: '',
  });
  const datafetch = useSelector(state => state.userInfo.loginpage);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  validateEmail = email => {
    var rejx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return rejx.test(email);
  };

  validatePassword = userPassword => {
    var rejx =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return rejx.test(userPassword);
  };

  const emailValidator = () => {
    email == '' || !validateEmail(email)
      ? setValidation({
          emailError: 'please enter a valid email (eg: A@123@Indianic.com)',
        })
      : setValidation({emailError: ''});
  };

  const passwordValidator = () => {
    userPassword == '' || !validatePassword(userPassword)
      ? setValidation({
          passwordError: 'please enter a valid password ',
        })
      : setValidation({passwordError: ''});
  };

  const dispatchCredentials = async () => {
    //dispatch(addUser( email, userPassword ));
    try {
      const userRes =await auth().signInWithEmailAndPassword(email, userPassword);
      // navigation.navigate('TabNav');  //it will automatically gets diverted into that page which has been used in stackScreen
      //console.log("----->",userRes);
      //console.log(addUser(email, userPassword));
      //dispatch(addUser( userRes.user.displayName,userRes.user.email ));
      //console.log(datafetch);
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <SafeAreaView>
      <Image source={imagePath.grocerryMain} style={styles.groceryHeader} />

      <Text style={styles.userInputHeader}>Email</Text>
      <View style={styles.userDetails}>
        <Email name="email" color="black" size={20} />
        <FormContainer
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          value={email}
          placeholder="Email"
          autoCapitalize="words"
          onBlur={() => emailValidator()}
        />
      </View>
      <Text style={styles.errormsg}>{validation.emailError}</Text>

      <Text style={styles.userInputHeader}>Password</Text>
      <View style={styles.userDetails}>
        <Icon name="key" color="black" size={20} />
        <FormContainer
          onChangeText={text => setUserPassword(text)}
          value={userPassword}
          placeholder="Password"
          autoCapitalize="words"
          onBlur={() => passwordValidator()}
          secureTextEntry={true}
          maxLength={9}
        />
      </View>
      <Text style={styles.errormsg}>{validation.passwordError}</Text>
      <TouchableOpacity
        style={styles.forgetPassword}
        onPress={() => console.log(datafetch)}>
        <Text style={styles.forgetPassword}>Forget Password ?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={
          !validateEmail(email) || !validatePassword(userPassword)
            ? true
            : false
        }
        onPress={() => {
          dispatchCredentials();
        }}
        style={styles.loginButtonContainer}>
        <Text style={styles.loginButton}>Login</Text>
      </TouchableOpacity>

      <View style={styles.or}>
        <View style={styles.line} />
        <Text style={styles.text}>OR</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.continuewith}>Continue With</Text>

      <View style={styles.bottomSocialMedia}>
      <TouchableOpacity style={styles.bottomFacebook}>
          <Image style={styles.facebook} source={imagePath.facebook} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomGoogle}>
          <Image style={styles.googleImage} source={imagePath.google} />
      </TouchableOpacity>
      </View>

      <View style={styles.bottomHeadline}>
        <Text>Dont have an account?</Text>
        <TouchableOpacity>
          <Text
            style={{color: 'green'}}
            onPress={() => navigation.navigate('RegisterScreen')}>
            Register here
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
