import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import swaggerJson from '../../swagger.json';

function ApiDoc() {
  return <SwaggerUI spec={swaggerJson} />;
}

export default ApiDoc;
