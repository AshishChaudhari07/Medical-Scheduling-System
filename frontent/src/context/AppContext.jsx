import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider = (props) =>{

    const currencySymbol = '$'
    // const backendUrl =  || "https://medical-scheduling-system.onrender.com"
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [doctors, setDoctors]  = useState([])
    const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
    const [userData,setUserData] = useState(false)


    const getDoctorsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/doctor/list')
            console.log('API Response Status:', response.status);
            console.log('API Response Data:', response.data);
            if (response.data.success) {
                setDoctors(response.data.doctors);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error fetching doctors data:', error.response ? error.response.data : error.message);
            toast.error(error.message);
        }
    }
    

    const loadUserProfileData = async () =>{
        try {
           
            const {data} = await axios.get(backendUrl + '/api/user/get-profile',{headers:{ token }})
            if (data.success) {
                setUserData(data.userData)
            }else{
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const value = {
        doctors,getDoctorsData,
        currencySymbol,
        token,setToken,
        backendUrl,
        userData,setUserData,
        loadUserProfileData
    }

    useEffect(()=>{
        getDoctorsData()
    },[])

    useEffect(()=>{
        if (token) {
            loadUserProfileData()
        }else{
            setUserData(false)
        }
    },[token])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;