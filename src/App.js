import React from 'react'
import { ListOfCategory } from './components/ListOfCategory'
import { GlobalStyle } from './GlobalStyles'
import { PhotoCard } from './components/PhotoCard'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => (
    <div>
        <GlobalStyle />
        <ListOfCategory />
        <ListOfPhotoCards />
    </div>
)