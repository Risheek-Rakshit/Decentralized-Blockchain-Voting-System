const Election = artifacts.require("Election");

module.exports = function (deployer) {
  deployer.deploy(Election,["0x4172756e616368616c616d000000000000000000000000000000000000000000","0x5269736869000000000000000000000000000000000000000000000000000000","0x5374616c696e0000000000000000000000000000000000000000000000000000","0x4b616d616c000000000000000000000000000000000000000000000000000000","0x53696d6275000000000000000000000000000000000000000000000000000000","0x756d617200000000000000000000000000000000000000000000000000000000","0x5061617267617600000000000000000000000000000000000000000000000000","0x4d6f646900000000000000000000000000000000000000000000000000000000"]
  );
};