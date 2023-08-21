import './SquareDetails.styles.css';
import calendar from '../../media/images/calendar.png';
import waze from '../../media/images/waze.png';

const SquareDetails = (props) => {

    const INFO = [
        {
            "title": "למי?",
            "text": "כ-1000 מפתחי ומנהלי הדרכה מיחידות צה״ל, מהאקדמיה ומגופי הדרכה נוספים במגזר הציבורי, הפרטי והבטחוני."
        },
        {
            "title": "איפה?",
            "text": "קריית ההדרכה (עיר הבה״דים) - מחנה אריאל שרון. לטובת המשתתפים יועמד שירות הסעות ממספר מקומות מרכזיים."
        },
        {
            "title": "מתי?",
            "text": "הכנס יתקיים ביום רביעי ה-8 בנומבר 2023 בין השעות 8:00-14:00."
        },
        {
            "title": "מה בתוכנית?",
            "text": "הרצאות מעוררות השראה, סדנאות ייחודיות, תערוכת ספקים מגוונת, חשיפה לאמצעים דיגיטליים חדשניים ואוכל טוב."
        },
        {
            "title": "עלות?",
            "text": "ההשתתפות בכנס הינה ללא עלות."
        }
    ]

    return (
        <div className="detail-squars">
            {INFO.map((element, index) => (
                <div className='square' key={index}>
                    <h2 className='square-title'>{ element.title }</h2>
                    <p className='square-text'>{ element.text }</p>
                </div>
            ))}
            <div className='square' style={{ justifyContent: 'center'}}>
                <div className='icons-container-square'>
                    <img className="square-icons" src={waze}/>
                    <img className="square-icons" src={calendar}/>
                </div>
                
            </div>

        </div>
    );
}

export default SquareDetails;