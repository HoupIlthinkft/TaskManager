import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddTaskComponent } from "../addTask.tsx";
import { NotificationComponent } from "../notifications.tsx";


test("Смотрим что нельзя отправить таск с не заполненым содеражанием", async function () {
    const user = userEvent.setup();

    render(
        <>
            <AddTaskComponent />
            <NotificationComponent />
        </>
    )

    const headerInput = screen.getByPlaceholderText(/введите заголовок/i);

    await user.type(headerInput, "нужно сделать то");

    const button = screen.getByRole("button", {name: /добавить/i});

    await user.click(button);

    screen.debug(undefined, 300000);

    const notification = await screen.findByText("Не заполнено обязательное поле содержимое");

    expect(notification).toBeInTheDocument();
})
