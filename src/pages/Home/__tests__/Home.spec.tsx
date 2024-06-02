import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

import Home from '..'

describe('A home page', () => {
  it('should be rendered correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <RecoilRoot>
          <Home />
        </RecoilRoot>
      </BrowserRouter>,
    )
    expect(container).toMatchSnapshot()
  })
})
