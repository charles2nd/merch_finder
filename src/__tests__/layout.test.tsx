import { render } from '@testing-library/react'
import RootLayout from '../app/layout'

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <RootLayout>
        <div>Test content</div>
      </RootLayout>
    )
    
    expect(getByText('Test content')).toBeInTheDocument()
  })

  it('has correct html structure', () => {
    const { container } = render(
      <RootLayout>
        <main>Main content</main>
      </RootLayout>
    )
    
    expect(container.querySelector('body')).toBeInTheDocument()
    expect(container.querySelector('main')).toBeInTheDocument()
  })
})