import React from 'react'
import { Layout, Typography } from 'antd'

const { Title } = Typography 
const { Header } = Layout

const AppHeader = () => {
    return (
        <Header>
            <Title>Bestest Movie List App</Title>
        </Header>
    )
}

export default AppHeader
