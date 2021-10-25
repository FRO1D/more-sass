import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const ROOT_PATH = path.resolve(__dirname, '../../').replaceAll('\\', '/');
export const SRC_PATH = `${ROOT_PATH}/src`;
