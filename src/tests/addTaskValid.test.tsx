import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';

import { AddTaskComponent } from "../addTask.tsx";
import { NotificationComponent } from "../notifications.tsx";

test("Если заполнены все поля, мы видим уведомление 'таск добавлен'", async () => {
    const user = userEvent.setup();

    render(
        <>
            <AddTaskComponent />
            <NotificationComponent />
        </>
    );

    const headerInput = screen.getByPlaceholderText(/введите заголовок/i);
    await user.type(headerInput, "Нужно сделать то");

    const contentInput = screen.getByPlaceholderText(/введите содержание/i);

    fireEvent.change(contentInput, { target: { value: 'Так вот так' } });
    
    const button = screen.getByRole("button", { name: /добавить/i });
    await user.click(button);

    const notification = await screen.findByText(/успешно/i);

    expect(notification).toBeInTheDocument();
}) 
