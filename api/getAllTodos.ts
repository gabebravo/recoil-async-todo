const getAllTodos = async (): Promise<any> => {
  const appId = process.env.NEXT_PUBLIC_API_ID;

  try {
    const data = await fetch(`https://${appId}.mockapi.io/todo`);
    return await data.json();
  } catch (error) {
    console.log('error', error);
  }
};

export default getAllTodos;
