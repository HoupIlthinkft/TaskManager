export function TaskComponent(props) {
    return (
        <div className="flex flex-col gap-[clamp(6px,1vh,12px)] px-[clamp(8px,2vw,16px)] py-[clamp(10px,2vh,21px)] bg-plate-task rounded-[12px]">
            <h2 className="font-semibold  text-[clamp(0.75rem,1.5vw,1.5rem)]">{props.header}</h2>
            <p className="font-medium line-clamp-7 text-[clamp(0.5rem,1vw,1rem)] text-content">{props.content}</p>
            <div className="flex flex-row justify-between">
                <p className={`text-priority-${props.priority} font-medium text-[clamp(0.5rem,1vw,1rem)]`}>{`Приориет: ${props.priority}`}</p>
                <p className="font-medium text-[clamp(0.5rem,1vw,1rem)] text-content">{`Дедлайн: ${props.deadline}`}</p>
            </div>
        </div>
    )
}
