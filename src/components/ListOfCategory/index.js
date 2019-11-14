import React from 'react'
import { Category } from '../Category'
import { List, Item } from './style'

export  const ListOfCategory = () => {
    return (
        <List>
            {
                [1,2,3,4].map(category => <Item key={category}><Category /></Item>)
            }
        </List>
    )
}