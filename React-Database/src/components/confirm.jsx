import '../style/confirm.scss';
import { useEffect } from 'react';

export default function Confirm({ formArray, setFormArray, confirmArray, setConfirmArray }) {
    const saveItem = (event) => {
        const currentId = event.target.parentElement.parentElement.children[0].textContent;
        setConfirmArray((prevList) => ([...prevList, ...formArray.filter(item => item.id === currentId)]))
        setFormArray(formArray.filter(item => item.id !== currentId));
    }
    const removeItem = (event) => {
        const currentId = event.target.parentElement.parentElement.children[0].textContent;
        setFormArray((prevList) => {
            return prevList.filter(item => item.id !== currentId);
        })
    }

    useEffect(() => { console.log(confirmArray); }, [confirmArray])
    return (
        <div className="confirm">

            <div className='header'>
                <div>Id</div>
                <div>Ad Soyad</div>
                <div>Mesajınız</div>
                <div>Onay/Reddet</div>
            </div>

            {formArray && formArray.map((element, index) => (
                <div className='data' key={index + 1}>
                    <div>{element.id}</div>
                    <div>{element.nameSurname}</div>
                    <div>{element.message} </div>
                    <div>
                        <span onClick={saveItem} className='confirm__icon confirm__icon--checked'>Onayla</span>
                        <span onClick={removeItem} className='confirm__icon confirm__icon--delete'>Sil</span>
                    </div>
                </div>
            )
            )}




        </div >
    );
}

