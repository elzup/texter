module.exports = {
	roots: ['<rootDir>'],
	transform: { '^.+\\.tsx?$': 'babel-jest' },
	testPathIgnorePatterns: [
		'<rootDir>.next/',
		'<rootDir>/node_modules/',
		'<rootDir>/build/',
	],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testMatch: ['**/__tests__/**/*.test.(ts|tsx|js)'],
}
