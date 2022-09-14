import appConfig from './config';
import * as fs from "fs";
import * as path from "path";
import { logger, loggerUnitTest } from "./logger";

export class UnitTest {
    public inputPath: string;
    public outputPath: string;
    public allData: string;

    constructor() {
        this.inputPath = appConfig.config.externalPath + appConfig.config.inputPath;
        this.outputPath = appConfig.config.outputPath;
        this.allData = '';
    }

    public generateFile(): void {
        if (!fs.existsSync(path.join(this.inputPath))) {
            logger.error('Please add `UnitTest` file : ' + this.inputPath);
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
                if (this.isUnittestFile(tPath)) {
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

    public isUnittestFile(filepath) {
        return (filepath.indexOf('test.js') >= 0 || filepath.indexOf('test.ts') >= 0);
    }

    public generatePath(_path: string): string {
        if (!this.isUnittestFile(_path)) return '';
        _path = _path.replace(appConfig.config.replaceData.findStr, appConfig.config.replaceData.replaceStr);
        const st: string = `npm run test:file "${_path}"`;
        this.allData += ((this.allData ? ' && ' : '') + st);
        return st;
    }
}
