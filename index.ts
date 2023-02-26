// Напиши и типизируй функцию, выполняющую запрос за данными по переданному URL. Выведи их в консоль в формате: "ID: id, Email: email".

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface Comment {
  id: number;
  email: string;
}

const getData = async (url: string): Promise<void> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const comments: Comment[] = await response.json();

  comments.forEach(comment => {
    console.log(`ID: ${comment.id}, Email: ${comment.email}`);
  });
}

getData(COMMENTS_URL);