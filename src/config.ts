export default {
    logger: {
        path: "logs/systemlog.log"
    },
    config: {
        externalPath: "../../../Mediakind/wmc/src/", // Unittest directory (outside of this project)
        inputPath: "unittest",
        outputPath: "logs/unittest.log",
        allunittest: "logs/unittestAll.log",
        replaceData: { // remove externalPath
            findStr: "..\\..\\..\\Mediakind\\wmc\\src\\",
            replaceStr: ''
        }
    }
}