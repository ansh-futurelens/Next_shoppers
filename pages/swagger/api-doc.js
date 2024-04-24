import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import swaggerJson from '../../swagger.json';

// Dynamically import SwaggerUI component
const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

function ApiDoc() {
  return <SwaggerUI spec={swaggerJson} />;
}

export default ApiDoc;
