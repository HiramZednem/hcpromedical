import { useEffect, useState } from "react";
import { prodApi } from "../api/prodApi";
import AuthService from '../services/AuthService';

export const useForm = ( ) => {
  const [data, setData] = useState({});
  
  async function getData() {
    const response = await prodApi.get( '/personalInfo/self', {
      headers: {
        "Authorization": AuthService.getCurrentUser()
      }
    }).catch(function (error) {
      if (error.response.status === 401) {
          AuthService.logOut();
      }
    });
    setData( response.data.item );
  }

  useEffect(() => {
      getData();
  }, []);

  async function updateData( ) {   
    const response = await prodApi.post( '/personalinfo', data);
    console.log(response); 
  }

  return {
    data,
    setData,
    updateData
  }
}
