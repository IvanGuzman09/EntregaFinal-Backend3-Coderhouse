export const info = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "",
            version: "1.0.0",
            description: ""
        },
        servers: [ 
            {
            url: "http://localhost:3000",
            description: "Servidor de desarrollo con puerto 3000."
        }
        ],
    },
    apis: ["./src/docs/*.yml"],
}