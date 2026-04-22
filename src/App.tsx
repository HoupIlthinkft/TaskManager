import { useState } from "react";

import { HomeComponent } from "./home.tsx";
import { AddTaskComponent } from "./addTask.tsx";
import { ScheduleTodayComponent } from "./scheduleToday.tsx";
import { ScheduleCustomComponent } from "./scheduleCustom.tsx";
import { ScheduleWeeklyComponent } from "./scheduleWeekly.tsx";

import { NavComponent } from "./navigation.tsx";



export default function App() {
    const [activePage, setActivePage] = useState(0);

    const pages : string[] = ["Главная страница", "Расписание на сегодня", "Расписание на неделю", "Добавить задачу", "Выбрать даты"];
    
    const components : React.ReactElement[] = [
        <HomeComponent/>,
        <ScheduleTodayComponent/>,
        <ScheduleWeeklyComponent/>,
        <AddTaskComponent/>,
        <ScheduleCustomComponent/>,
    ];

    return (
        <>
            <NavComponent pages={pages} activePage={activePage} setActivePage={setActivePage} />
            {components[activePage]}
        </>
    )
}
