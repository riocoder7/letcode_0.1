import axios from 'axios';

export const executeCode = async (code, language) => {
  try {
    // Make a POST request using Axios
    const response = await axios.post('http://localhost:5000/code_editor', {
      code, 
      language
    }).then((response) => {
      console.log("data send to backend server");
    }).catch((error) => {
      console.error(error);
    });

    // Assuming the backend sends a JSON response with 'output' field
    console.log('Data:', response.data);
    return response.data.output; // Return the output from the response

  } catch (error) {
    // If an error occurs, log it and return a default error message
    console.error('Error executing code:', error);
    return 'Execution failed';
  }
};
