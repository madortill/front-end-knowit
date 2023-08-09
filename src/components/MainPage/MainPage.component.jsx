import './MainPage.styles.css';
import CountdownTimer from '../countdown/CountdownTimer.component';
import Slider from '../slider/slider.component';

const MainPage = (props) => {

    const DATA = [
        'מנהלים ואנשי פיתוח למידה, קריית ההדרכה גאה להזמינכם לכנס ייחודי ומיוחד במינו בנושא חדשנות בלמידה.  הכנס מיועד למפתחי הדרכה בכירים, מנהלי הדרכה בארגון, אנשי חינוך, הוראה ולמידה בצה"ל, כוחות הבטחון השונים, אקדמיה, גופי חינוך ולמידה בארגונים השונים.',
        'מדור טי״ל של ענף הדרכה בקריית ההדרכה בנגב מתמחה ביצירת תוצרים דיגיטליים וחדשניים להדרכה. תוצריו מגיעים להדרכות השונות ולקורסים בקריית ההדרכה ובצה״ל ככלל. גם השנה אנו גאים לארח אתכם בכנס חדשני ומיוחד במינו.'
    ]
    return (
        <div className="main-page">
            <span className='section1 section'>
                <div className='white-section1'>
                    <h1 className='main-header'>למידה מעולם לא הייתה חדשנית יותר.</h1>
                    <p className='small-text'>כנס חדשנות בלמידה 2023</p>
                    <button className='sign-btn pointer'>להרשמה</button>
                </div>
                <div className='black-section1'>
                    <div className='throw-object'></div>
                    {/* <div className='blue-half-circle'></div>
                    <div className='blue-circle'></div> */}
                    {/* <div className='try'>...</div> */}
                </div>
            </span>
            <span className='section2 section'>
                <div className='white-section2'>
                    <div className='text-pic-section text-pic-section1'>
                        <Slider className='slider'></Slider>
                        <div className='text-section text-section1'>
                            <h1 className='header'>KNOW IT?</h1>
                            <p className="main-page-text">{DATA[0]}</p>
                        </div>
                    </div>
                    <div className='text-pic-section text-pic-section2'>
                        <div className='logo-till'></div>
                        <div className='text-section text-section2'>
                            <h1 className='header'>מדור טי״ל</h1>
                            <p className="main-page-text">{DATA[1]}</p>
                        </div>
                    </div>
                    <CountdownTimer targetDate={props.targetDate} />
                </div>
            </span>
            <span className='section3 section'>
                <div className='black-section2'>
                    <h1 className='white-text header header-people'>המרצים שלנו</h1>
                    <div className='people-container'>
                        <div className='person'></div>
                        <div className='person'></div>
                        <div className='person'></div>
                        <div className='person'></div>
                    </div>
                </div>
            </span>

        </div>
    );
}

export default MainPage;