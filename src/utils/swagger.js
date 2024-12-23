import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const PORT = process.env.PORT||8080;

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'AdoptMe API',
            version: '1.0.0',
            description: 'documentación del módulo Users del proyecto API AdoptMe',
        },
        servers: [
            {
              url: `http://localhost:${PORT}/api`
            },
          ],
    },
    apis: ['./src/routes/users.router.js'],
};

const specs = swaggerJsDoc(swaggerOptions);

export { swaggerUi, specs };