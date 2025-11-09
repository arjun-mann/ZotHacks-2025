import React, { useState } from "react";
import { ToggleButton, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Days.css';

export default function Days() {
    const [selectedDays, setSelectedDays] = useState([]);
    
    const days = [
        { name: 'Sunday', code: 'Su', fullName: 'Sunday' },
        { name: 'Monday', code: 'M', fullName: 'Monday' },
        { name: 'Tuesday', code: 'T', fullName: 'Tuesday' },
        { name: 'Wednesday', code: 'W', fullName: 'Wednesday' },
        { name: 'Thursday', code: 'Th', fullName: 'Thursday' },
        { name: 'Friday', code: 'F', fullName: 'Friday' },
        { name: 'Saturday', code: 'S', fullName: 'Saturday' },
    ];

    const handleDayToggle = (dayCode) => {
        if (selectedDays.includes(dayCode)) {
            setSelectedDays(selectedDays.filter(d => d !== dayCode));
        } else {
            setSelectedDays([...selectedDays, dayCode]);
        }
    };

    return (
        <div className="day-selector-container">
            <h5 className="mb-3">Repeat on</h5>
            <ButtonGroup className="day-button-group">
                {days.map((day, index) => (
                    <OverlayTrigger
                        key={index}
                        placement="top"
                        delay={{ show: 300, hide: 0 }}
                        overlay={
                            <Tooltip id={`tooltip-${day.code}-${index}`}>
                                {day.fullName}
                            </Tooltip>
                        }
                    >
                        <ToggleButton
                            id={`day-${index}`}
                            type="checkbox"
                            variant={selectedDays.includes(day.code) ? "primary" : "outline-primary"}
                            checked={selectedDays.includes(day.code)}
                            value={day.code}
                            onClick={() => handleDayToggle(day.code)}
                            className={`day-button ${selectedDays.includes(day.code) ? 'selected' : ''}`}
                        >
                            {day.code}
                        </ToggleButton>
                    </OverlayTrigger>
                ))}
            </ButtonGroup>
        </div>
    );
}