import { useState } from "react";
import Flatpickr from "react-flatpickr";
import "../node_modules/flatpickr/dist/flatpickr.css";

import { TaskComponent } from "./task.tsx";

export function ScheduleCustomComponent() {

    const [rangeDate, setRangeDate] = useState(null);

    const data = [];

    return (
        <div>
            <div>
                <p>Входящие задачи</p>
                <div>
                    <div>
                        <Flatpickr 
                            options={{ 
                                mode: "range",
                                minDate: "today",
                                maxDate: new Date().fp_incr(14),
                                altInput: true,
                                altFormat: 'F j, Y',
                                dateFormat: 'Y-m-d',
                            }}
                            onChange={(selectedDates) => {
                                setRangeDate(selectedDates);
                            }}
                        />
                    </div>
                    <div>
                        <i></i>
                        <p>Фильтрация</p>
                    </div>
                </div>
            </div>
            <div>
                {
                    data.map((el, index) => (
                        <TaskComponent key={index} header={el.header} content={el.content} priority={el.priority} deadline={el.deadline}/>
                    ))
                }
            </div>
        </div>
    )
}
