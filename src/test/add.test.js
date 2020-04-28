const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Helo ${name}!`;
test('Should add two numbers', () => {
	const result = add(4, 3);
	expect(result).toBe(7);
});

test('Should generate greeting with name', () => {
	const result = generateGreeting('Syed');
	expect(result).toBe('Helo Syed!');
});

test('Should generate greeting with no name', () => {
	const result = generateGreeting();
	expect(result).toBe('Helo Anonymous!');
});
