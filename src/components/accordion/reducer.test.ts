import { reducer, StateType, TOGGLE_COLLAPSED } from "./reducer"

test('collapsed shoild be true', () => {
    // data
    const state: StateType = {
        collapsed: false
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    // expectation
    expect(newState.collapsed).toBe(true)
})

test('collapsed shoild be false', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    // expectation
    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    const newState = 

    // expectation
    expect(() => {
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError()
}) 