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
  previewLink: string,
  publishedDate: string,
  imageLinks: {thumbnail: string},
  publisher: string,
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
      console.log(response);
      if (response.data.totalItems !== 0) {
        setStateBooks(response.data.items);
      } else {
        // Make something
        setBooks([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  function setStateBooks (data: []): void {
    const books: VolumeInfo[] = [];

    data.forEach((book: Book) => {
      const {title, authors, previewLink, publishedDate, imageLinks, publisher} = book.volumeInfo;
      books.push({
        title: title !== undefined ? title : 'Untitled',
        authors: authors !== undefined ? authors : ['-'],
        previewLink: previewLink !== undefined ? previewLink : '#',
        publishedDate: publishedDate !== undefined ? publishedDate : '-',
        imageLinks: {thumbnail: imageLinks !== undefined ? imageLinks.thumbnail : '-'},
        publisher: publisher !== undefined ? publisher : '-',
      });
    });
    
    setBooks(books);
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
