import React from 'react'
import renderer, { act } from 'react-test-renderer'

import App from '../App'
import AppContainer from '../navigation'
describe('<App />', () => {
    it('renders correctly', () => {
        act(() => {
            const tree = renderer.create(<App />).toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
})
describe('<AppContainer />', () => {
    it('renders correctly', () => {
        act(() => {
            const tree = renderer.create(<AppContainer />).toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
})
const tree = renderer.create(<AppContainer />).toJSON()
console.log(tree)
