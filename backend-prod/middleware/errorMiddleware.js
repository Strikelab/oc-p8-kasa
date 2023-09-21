// /middlewre/errorMiddleware.js

export function errorHandler(err, req, res, next) {
  console.error('Global error handler:', err)
  res.status(500).send({ error: 'Internal server error' })
}
