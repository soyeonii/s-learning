const swaggerUi = require("swagger-ui-express")
const swaggereJsdoc = require("swagger-jsdoc")

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "S-Learning",
      description: "SKU S-Learning Club Web-Site",
    },
    host: 'localhost:3000/api',
    basePath: '/api',
    servers: [
      {
          "url": "http://localhost:3000",
          "description": "Development server"
      },
      {
          // env 에 server 주소 넣어주세요
          "url": `http://${process.env.server}:3000`,
          "description": "Production server"
      },
    ],
  },
  apis: ["swagger/api-doc.js"], //Swagger 파일 연동
}

const specs = swaggereJsdoc(options)

module.exports = { swaggerUi, specs }