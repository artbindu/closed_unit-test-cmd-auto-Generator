export default {
    logger: {
        path: "logs/systemlog.log"
    },
    config: {
        externalPath: "../../../Mediakind/wmc_nba_master/src/", // Unittest directory (outside of this project)
        inputPath: "unittest",
        outputPath: "logs/unittest.log",
        allunittest: "logs/unittestAll.log",
        replaceData: { // remove externalPath
            findStr: "..\\..\\..\\Mediakind\\wmc_nba_master\\src\\",
            replaceStr: ''
        }
    }
}