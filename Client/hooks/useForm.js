import { useEffect, useState } from "react";
import { prodApi } from "../api/prodApi";
import axios from "axios";

export const useForm = ( ) => {
  const [data, setData] = useState({});
  
  async function getData() {
    const response = await prodApi.get( '/personalInfo/50' );
    setData( response.data.item );
  }

  useEffect(() => {
      getData();
  }, []);

  const saveDataFromInput = (name, value) => {
		setData({...data, [name]:value});
	}

  async function updateData( ) {   
    const response = await prodApi.post( '/personalinfo', data);
    console.log(response);
}

  return {
    data,
    setData,
    saveDataFromInput,
    updateData
  }
}
