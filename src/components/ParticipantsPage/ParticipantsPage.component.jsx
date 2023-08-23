import './ParticipantsPage.styles.css';
import fillerman from "../../media/images/man.svg";
import fillerwoman from "../../media/images/woman.svg";
import blob1 from '../../media/images/blob1.svg';
import blob2 from '../../media/images/blob2.svg';

const ParticipantsPage = () => {
    const MAIN_INFO = [{
        "img": fillerman,
        "name": "ישראל ישראלי",
        "topic": "הרצאה בנושא של ישראלים",
        "bg": blob1,
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    },
    {
        "img": fillerwoman,
        "name": "ישראלית ישראלית",
        "topic": "הרצאה בנושא של ישראליות",
        "bg": blob2,
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    }]

    const INFO = [{
        "img": fillerman,
        "name": "ישראל ישראלי",
        "topic": "הרצאה בנושא של ישראלים",
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    },
    {
        "img": fillerwoman,
        "name": "ישראלית ישראלית",
        "topic": "הרצאה בנושא של ישראליות",
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    },
    {
        "img": fillerwoman,
        "name": "ישראלית ישראלית",
        "topic": "הרצאה בנושא של ישראליות",
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    },
    {
        "img": fillerwoman,
        "name": "ישראלית ישראלית",
        "topic": "הרצאה בנושא של ישראליות",
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    },
    {
        "img": fillerwoman,
        "name": "ישראלית ישראלית",
        "topic": "הרצאה בנושא של ישראליות",
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    }]
    return (
        <div className='participants-page'>
            <div className='main-container'>
                <h1 className='participants-title'>מרצי מליאה</h1>
                <div className='dark-card-container'>
                    {MAIN_INFO.map((element, index) => (
                        <div className='dark-card' key={index} style={{ backgroundImage: `url(${element.bg})` }}>
                            <div className='main-img' style={{ backgroundImage: `url(${element.img})` }}></div>
                            <div className='main-text-container'>
                                <h2 className='main-topic white-text'>{element.topic}</h2>
                                <h6 className='main-name white-text'>{element.name}</h6>
                                <p className='main-text white-text'>{element.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <h1 className='participants-title'>מושבים</h1>
                <div className='secondary-card-container'>
                    {INFO.map((element, index) => (
                        <div className='secondary-card' key={index}>
                            <div className='secondary-img' style={{ backgroundImage: `url(${element.img})` }}></div>
                            <div className='secondary-text-container'>
                                <h2 className='secondary-topic'>{element.topic}</h2>
                                <h6 className='secondary-name'>{element.name}</h6>
                                <p className='secondary-text'>{element.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div>

            </div>
        </div>
    );
}

export default ParticipantsPage;