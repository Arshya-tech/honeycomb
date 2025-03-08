import { readFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";
import yaml from "yaml";

export async function GET() {
  try {
    // Read the OpenAPI yaml file
    const openApiYaml = readFileSync(
      join(process.cwd(), "app/api/openapi.yaml"),
      "utf8",
    );

    // Parse YAML to JSON
    const openApiJson = yaml.parse(openApiYaml);

    // Create the Swagger UI HTML
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>API Documentation</title>
        <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css" />
      </head>
      <body>
        <div id="swagger-ui"></div>
        <script src="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-bundle.js" crossorigin></script>
        <script>
          window.onload = () => {
            window.ui = SwaggerUIBundle({
              spec: ${JSON.stringify(openApiJson)},
              dom_id: '#swagger-ui',
              deepLinking: true,
              presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIBundle.SwaggerUIStandalonePreset
              ],
            });
          };
        </script>
      </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    console.error("Error serving API documentation:", error);
    return new NextResponse("Error loading API documentation", { status: 500 });
  }
}
