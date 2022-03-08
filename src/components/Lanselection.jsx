import React, {useEffect, useState} from 'react'
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';

import '../styles/Lanselection.css'
import LeftLanguage from './Leftlanguage';
import RightLanguage from './Rightlanguage'

export default function LanSelection() {
    const [ languages, setLanguages ] = useState([])


        useEffect(() => {
            const getLanguages = async () => {
                 await fetch("https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=uz", {
                    "method": "GET",
                    "headers": {
                        "accept-encoding": "application/gzip",
                        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
                        "x-rapidapi-key": "883222602dmsh572987bdcdee66cp1cac6ejsnb9bf2f5ea3e9"
                    }
                })
                    .then(response => response.json())
                    .then(data => setLanguages(data.data.languages))
                    .catch(err => {
                        console.error(err);
                    });
            }
            getLanguages()
        },[])
    console.log(languages)

    return (
        <div className="lan-selection">
            <div className="left side">
                <LeftLanguage data = {languages}/>
            </div>
            <CompareArrowsRoundedIcon sx={{position: 'relative', top:'20px', margin: '0 1rem', color:'#8C9094'}}/>
            <div className="right side">
                <RightLanguage/>
            </div>
        </div>
    )
}
