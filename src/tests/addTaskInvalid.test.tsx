import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddTaskComponent } from "../addTask.tsx";
import { NotificationComponent } from "../notifications.tsx";

test("Смотрим что нельзя отправить не заполненый таск", async function () {
    const user = userEvent.setup();

    render(
        <>
            <AddTaskComponent />
            <NotificationComponent />
        </>
    );

    const button = screen.getByRole("button", { name: /добавить/i });

    await user.click(button);

    const notification = await screen.findByText("Не заполнено обязательное поле заголовок");
    
    expect(notification).toBeInTheDocument();
})



