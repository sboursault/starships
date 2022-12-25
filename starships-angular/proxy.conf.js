module.exports = [
  {
    context: ['/api/**'],
    target: 'http://localhost:8000',
    changeOrigin: true,
  }
];