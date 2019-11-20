import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './style'

export  const ListOfCategory = () => {
    const [categories, setCategories] = useState(mockCategories)

    useEffect(function () {
        window.fetch('https://petgram-server-jl.now.sh/categories')
            .then(res => res.json())
            .then(response => {
                setCategories(response)
            })
        }, [])

    return (
        <List>
            {
                categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
            }
        </List>
    )
}