import {useContext } from 'react'
import Switch from "react-switch"
import { ThemeContext } from 'styled-components'
import { shade} from 'polished'

import { Container } from './styles'

interface Props {
    toggleTheme(): void
}

export const Header = ({toggleTheme}: Props) => {
    const { colors, title } = useContext(ThemeContext)

 return (
    <Container>
        HELLO WORLD
        <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
        />
    </Container>
 )
}