import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../components/Style/SplashStyles.css";
import splash from '../assets/images/splash.png';

import splash from "../assets/images/splash.png";

export default function Splash(){
    // const [loading, setLoding] = useState(true);
	const navigate = useNavigate();

	const timeout = () => {
		setTimeout(() => {
			navigate('/onboarding');
		}, 3000);
	};

	useEffect(() => {
		timeout();
		return () => {
			clearTimeout(timeout);
		};
	}); 

    return(
        <>
            <img alt='Splash' src={splash} style={{display: "flex", margin: "0 auto", width:"100%"}} />
        </>
    )
}