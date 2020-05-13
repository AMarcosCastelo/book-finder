import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import api from './services/api';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import usePersistedState from './Utils/usePersistedState';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Search from './components/Search';

export type VolumeInfo = {
  title: String,
  authors: string [],
  infoLink: string,
  publishedDate: string,
  imageLinks: {thumbnail: string}
};

export type Book = {
  volumeInfo: VolumeInfo
}

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const [books, setBooks] = useState<VolumeInfo[]>([]);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  async function getData (value: String): Promise<void>  {
    try {
      const response = await api.get('/volumes', {
        params: {
          q: value,
        },
      });
      setStateBooks(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  function setStateBooks (data: []): void {
    const books: VolumeInfo[] = [];
    console.log(data);
    data.forEach((book: Book) => {
      const img = book.volumeInfo.imageLinks;
      books.push({
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        infoLink: book.volumeInfo.infoLink,
        publishedDate: book.volumeInfo.publishedDate,
        imageLinks: {thumbnail: img !== undefined ? img.thumbnail : '-'}
      });
    });
    setBooks(books);
    console.log(books);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle/>
        <Header toggleTheme={toggleTheme} />
        <Search getData={getData} />
        <Main booksData={books} /> 
      </div>
    </ThemeProvider>
  );
}

export default App;
