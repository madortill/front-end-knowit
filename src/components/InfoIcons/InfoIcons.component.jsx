import { AddToCalendarButton } from 'add-to-calendar-button-react';
import "./InfoIcons.styles.css";

const InfoIcons = () => {
    return (
        <div>
            <AddToCalendarButton
                name="כנס know it"
                startDate="2023-11-08"
                startTime='8:00'
                endTime='14:00'
                endDate='08-11-2023'
                options={['Apple', 'Google', 'Microsoft365', 'Outlook.com', 'Yahoo']}
            ></AddToCalendarButton>
                <a
                    href={`https://waze.com/ul?ll=31.056198,34.840666&navigate=yes`}
                    target="_blank" rel="noreferrer"><div className="waze-btn"></div>
                </a>
        </div>
    );
}

export default InfoIcons;