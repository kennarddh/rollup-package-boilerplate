import Hello from '../index'

describe('Hello', () => {
	it('should return Hello World', () => {
		expect(Hello()).toBe('Hello World')
	})
})
