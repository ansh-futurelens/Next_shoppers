import dynamic from 'next/dynamic'; 
import swaggerJson from '../../swagger.json';
import 'swagger-ui-react/swagger-ui.css'; 

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

function ApiDoc() {
  return <SwaggerUI spec={swaggerJson} />;
}

export default ApiDoc;
