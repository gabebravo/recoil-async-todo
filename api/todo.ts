export const getAllTodos = async (): Promise<any> => {
  const appId = process.env.NEXT_PUBLIC_API_ID;

  try {
    const data = await fetch(`https://${appId}.mockapi.io/todo`);
    return await data.json();
  } catch (error) {
    console.log('error', error);
  }
};

export const getTodoById = async (id: string): Promise<any> => {
  const appId = process.env.NEXT_PUBLIC_API_ID;

  try {
    const data = await fetch(`https://${appId}.mockapi.io/todo/${id}`);
    return await data.json();
  } catch (error) {
    console.log('error', error);
  }
};

export const getFilterTodos = async (
  field: string,
  value: any
): Promise<any> => {
  const appId = process.env.NEXT_PUBLIC_API_ID;
  try {
    const data = await fetch(
      `https://${appId}.mockapi.io/todo/?${field}=${value}`
    );
    return await data.json();
  } catch (error) {
    console.log('error', error);
  }
};

export const createTodo = async (newTodo: any): Promise<any> => {
  const appId = process.env.NEXT_PUBLIC_API_ID;

  try {
    const data = await fetch(`https://${appId}.mockapi.io/todo`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
    return await data.json();
  } catch (error) {
    console.log('error', error);
  }
};

export const updateTodo = async (updatedTodo: any): Promise<any> => {
  const appId = process.env.NEXT_PUBLIC_API_ID;

  try {
    const data = await fetch(
      `https://${appId}.mockapi.io/todo${updatedTodo.id}`,
      {
        method: 'PUT',
        body: updatedTodo,
      }
    );
    return await data.json();
  } catch (error) {
    console.log('error', error);
  }
};

export const deleteTodo = async (id: string): Promise<any> => {
  const appId = process.env.NEXT_PUBLIC_API_ID;

  try {
    const data = await fetch(`https://${appId}.mockapi.io/todo${id}`, {
      method: 'DELETE',
    });
    return await data.json();
  } catch (error) {
    console.log('error', error);
  }
};
