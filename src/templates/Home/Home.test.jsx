const { render, screen } = require("@testing-library/react")
import { Home } from '.'
describe('<home/>', () => {
  it('is should render search, posts and load more', () => {
    render(<Home />)
    screen.debug()
  })
})