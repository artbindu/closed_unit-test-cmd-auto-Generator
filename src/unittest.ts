import appConfig from './config';
import * as fs from "fs";
import * as path from "path";
import { logger, loggerUnitTest } from "./logger";

export class UnitTest {
    public inputPath: string;
    public outputPath: string;
    public allData: string;

    constructor() {
        this.inputPath = appConfig.config.inputPath;
        this.outputPath = appConfig.config.outputPath;
        this.allData = '';
    }

    public generateFile(): void {
        if (!fs.existsSync(path.join(this.inputPath))) {
            logger.error('Please add `UnitTest` file');
            return;
        }
        fs.readdirSync(path.join(this.inputPath)).forEach((dir: string) => {
            logger.info(dir);

            const tPath = path.join(this.inputPath, dir);
            const stats = fs.lstatSync(tPath);
            if (stats.isDirectory()) {
                this.extractDir(tPath);
            } else {
                loggerUnitTest.info(this.generatePath(tPath));
            }
        });
        logger.info(`Check 'UnitTest' fiels cmd data at ${this.outputPath}`);
    }

    public extractDir(_path: string): boolean {
        fs.readdirSync(path.join(_path)).forEach((dir: string) => {
            logger.info(dir);

            const tPath = path.join(_path, dir);
            const stats = fs.lstatSync(tPath);
            if (stats.isDirectory()) {
                this.extractDir(tPath);
            } else {
                if (tPath.indexOf('test.js') >= 0 || tPath.indexOf('test.ts') >= 0) {
                    loggerUnitTest.info(this.generatePath(tPath));
                }
            }
        });
        if (this.allData) {
            loggerUnitTest.info(`All Data: \n${this.allData}`);
            this.allData = '';
        }
        loggerUnitTest.info(`\n${_path}`);
        return true;
    }

    public generatePath(_path: string): string {
        const st: string = `npm run test:file "src\\${_path}"`;
        this.allData += ((this.allData ? ' && ' : '') + st);
        return st;
    }
}
