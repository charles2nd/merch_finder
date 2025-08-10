import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', {
      name: /merch finder & customizer/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('displays the description', () => {
    render(<Home />)
    
    const description = screen.getByText(/find and customize merchandise/i)
    
    expect(description).toBeInTheDocument()
  })
})