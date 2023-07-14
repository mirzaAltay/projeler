import '../style/comment.scss';

export default function Comment({ confirmArray }) {
    return (
        <div className="comment">

            <div className='header'>
                <div>İsim Soyisim</div>
                <div>Mesajınız</div>
            </div>

            {confirmArray && confirmArray.map((item, index) => {
                return (
                    <div className='data' key={index + 1}>
                        <div>{item.nameSurname}</div>
                        <div>{item.message}</div>
                    </div>
                )
            })}



        </div>
    );
}

