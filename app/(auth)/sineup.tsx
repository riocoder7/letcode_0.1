import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome for icons
import { useColorScheme } from 'react-native';  // Import useColorScheme to detect theme
import { useRouter } from 'expo-router';

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Get current theme (light or dark)
  const theme = useColorScheme();

  // Email Regex for Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle Sign-Up Validation
  const handleSignUp = () => {
    let isValid = true;
    let newErrors = { name: '', email: '', password: '' };

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      Alert.alert('Success', 'Sign-Up Successful!');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#121212' : '#fff' }]}>
      <Text style={[styles.title, { color: theme === 'dark' ? '#fff' : '#333' }]}>Sign up</Text>

      {/* Name Input */}
      <View style={[styles.inputWrapper, { borderColor: theme === 'dark' ? '#444' : '#ccc' }]}>
        <Icon name="user" size={20} color={theme === 'dark' ? '#fff' : '#555'} style={styles.leftIcon} />
        <TextInput
          style={[styles.input, { color: theme === 'dark' ? '#fff' : '#333' }]}
          placeholder="Name"
          placeholderTextColor={theme === 'dark' ? '#aaa' : '#888'}
          value={name}
          onChangeText={setName}
        />
      </View>
      {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

      {/* Email Input */}
      <View style={[styles.inputWrapper, { borderColor: theme === 'dark' ? '#444' : '#ccc' }]}>
        <Icon name="envelope" size={20} color={theme === 'dark' ? '#fff' : '#555'} style={styles.leftIcon} />
        <TextInput
          style={[styles.input, { color: theme === 'dark' ? '#fff' : '#333' }]}
          placeholder="Email"
          placeholderTextColor={theme === 'dark' ? '#aaa' : '#888'}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

      {/* Password Input */}
      <View style={[styles.inputWrapper, { borderColor: theme === 'dark' ? '#444' : '#ccc' }]}>
        <Icon name="lock" size={20} color={theme === 'dark' ? '#fff' : '#555'} style={styles.leftIcon} />
        <TextInput
          style={[styles.input, { color: theme === 'dark' ? '#fff' : '#333' }]}
          placeholder="Password"
          placeholderTextColor={theme === 'dark' ? '#aaa' : '#888'}
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Icon
            name={secureText ? 'eye-slash' : 'eye'}
            size={20}
            color={theme === 'dark' ? '#fff' : '#555'}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>
      {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

      {/* Sign-Up Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme === 'dark' ? '#007bff' : '#007bff' }]}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text style={[styles.loginText, { color: theme === 'dark' ? '#fff' : '#333' }]}>
        Already have an account?{' '}
        <Text style={[styles.loginLink, { color: theme === 'dark' ? '#007bff' : '#007bff' }]} onPress={() => router.push("/login") }>
          Log In
        </Text>
      </Text>

      {/* OR Separator */}
      <View style={styles.separator}>
        <View style={[styles.line, { backgroundColor: theme === 'dark' ? '#555' : '#ccc' }]} />
        <Text style={[styles.orText, { color: theme === 'dark' ? '#fff' : '#333' }]}>or</Text>
        <View style={[styles.line, { backgroundColor: theme === 'dark' ? '#555' : '#ccc' }]} />
      </View>

      {/* Google Sign-Up Button */}
      <TouchableOpacity style={[styles.googleButton, { borderColor: theme === 'dark' ? '#444' : '#ccc' }]}>
        <Icon name="google" size={20} color={theme === 'dark' ? '#fff' : '#333'} />
        <Text style={[styles.googleButtonText, { color: theme === 'dark' ? '#fff' : '#333' }]}>Sign up with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  leftIcon: {
    marginRight: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 20,
  },
  loginLink: {
    fontWeight: 'bold',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
  },
  orText: {
    marginHorizontal: 10,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 8,
  },
  googleButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
  eyeIcon: {
    marginLeft: 10,
  },
});
