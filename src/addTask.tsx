export function AddTaskComponent() {
    return (
        <div>
            <div>
                <p>Заголовок</p>
                <input placeholder="Введите заголовок..."/>
            </div>
            <div>
                <p>Содержание</p>
                <input placeholder="Введите содеражние..."/>
            </div>
            <div>
                <div>
                    <select>
                        <option value="high">Высокий</option>
                        <option value="medium">Средний</option>
                        <option value="low">Низкий</option>
                    </select>
                    <input type="date" min={Date()}/>
                </div>
                <div>
                    <i></i>
                    <p>Добавить</p>
                </div>
            </div>
        </div>
    )
}
