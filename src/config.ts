export default {
    logger: {
        path: "logs/systemlog.log"
    },
    config: {
        externalPath: "../../../Mediakind/wmc_rollup/", // Unittest directory (outside of this project)
        inputPath: "build_src",
        outputPath: "logs/unittest.log",
        allunittest: "logs/unittestAll.log",
        replaceData: { // remove externalPath

            findStr: "..\\..\\..\\Mediakind\\wmc_rollup\\",
            replaceStr: ''
        }
    }
}