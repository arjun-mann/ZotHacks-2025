
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import './Days.css';
export default function Days() {
    const [selectedDays, setSelectedDays] = useState(null);
    const days = [
        { name: 'Sunday', code: 'Sun' },
        { name: 'Monday', code: 'Mon' },
        { name: 'Tuesday', code: 'Tues' },
        { name: 'Wednesday', code: 'Wed' },
        { name: 'Thursday', code: 'Thurs' },
        { name: 'Friday', code: 'Fri' },
        { name: 'Saturday', code: 'Sat' },
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect 
             value={selectedDays} 
                onChange={(e) => setSelectedDays(e.value)} 
                options={days} 
                optionLabel="name" 
                display="chip" 
                placeholder="Select Days" 
                classNamee="custom-multiselect"
                maxSelectedLabels={3} 
                showSelectAll={false}
                panelClassName="custom-panel"
                
            />
        </div>
    );
}
        