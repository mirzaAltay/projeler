import { useEffect } from 'react';
import '../style/form.scss';
import { v4 as uuidv4 } from 'uuid';

export default function Form({ formData, setFormData, formArray, setFormArray }) {

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, id: uuidv4() })
    }

    useEffect(() => { console.log(formArray); }, [formArray])

    const handleClick = (e) => {
        setFormArray(prevList => [...prevList, formData])
    }

    return (
        <div className="form">
            <div className="form__content">
                <div className="form__content__item">
                    <label>İsim Soyisim</label>
                    <input onChange={handleChange} name="nameSurname" value={formData.nameSurname} type="text" />
                </div>
                <div className="form__content__item">
                    <label>Email</label>
                    <input onChange={handleChange} name="mail" value={formData.mail} type="text" />
                </div>
                <div className="form__content__item">
                    <label>Mesajınız</label>
                    <textarea onChange={handleChange} name="message" value={formData.message} ></textarea>
                </div>
            </div>
            <div className="form__button"><button type="button" onClick={handleClick}>Gönder</button></div>
        </div>
    );
}


