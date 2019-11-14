import React from 'react'
import { ListOfCategory } from './components/ListOfCategory'
import { GlobalStyle } from './GlobalStyles'
import { PhotoCard } from './components/PhotoCard'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
    <div>
        <GlobalStyle />
        <Logo />
        <ListOfCategory />
        <ListOfPhotoCards />
    </div>
)