import { TaskComponent } from "./task.tsx";

export function ScheduleTodayComponent() {
    const data = [];
    
    return (
        <div>
            <div>
                <p>Задачи на сегодня</p>
                <div>
                    {
                        data.map((el, index) => (
                            <TaskComponent key={index} header={el.header} content={el.content} priority={el.priority} deadline={el.deadline}/>
                        ))
                    }
                </div>
            </div>

            <div>
                <p>Топ задач на неделю</p>
                <div>
                    {
                        data.map((el, index) => (
                            el.priority == "high" ? <TaskComponent key={index} header={el.header} content={el.content} priority={el.priority} deadline={el.deadline}/> : "" 
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
