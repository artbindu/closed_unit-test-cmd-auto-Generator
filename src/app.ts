import { logger, clearLogger } from "./logger";
import appConfig from './config';
import { UnitTest } from './unittest';

// Clear logger
clearLogger();

// Generate Unit-test file
const uTest = new UnitTest();
uTest.generateFile();

