import axios from "axios";
import { useState,useEffect} from "react";
import { RiCelsiusFill } from "react-icons/ri";



export default function Weather() {

    const [city, setCity] = useState("");
    const [info, setInfo] = useState([]);
    const [isActive, setIsActive] = useState(false);

    const handleChange = (e) => {

        setCity(e.target.value)

    }

    const handleClick = async () => {
        const apiKey = "3d7637eda80a480b34da049035959014"
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

        console.log("click oldu", baseURL);


        try {

            const data = await axios(baseURL)
           
            setInfo(data)

            console.log(info)
            
            
        } catch (error) {
            console.log(error)
            
        }
        
        //await fetch(baseURL).then(res => res.json()).then(data => console.log(data)).catch(err => console.log("Hatanız : ", err));

        /* await axios(baseURL).then(async data => {
              await setInfo(data.data)
        }).catch(err => console.log("Hatanız : ", err));
        setIsActive(true); */
    }

    useEffect(() => {
        handleClick()
        console.log("merhaba")
      
    }, [city])
    



    return (

        <div>
            <h1>Hava Durumu Uygulaması</h1>
            <div className="form">
                <input value={city} className="inputText" type="text" placeholder="Şehri Giriniz" onChange={handleChange} />
            </div>
            <div className="btnDiv">
                <button onClick={handleClick} className="btn">Verileri Getir</button>
            </div>

            {
                info.map((info)=>{

                    return(
                     <>

                        <p id="sehir"> {info.name}, {info.sys.country}</p>
                <div className="genelDeger">
                    <p id="sicaklik">{info.main.temp}</p><RiCelsiusFill className="fa-c" />
                </div>

                <p id="havaDurumu">Hava Durumu</p>
                <div className="his">
                    <p id="hissedilen">Hissedilen : {info.main.feels_like}</p><RiCelsiusFill className="fa-circle" />
                </div>

                </>
                    )
                })
            }

        </div>
    )
}