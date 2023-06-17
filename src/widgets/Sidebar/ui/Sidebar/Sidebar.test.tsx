import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation/renderWithTranslation'
import { Sidebar } from 'widgets/Sidebar'

describe('Sidebar', () => {
    test('Test render', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Test collapsed toggle', () => {
        renderWithTranslation(<Sidebar />)
        const toggleButton = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
