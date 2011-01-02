
function repeated (bytenum, times) {
  var r = "";
  for (var i = 0; i < times; i++) {
    r += String.fromCharCode(bytenum);
  }
  return r;
}

require(["web-sha", "web-util"], function (sha, util) {

  function test_digest(testvectors, hashfunc) {
    for (var i = 0; i < testvectors.length; i++) {
      var testcase = testvectors[i];
      equals(util.stringToHex(hashfunc(testcase.Msg)), testcase.MD);
    }
  }

  // NIST test vectors, see http://csrc.nist.gov/groups/STM/cavp/index.html#03
  // CAVS 5.0
  // "SHA-1 ShortMsg" information for "s"
  // SHA-1 tests are configured for BYTE oriented implementations
  test("SHA1 ShortMsg CAVS 5.0", function (next) {

    var sha1shortmsg = [
      {Len: 0 / 8,
       Msg: "",
       MD:  "da39a3ee5e6b4b0d3255bfef95601890afd80709"},

      {Len: 8 / 8,
       Msg: "\xa8",
       MD:  "99f2aa95e36f95c2acb0eaf23998f030638f3f15"},

      {Len: 16 / 8,
       Msg: util.hexToString("3000"),
       MD: "f944dcd635f9801f7ac90a407fbc479964dec024"},

      {Len: 24 / 8,
       Msg: util.hexToString("42749e"),
       MD: "a444319e9b6cc1e8464c511ec0969c37d6bb2619"},

      {Len: 32 / 8,
       Msg: util.hexToString("9fc3fe08"),
       MD: "16a0ff84fcc156fd5d3ca3a744f20a232d172253"},

      {Len: 40 / 8,
       Msg: util.hexToString("b5c1c6f1af"),
       MD: "fec9deebfcdedaf66dda525e1be43597a73a1f93"},

      {Len: 48 / 8,
       Msg: util.hexToString("e47571e5022e"),
       MD: "8ce051181f0ed5e9d0c498f6bc4caf448d20deb5"},

      {Len: 56 / 8,
       Msg: util.hexToString("3e1b28839fb758"),
       MD: "67da53837d89e03bf652ef09c369a3415937cfd3"},

      {Len: 64 / 8,
       Msg: util.hexToString("a81350cbb224cb90"),
       MD: "305e4ff9888ad855a78573cddf4c5640cce7e946"},

      {Len: 72 / 8,
       Msg: util.hexToString("c243d167923dec3ce1"),
       MD: "5902b77b3265f023f9bbc396ba1a93fa3509bde7"},

      {Len: 80 / 8,
       Msg: util.hexToString("50ac18c59d6a37a29bf4"),
       MD: "fcade5f5d156bf6f9af97bdfa9c19bccfb4ff6ab"},

      {Len: 88 / 8,
       Msg: util.hexToString("98e2b611ad3b1cccf634f6"),
       MD: "1d20fbe00533c10e3cbd6b27088a5de0c632c4b5"},

      {Len: 96 / 8,
       Msg: util.hexToString("73fe9afb68e1e8712e5d4eec"),
       MD: "7e1b7e0f7a8f3455a9c03e9580fd63ae205a2d93"},

      {Len: 104 / 8,
       Msg: util.hexToString("9e701ed7d412a9226a2a130e66"),
       MD: "706f0677146307b20bb0e8d6311e329966884d13"},

      {Len: 112 / 8,
       Msg: util.hexToString("6d3ee90413b0a7cbf69e5e6144ca"),
       MD: "a7241a703aaf0d53fe142f86bf2e849251fa8dff"},

      {Len: 120 / 8,
       Msg: util.hexToString("fae24d56514efcb530fd4802f5e71f"),
       MD: "400f53546916d33ad01a5e6df66822dfbdc4e9e6"},

      {Len: 128 / 8,
       Msg: util.hexToString("c5a22dd6eda3fe2bdc4ddb3ce6b35fd1"),
       MD: "fac8ab93c1ae6c16f0311872b984f729dc928ccd"},

      {Len: 136 / 8,
       Msg: util.hexToString("d98cded2adabf08fda356445c781802d95"),
       MD: "fba6d750c18da58f6e2aab10112b9a5ef3301b3b"},

      {Len: 144 / 8,
       Msg: util.hexToString("bcc6d7087a84f00103ccb32e5f5487a751a2"),
       MD: "29d27c2d44c205c8107f0351b05753ac708226b6"},

      {Len: 152 / 8,
       Msg: util.hexToString("36ecacb1055434190dbbc556c48bafcb0feb0d"),
       MD: "b971bfc1ebd6f359e8d74cb7ecfe7f898d0ba845"},

      {Len: 160 / 8,
       Msg: util.hexToString("5ff9edb69e8f6bbd498eb4537580b7fba7ad31d0"),
       MD: "96d08c430094b9fcc164ad2fb6f72d0a24268f68"},

      {Len: 168 / 8,
       Msg: util.hexToString("c95b441d8270822a46a798fae5defcf7b26abace36"),
       MD: "a287ea752a593d5209e287881a09c49fa3f0beb1"},

      {Len: 176 / 8,
       Msg: util.hexToString("83104c1d8a55b28f906f1b72cb53f68cbb097b44f860"),
       MD: "a06c713779cbd88519ed4a585ac0cb8a5e9d612b"},

      {Len: 184 / 8,
       Msg: util.hexToString("755175528d55c39c56493d697b790f099a5ce741f7754b"),
       MD: "bff7d52c13a3688132a1d407b1ab40f5b5ace298"},

      {Len: 192 / 8,
       Msg: util.hexToString("088fc38128bbdb9fd7d65228b3184b3faac6c8715f07272f"),
       MD: "c7566b91d7b6f56bdfcaa9781a7b6841aacb17e9"},

      {Len: 200 / 8,
       Msg: util.hexToString("a4a586eb9245a6c87e3adf1009ac8a49f46c07e14185016895"),
       MD: "ffa30c0b5c550ea4b1e34f8a60ec9295a1e06ac1"},

      {Len: 208 / 8,
       Msg: util.hexToString("8e7c555270c006092c2a3189e2a526b873e2e269f0fb28245256"),
       MD: "29e66ed23e914351e872aa761df6e4f1a07f4b81"},

      {Len: 216 / 8,
       Msg: util.hexToString("a5f3bfa6bb0ba3b59f6b9cbdef8a558ec565e8aa3121f405e7f2f0"),
       MD: "b28cf5e5b806a01491d41f69bd9248765c5dc292"},

      {Len: 224 / 8,
       Msg: util.hexToString("589054f0d2bd3c2c85b466bfd8ce18e6ec3e0b87d944cd093ba36469"),
       MD: "60224fb72c46069652cd78bcd08029ef64da62f3"},

      {Len: 232 / 8,
       Msg: util.hexToString("a0abb12083b5bbc78128601bf1cbdbc0fdf4b862b24d899953d8da0ff3"),
       MD: "b72c4a86f72608f24c05f3b9088ef92fba431df7"},

      {Len: 240 / 8,
       Msg: util.hexToString("82143f4cea6fadbf998e128a8811dc75301cf1db4f079501ea568da68eeb"),
       MD: "73779ad5d6b71b9b8328ef7220ff12eb167076ac"},

      {Len: 248 / 8,
       Msg: util.hexToString("9f1231dd6df1ff7bc0b0d4f989d048672683ce35d956d2f57913046267e6f3"),
       MD: "a09671d4452d7cf50015c914a1e31973d20cc1a0"},

      {Len: 256 / 8,
       Msg: util.hexToString("041c512b5eed791f80d3282f3a28df263bb1df95e1239a7650e5670fc2187919"),
       MD: "e88cdcd233d99184a6fd260b8fca1b7f7687aee0"},

      {Len: 264 / 8,
       Msg: util.hexToString("17e81f6ae8c2e5579d69dafa6e070e7111461552d314b691e7a3e7a4feb3fae418"),
       MD: "010def22850deb1168d525e8c84c28116cb8a269"},

      {Len: 272 / 8,
       Msg: util.hexToString("d15976b23a1d712ad28fad04d805f572026b54dd64961fda94d5355a0cc98620cf77"),
       MD: "aeaa40ba1717ed5439b1e6ea901b294ba500f9ad"},

      {Len: 280 / 8,
       Msg: util.hexToString("09fce4d434f6bd32a44e04b848ff50ec9f642a8a85b37a264dc73f130f22838443328f"),
       MD: "c6433791238795e34f080a5f1f1723f065463ca0"},

      {Len: 288 / 8,
       Msg: util.hexToString("f17af27d776ec82a257d8d46d2b46b639462c56984cc1be9c1222eadb8b26594a25c709d"),
       MD: "e21e22b89c1bb944a32932e6b2a2f20d491982c3"},

      {Len: 296 / 8,
       Msg: util.hexToString("b13ce635d6f8758143ffb114f2f601cb20b6276951416a2f94fbf4ad081779d79f4f195b22"),
       MD: "575323a9661f5d28387964d2ba6ab92c17d05a8a"},

      {Len: 304 / 8,
       Msg: util.hexToString("5498793f60916ff1c918dde572cdea76da8629ba4ead6d065de3dfb48de94d234cc1c5002910"),
       MD: "feb44494af72f245bfe68e86c4d7986d57c11db7"},

      {Len: 312 / 8,
       Msg: util.hexToString("498a1e0b39fa49582ae688cd715c86fbaf8a81b8b11b4d1594c49c902d197c8ba8a621fd6e3be5"),
       MD: "cff2290b3648ba2831b98dde436a72f9ebf51eee"},

      {Len: 320 / 8,
       Msg: util.hexToString("3a36ae71521f9af628b3e34dcb0d4513f84c78ee49f10416a98857150b8b15cb5c83afb4b570376e"),
       MD: "9b4efe9d27b965905b0c3dab67b8d7c9ebacd56c"},

      {Len: 328 / 8,
       Msg: util.hexToString("dcc76b40ae0ea3ba253e92ac50fcde791662c5b6c948538cffc2d95e9de99cac34dfca38910db2678f"),
       MD: "afedb0ff156205bcd831cbdbda43db8b0588c113"},

      {Len: 336 / 8,
       Msg: util.hexToString("5b5ec6ec4fd3ad9c4906f65c747fd4233c11a1736b6b228b92e90cddabb0c7c2fcf9716d3fad261dff33"),
       MD: "8deb1e858f88293a5e5e4d521a34b2a4efa70fc4"},

      {Len: 344 / 8,
       Msg: util.hexToString("df48a37b29b1d6de4e94717d60cdb4293fcf170bba388bddf7a9035a15d433f20fd697c3e4c8b8c5f590ab"),
       MD: "95cbdac0f74afa69cebd0e5c7defbc6faf0cbeaf"},

      {Len: 352 / 8,
       Msg: util.hexToString("1f179b3b82250a65e1b0aee949e218e2f45c7a8dbfd6ba08de05c55acfc226b48c68d7f7057e5675cd96fcfc"),
       MD: "f0307bcb92842e5ae0cd4f4f14f3df7f877fbef2"},

      {Len: 360 / 8,
       Msg: util.hexToString("ee3d72da3a44d971578972a8e6780ce64941267e0f7d0179b214fa97855e1790e888e09fbe3a70412176cb3b54"),
       MD: "7b13bb0dbf14964bd63b133ac85e22100542ef55"},

      {Len: 368 / 8,
       Msg: util.hexToString("d4d4c7843d312b30f610b3682254c8be96d5f6684503f8fbfbcd15774fc1b084d3741afb8d24aaa8ab9c104f7258"),
       MD: "c314d2b6cf439be678d2a74e890d96cfac1c02ed"},

      {Len: 376 / 8,
       Msg: util.hexToString("32c094944f5936a190a0877fb9178a7bf60ceae36fd530671c5b38c5dbd5e6a6c0d615c2ac8ad04b213cc589541cf6"),
       MD: "4d0be361e410b47a9d67d8ce0bb6a8e01c53c078"},

      {Len: 384 / 8,
       Msg: util.hexToString("e5d3180c14bf27a5409fa12b104a8fd7e9639609bfde6ee82bbf9648be2546d29688a65e2e3f3da47a45ac14343c9c02"),
       MD: "e5353431ffae097f675cbf498869f6fbb6e1c9f2"},

      {Len: 392 / 8,
       Msg: util.hexToString("e7b6e4b69f724327e41e1188a37f4fe38b1dba19cbf5a7311d6e32f1038e97ab506ee05aebebc1eed09fc0e357109818b9"),
       MD: "b8720a7068a085c018ab18961de2765aa6cd9ac4"},

      {Len: 400 / 8,
       Msg: util.hexToString("bc880cb83b8ac68ef2fedc2da95e7677ce2aa18b0e2d8b322701f67af7d5e7a0d96e9e33326ccb7747cfff0852b961bfd475"),
       MD: "b0732181568543ba85f2b6da602b4b065d9931aa"},

      {Len: 408 / 8,
       Msg: util.hexToString("235ea9c2ba7af25400f2e98a47a291b0bccdaad63faa2475721fda5510cc7dad814bce8dabb611790a6abe56030b798b75c944"),
       MD: "9c22674cf3222c3ba921672694aafee4ce67b96b"},

      {Len: 416 / 8,
       Msg: util.hexToString("07e3e29fed63104b8410f323b975fd9fba53f636af8c4e68a53fb202ca35dd9ee07cb169ec5186292e44c27e5696a967f5e67709"),
       MD: "d128335f4cecca9066cdae08958ce656ff0b4cfc"},

      {Len: 424 / 8,
       Msg: util.hexToString("65d2a1dd60a517eb27bfbf530cf6a5458f9d5f4730058bd9814379547f34241822bf67e6335a6d8b5ed06abf8841884c636a25733f"),
       MD: "0b67c57ac578de88a2ae055caeaec8bb9b0085a0"},

      {Len: 432 / 8,
       Msg: util.hexToString("dcc86b3bd461615bab739d8daafac231c0f462e819ad29f9f14058f3ab5b75941d4241ea2f17ebb8a458831b37a9b16dead4a76a9b0e"),
       MD: "c766f912a89d4ccda88e0cce6a713ef5f178b596"},

      {Len: 440 / 8,
       Msg: util.hexToString("4627d54f0568dc126b62a8c35fb46a9ac5024400f2995e51635636e1afc4373dbb848eb32df23914230560b82477e9c3572647a7f2bb92"),
       MD: "9aa3925a9dcb177b15ccff9b78e70cf344858779"},

      {Len: 448 / 8,
       Msg: util.hexToString("ba531affd4381168ef24d8b275a84d9254c7f5cc55fded53aa8024b2c5c5c8aa7146fe1d1b83d62b70467e9a2e2cb67b3361830adbab28d7"),
       MD: "4811fa30042fc076acf37c8e2274d025307e5943"},

      {Len: 456 / 8,
       Msg: util.hexToString("8764dcbcf89dcf4282eb644e3d568bdccb4b13508bfa7bfe0ffc05efd1390be22109969262992d377691eb4f77f3d59ea8466a74abf57b2ef4"),
       MD: "6743018450c9730761ee2b130df9b91c1e118150"},

      {Len: 464 / 8,
       Msg: util.hexToString("497d9df9ddb554f3d17870b1a31986c1be277bc44feff713544217a9f579623d18b5ffae306c25a45521d2759a72c0459b58957255ab592f3be4"),
       MD: "71ad4a19d37d92a5e6ef3694ddbeb5aa61ada645"},

      {Len: 472 / 8,
       Msg: util.hexToString("72c3c2e065aefa8d9f7a65229e818176eef05da83f835107ba90ec2e95472e73e538f783b416c04654ba8909f26a12db6e5c4e376b7615e4a25819"),
       MD: "a7d9dc68dacefb7d6116186048cb355cc548e11d"},

      {Len: 480 / 8,
       Msg: util.hexToString("7cc9894454d0055ab5069a33984e2f712bef7e3124960d33559f5f3b81906bb66fe64da13c153ca7f5cabc89667314c32c01036d12ecaf5f9a78de98"),
       MD: "142e429f0522ba5abf5131fa81df82d355b96909"},

      {Len: 488 / 8,
       Msg: util.hexToString("74e8404d5a453c5f4d306f2cfa338ca65501c840ddab3fb82117933483afd6913c56aaf8a0a0a6b2a342fc3d9dc7599f4a850dfa15d06c61966d74ea59"),
       MD: "ef72db70dcbcab991e9637976c6faf00d22caae9"},

      {Len: 496 / 8,
       Msg: util.hexToString("46fe5ed326c8fe376fcc92dc9e2714e2240d3253b105adfbb256ff7a19bc40975c604ad7c0071c4fd78a7cb64786e1bece548fa4833c04065fe593f6fb10"),
       MD: "f220a7457f4588d639dc21407c942e9843f8e26b"},

      {Len: 504 / 8,
       Msg: util.hexToString("836dfa2524d621cf07c3d2908835de859e549d35030433c796b81272fd8bc0348e8ddbc7705a5ad1fdf2155b6bc48884ac0cd376925f069a37849c089c8645"),
       MD: "ddd2117b6e309c233ede85f962a0c2fc215e5c69"},

      {Len: 512 / 8,
       Msg: util.hexToString("7e3a4c325cb9c52b88387f93d01ae86d42098f5efa7f9457388b5e74b6d28b2438d42d8b64703324d4aa25ab6aad153ae30cd2b2af4d5e5c00a8a2d0220c6116"),
       MD: "a3054427cdb13f164a610b348702724c808a0dcc"}

    ];

    test_digest(sha1shortmsg, sha.sha1);
    next();

  });


  // NIST test vectors, see http://csrc.nist.gov/groups/STM/cavp/index.html#03
  // CAVS 5.0
  // "SHA-256 ShortMsg" information for "s"
  // SHA-256 tests are configured for BYTE oriented implementations
  test("SHA256 ShortMsg CAVS 5.0", function (next) {

    var sha256shortmsg = [
      {Len: 0 / 8,
       Msg: "",
       MD:  "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"},

      {Len: 8 / 8,
       Msg: "\xbd",
       MD:  "68325720aabd7c82f30f554b313d0570c95accbb7dc4b5aae11204c08ffe732b"},

      {Len: 24 / 8,
       Msg: util.hexToString("b0bd69"),
       MD: "4096804221093ddccfbf46831490ea63e9e99414858f8d75ff7f642c7ca61803"},

      {Len: 32 / 8,
       Msg: util.hexToString("c98c8e55"),
       MD: "7abc22c0ae5af26ce93dbb94433a0e0b2e119d014f8e7f65bd56c61ccccd9504"},

      {Len: 40 / 8,
       Msg: util.hexToString("81a723d966"),
       MD: "7516fb8bb11350df2bf386bc3c33bd0f52cb4c67c6e4745e0488e62c2aea2605"},

      {Len: 48 / 8,
       Msg: util.hexToString("c97a2db566e5"),
       MD: "0eb0281b27a4604709b0513b43ad29fdcff9a7a958554abc689d7fe35af703e4"},

      {Len: 56 / 8,
       Msg: util.hexToString("f53210aa6ed72e"),
       MD: "dee684641421d1ba5a65c71f986a117cbb3d619a052a0b3409306c629575c00f"},

      {Len: 64 / 8,
       Msg: util.hexToString("0df1cd526b5a4edd"),
       MD: "47f527210d6e8f940b5082fec01b7305908fa2b49ea3ae597c19a3986097153c"},

      {Len: 72 / 8,
       Msg: util.hexToString("b80233e2c53ab32cc3"),
       MD: "c60d239cc6da3ad31f4de0c2d58a73ccf3f9279e504fa60ad55a31dcf686f3ca"},

      {Len: 80 / 8,
       Msg: util.hexToString("5d54ed5b52d879aeb5dd"),
       MD: "e0164d90dbfcf173bb88044fac596ccd03b8d247c79907aaa5701767fad7b576"},

      {Len: 88 / 8,
       Msg: util.hexToString("df866ecb67ab00515f6247"),
       MD: "dc990ef3109a7bcf626199db9ab7801213ceb0ad2ee398963b5061e39c05c7b5"},

      {Len: 96 / 8,
       Msg: util.hexToString("0757de9485a2eaea51126077"),
       MD: "c1c9a4daadcc8678835872c7f1f8824376ac7b412e1fc2285069b41afd51397e"},

      {Len: 104 / 8,
       Msg: util.hexToString("7c66f5d443c11cfb39dd0aa715"),
       MD: "6840619417b4d8ecaa7902f8eaf2e82be2638dec97cb7e8fcc377007cc176718"},

      {Len: 112 / 8,
       Msg: util.hexToString("329624fed35639fe54957b7d47a9"),
       MD: "0f5308ff22b828e18bd65afbc427e3c1a678962832519df5f2f803f68f55e10b"},

      {Len: 120 / 8,
       Msg: util.hexToString("c34e59652acc043873ecf6a4ab1060"),
       MD: "0fdf1604ac0d717ec9587b4de5444aaade807589d90eb326eaf6acb58a051e79"},

      {Len: 128 / 8,
       Msg: util.hexToString("fdf4700984ee11b70af1880d0e0fefd4"),
       MD: "b01ae16eed3b4a770f127b98469ba26fe3d8e9f59d8a2983214afe6cff0e6b6c"},

      {Len: 136 / 8,
       Msg: util.hexToString("ea40aadbefedb0e0d78d067c6cd65c2c87"),
       MD: "36157bbe61931d58a3a644953eaf131bbc2591c673a1f20353f51ca5054fc1c2"},

      {Len: 144 / 8,
       Msg: util.hexToString("6d1092004670efab3af483d265d8e7b3da73"),
       MD: "67fbf35d360d72b101410794ccf197106c0e784afa9c80206a550b600dbf1f16"},

      {Len: 152 / 8,
       Msg: util.hexToString("55a10148ae7b09ac4e71df438135bc70e873eb"),
       MD: "cbe7965513af46dfd596dc5839cb82a5c6c7328034b1dd0042a9f4b71fb14430"},

      {Len: 160 / 8,
       Msg: util.hexToString("a03f8fcd777bd933b4b0af8c5ce3d61308565649"),
       MD: "ddfce4e8c7b38845e2a81b7fc27a06366467a9e111316014013f9701e2413ce0"},

      {Len: 168 / 8,
       Msg: util.hexToString("8e5d6cba8d4b206381e33ca7339bec504f3d6119ba"),
       MD: "92f678a3e59d0dd3610eec3222b8c6ebd28eead530723fbd226747534da22b6c"},

      {Len: 176 / 8,
       Msg: util.hexToString("96db1b62eed85f2628d0c25da534401fe80d13d09beb"),
       MD: "725bab4457c789d6a4cc4736b9c2c662cda18407150844d74d6aa4efd72dbb05"},

      {Len: 184 / 8,
       Msg: util.hexToString("1c482a45dfbcda549729126b533477edfaf7476fde498f"),
       MD: "6523f24f225b996aad1a8b317e6e0f8e97673dcff3fd62a27ff9f3888ea1302d"},

      {Len: 192 / 8,
       Msg: util.hexToString("0f677d8e4c6d6a057492670d99adb870adf68a36ead37919"),
       MD: "44acbbc6b48bf37ee088b9c8546fc46e5a5f0d637b5e444f628de186144087fd"},

      {Len: 200 / 8,
       Msg: util.hexToString("c09056d597816542bffe4bb33e475dfb2d6293016906ddc18c"),
       MD: "f4baeaef70588a0820d63c2401dd84f98adf7366782d196f8698d7dfd3db1c29"},

      {Len: 208 / 8,
       Msg: util.hexToString("72f313fdcf52d0749c9937cc2e53f50b44d65a544876bab7d2f8"),
       MD: "cfa67aa52fd675fca985f69f9ca58af62baead8c39723bb6bfbae8a5d4bb9beb"},

      {Len: 216 / 8,
       Msg: util.hexToString("09f6fe6cbe6744149f792a4a827e4e8909627abf75301bf7bbd7f5"),
       MD: "657633891dc6274d6aeda78e7313dfb960eac9a24d29293a057b9746a18de4ec"},

      {Len: 224 / 8,
       Msg: util.hexToString("9e1cfeb335bc331744247df4bbd56876a7f69298aaf6b9e7a8731889"),
       MD: "930058dd21cb48b2cf90eaca55322ddf48582687838a584928440504a2fde578"},

      {Len: 232 / 8,
       Msg: util.hexToString("b8913001efb1b7f4bd975e349c5b2cbe66045bf0d2fb019b3bc0f059a4"),
       MD: "a0eb0b7fad1d1b6de4f9096724a621720538a9c3f2f6d11134d68cb9ee52fc88"},

      {Len: 240 / 8,
       Msg: util.hexToString("8f08537d50928c911a68b071d65b9e8f038264d3b62c5f33de18a484cde9"),
       MD: "10aad5cd4484387373577a881974f1a550782108bc88b4e2e8085e9c3e938bbb"},

      {Len: 248 / 8,
       Msg: util.hexToString("fd846162c4da936d004ffe0cbe844d940f1c2953157cf4765dceba2a6f4c64"),
       MD: "c13ba769aea0e478816f2f608b5cec3fe14672ea033088a8641cfe69b4ff57cb"},

      {Len: 256 / 8,
       Msg: util.hexToString("8cf53d90077df9a043bf8d10b470b144784411c93a4d504556834dae3ea4a5bb"),
       MD: "56059e8cb3c2978b198208bf5ca1e1ea5659b737a506324b7cec75b5ebaf057d"},

      {Len: 264 / 8,
       Msg: util.hexToString("1bbc2b15253c126e301f9f64b97be4ce13e96337687e2e78fbfd4c8daf4a5fa1cd"),
       MD: "d973b5dcdae4cf2599f4db4068e4aa354f22d8901adc463ca3938c465578147b"},

      {Len: 272 / 8,
       Msg: util.hexToString("c1bdb3bfc65dfe9a393331266c58d05fb9c8b7476bb717dadc29bc43dabd91504fc9"),
       MD: "57844e1d762e6b7bb86dbfcc5c5a59578d39cc665d1ddbe4de03a61778061af1"},

      {Len: 280 / 8,
       Msg: util.hexToString("26eb621a45bd9c9c764ccbb672b99f2a8379c7bbf4fb07eec58a8b0ea4747b72196ccf"),
       MD: "73dc27bd45daccd0f811381230cf7f2a1d3ed1202e9a770af733146b1e166315"},

      {Len: 288 / 8,
       Msg: util.hexToString("7e3e3986109162e0c56357048bbd86ff49b93644b7fb064e7280968650978466f02c9adf"),
      MD: "682c474799f5103252c3e2efef7f747783e514b54e93b8303b0e07ee4218f78e"},

      {Len: 296 / 8,
       Msg: util.hexToString("763c1a9ea50bd72bfc516989ddf3eff2f208f64fccea3cf0ca8dba7f3d10e237c99226510f"),
      MD: "54d6cb2b09825eab064c8952113b9897a3344737cd186a8e6be0a0b258da3e57"},

      {Len: 304 / 8,
       Msg: util.hexToString("e1a7ffea8417e7cd49b96e355fd44f3f7a150fab6dd8343dfba3b262eaf3a6175a3c4607552b"),
      MD: "83baa80caade404c446833ecef2e595bba6dce2cb7f7422fad2972a9fe327aca"},

      {Len: 312 / 8,
       Msg: util.hexToString("692a18effad8317a11a5cddb917f7389e1be6dba34572a300e52e056047e758bc363a0be53784c"),
      MD: "0c0c6a6b27a6d7a7a5130d70db3b8bc1bd8001d103efe72f45b082cadbd03742"},

      {Len: 320 / 8,
       Msg: util.hexToString("73fda1e1cb7dc9a9ece858d040d7105cc126eab153fb0bb55703f4317dfff97bd980f4523aee3a09"),
      MD: "9878f8804e00828b39261843f2b3eda19a7e9b9ff4cc2e23f7ea1f62f4491ff2"},

      {Len: 328 / 8,
       Msg: util.hexToString("2321d88c19e3e6a8309a09a5428c01991e16446823f13b2f0db4ade30e9a7c3521868fb99b440f4802"),
      MD: "f1bd3a8a74c8f0093038499ef63794d86fc6d82602a802a435718e61e7b396cc"},

      {Len: 336 / 8,
       Msg: util.hexToString("b9eaebda29172b052bcc1e3a9c7f2eced43c084a86f89f61e7237425137c167aac29e4cac4071afafd3f"),
      MD: "ea43ec91285145d8f29915b227a0e35c89f90d968f9a14332dad275cfd52d619"},

      {Len: 344 / 8,
       Msg: util.hexToString("332daf07d3a6775b18572549a6e12b8a27d81b7c4abcc5bd0b2b9ff936546b0026af131cd3ecd8a10c29ab"),
      MD: "a573959ba6b1c3bebfd6288c806b72a65650d23bd46d123816a2a6a0e47d1e66"},

      {Len: 352 / 8,
       Msg: util.hexToString("30ac7eace1f2e41034c25a3d3e2db979c23dfaa7a4914b0da147625b3e1f12e9fedc1c41d8ee47dde84fb332"),
      MD: "c0c3f40d34e711bfadf517b3a78140e379fba5f7edf2c1bc3ce82469dae4d2d5"},

      {Len: 360 / 8,
       Msg: util.hexToString("02c3964c4ad9c4af97d373099302c2cd770ad06c7d8bd11c970161d861e917a854265e223da28031ee38041534"),
      MD: "c13c622bf08a3d3cf1fd6fa5e26e505e551b1643bc5a0f59ed29541235218f77"},

      {Len: 368 / 8,
       Msg: util.hexToString("b9eed82edcf0c7ba69f6f6ac5722cb61daecaf30437511582117ad36ad410ebc6582511ef6e32dce5f7a30ab543c"),
      MD: "6ac64caaeda4763d28a44b363823a6b819285410fb4162af6ca657396f6028d0"},

      {Len: 376 / 8,
       Msg: util.hexToString("b574865024828bf651df070ac0cec1849aa6470901d2e30fa01dcb43862d9827344cf900f46fa9ef6d709e5e759f84"),
      MD: "4c839e8f8f373c25a9a3351257c6152258ff8e6a88dad42f30f2bbecab56c20b"},

      {Len: 384 / 8,
       Msg: util.hexToString("eebcf5cd6b12c90db64ff71a0e08ccd956e170a50dad769480d6b1fb3eff4934cde90f9e9b930ee637a66285c10f4e8a"),
      MD: "c117b9dce689c399ec99008788cd5d24d8396fab7d96315c4f3fe6d56da63bb3"},

      {Len: 392 / 8,
       Msg: util.hexToString("1b7a73770d168da45bf2e512eee45153e02f4dfe3b42e50304a3d63d7826f0469562be8fdc6569b056a7dafcd53d1f597c"),
      MD: "0b42cfc3dd3d3198f06c30e087837ec6a6dd35d08e54e886c682709f8f42457a"},

      {Len: 400 / 8,
       Msg: util.hexToString("0072ae2f3bda67736b9c66e2130260b3a4847bc3968e037cb6835efcc2014273336725cd5a94f592aef20a0a65b459a4415b"),
      MD: "217cf25b8b343c28336b1c1e9bed29e0c96045bc93daf426e490b608b0905c90"},

      {Len: 408 / 8,
       Msg: util.hexToString("2ac748680f3bc1bf098c4be38c7194643b0d009e51c43630404cdfaf9807aa9b299094916c9466c31fe37fa630c6d3eadc9434"),
      MD: "3ea59e2e79513679a22e962f22408306f7e8f6e562c2f1f210e279fad8eaacc6"},

      {Len: 416 / 8,
       Msg: util.hexToString("893d1a8863d234ee50e5a8c7650a4de047230ad03d268dde8921401ff97b79dfb97cf2426b0f782b79c7e75daa2155e1f4098ea7"),
      MD: "f7808e03e5d5af43c2bffb66e35d1ecbd79f4d8fec44f821f73a235d17c70a89"},

      {Len: 424 / 8,
       Msg: util.hexToString("cf673b96eaf241cfa3e262dc6fe65f08bcc2be56d8a2c9710eaddae212ded6859f0ff83e5e57d0e80a968b8ed24e74defeb5bbdad6"),
      MD: "9bdb7cf0492ace4620a47660acd127f951767b0738b5504451d6ed56e4fa3cbd"},

      {Len: 432 / 8,
       Msg: util.hexToString("0d545be1f47b966214691c21278704e89a17d52dd96aeeeacc5325a9a1ddafdecd39407a4dfa72bd32856b4c5cc2ba838618830c8399"),
      MD: "ad53e0db7e63211c8b00947908ce29660c4376e244e19cd30a659af65dc6f1fe"},

      {Len: 440 / 8,
       Msg: util.hexToString("9eabfcd3603337df3dcd119d6287a9bc8bb94d650ef29bcf1b32e60d425adc2a35e06577d0c7ce2456cf260efee9e8d8aeeddb3d068f37"),
      MD: "83eeed2dfeb8d2604ab5ec1ac9b5dcab8cc2222518468bc5c24c16ce72e70687"},

      {Len: 448 / 8,
       Msg: util.hexToString("2fc7b9e8b8dcaac64ecef4c5f91877543ac36ae494d9faf84b1d347b6cf925570db84043d6f500dcc153cef81d6f2437d913f3dbffad42d9"),
      MD: "6ef7e9f12267ebc4901267da147effdcdebcd6ec5393c7f62ec4c4f06ca72649"},

      {Len: 456 / 8,
       Msg: util.hexToString("cf95929ab732f9ef5e8c3e6b4ed753852ee74e4fddf31b56c29a6ec95d23fcde2209eb7288b787f05d9036735c32ae2f01fc650d9cce4995a5"),
      MD: "3e5854169da065407fa465a4694f3fcb1d141480a8f84c970a0f63364ec8f590"},

      {Len: 464 / 8,
       Msg: util.hexToString("826378013988684c40f4d917c7ed8b72aba66fd68f085d0b2eb20948ef3f349dbbc71f8e0ba845014586495a48902ee44505c673d2f76d473950"),
      MD: "5b506b823ef6658939aca22f52bbe5a4b849c31b8fa1d09139352e501137bc04"},

      {Len: 472 / 8,
       Msg: util.hexToString("0cab6d38ce9849fcbd589f7235a6d2c2cb933e26e1ca6f4e78189104452c280c069b024e162769373f409d5cd0cb8160f0239418325d23ee6ad1bd"),
      MD: "92943076cda4c46718e55df64d7580e12b8fb2c2911e87851246ccf6791fa3e6"},

      {Len: 480 / 8,
       Msg: util.hexToString("3fb4a8c5b57c14731179256608614c95c9725ddad5fbfa99111d4fa319d3015ad830601556e8e4c6d012d7da0e2c4f60f1605f6e4c058ec0f46988a3"),
      MD: "8e90da3eb146935264576f874fcc5a64b7a90ab6c8a36c15d855b0179f52f899"},

      {Len: 488 / 8,
       Msg: util.hexToString("9050a6d002c90f6036c592b0f6b866713e7894d29645f4a19e0858b3ebd8078711c26d2601ca104d962dc6ce6ae92634ee7f3ca6baf8810e2126097a09"),
      MD: "03c516677735ae83dbe5a7e4c22c1ac1bfedcd46e7dd785f8bfe38e148eda632"},

      {Len: 496 / 8,
        Msg: util.hexToString("d659ec136bacfa0b5c906aabedc93c01c5f1efa3f370a1432ea8778461703f0c67c454da12bac2da73b8abb755e5eaf10bddf52f6ca908d61bee80da0c64"),
       MD: "fff2852957a0eeb577e73fd7d827f650261dfb9a8a65f52df4bbbc9b2d0ae50e"},

      {Len: 504 / 8,
        Msg: util.hexToString("b498555658332b197bc5cb7adc5c1997aabbdcf1f7ffcc2b6b82eb0f350019d247f8e399c3559d3bb04eb049f28b344c7989c24db83f839b59028dc82fa670"),
       MD: "bfbbf242f79bff4ae0aafb4ccf69b24fdca4342d83db1dfd1822c74a9e218e8d"},

      {Len: 512 / 8,
        Msg: util.hexToString("3592ecfd1eac618fd390e7a9c24b656532509367c21a0eac1212ac83c0b20cd896eb72b801c4d212c5452bbbf09317b50c5c9fb1997553d2bbc29bb42f5748ad"),
       MD: "105a60865830ac3a371d3843324d4bb5fa8ec0e02ddaa389ad8da4f10215c454"}

    ];

    test_digest(sha256shortmsg, sha.sha256);
    next();

  });


  function test_hmac(testvectors, hmacfunc) {
    for (var i = 0; i < testvectors.length; i++) {
      var testcase = testvectors[i];
      print("test_case = " + testcase.test_case);
      equals(testcase.key.length, testcase.key_len);
      equals(testcase.data.length, testcase.data_len);
      equals(util.stringToHex(hmacfunc(testcase.key, testcase.data)),
             testcase.digest);
    }
  }

  // See RFC 2202, Section 3
  test("HMAC-SHA1 (RFC-2202)", function (next) {

    var rfc2202 = [

    {test_case:     1,
     key:           util.hexToString("0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b"),
     key_len:       20,
     data:          "Hi There",
     data_len:      8,
     digest:        "b617318655057264e28bc0b6fb378c8ef146be00"},

    {test_case:     2,
     key:           "Jefe",
     key_len:       4,
     data:          "what do ya want for nothing?",
     data_len:      28,
     digest:        "effcdf6ae5eb2fa2d27416d5f184df9c259a7c79"},

    {test_case:     3,
     key:           util.hexToString("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"),
     key_len:       20,
     data:          repeated(0xdd, 50),
     data_len:      50,
     digest:        "125d7342b9ac11cd91a39af48aa17b4f63f175d3"},

    {test_case:     4,
     key:           util.hexToString("0102030405060708090a0b0c0d0e0f10111213141516171819"),
     key_len:       25,
     data:          repeated(0xcd, 50),
     data_len:      50,
     digest:        "4c9007f4026250c6bc8414f9bf50c86c2d7235da"},

    {test_case:     5,
     key:           util.hexToString("0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c"),
     key_len:       20,
     data:          "Test With Truncation",
     data_len:      20,
     digest:        "4c1a03424b55e07fe7f27be1d58bb9324a9a5a04",
     digest_96:     "4c1a03424b55e07fe7f27be1"},

    {test_case:     6,
     key:           repeated(0xaa, 80),
     key_len:       80,
     data:          "Test Using Larger Than Block-Size Key - Hash Key First",
     data_len:      54,
     digest:        "aa4ae5e15272d00e95705637ce8a3b55ed402112"},

     {test_case:     7,
      key:           repeated(0xaa, 80),
      key_len:       80,
      data:          "Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data",
      data_len:      73,
      digest:        "e8e99d0f45237d786d6bbaa7965c7808bbff1a91"},

     {test_case:     7.1,
      key:           repeated(0xaa, 80),
      key_len:       80,
      data:          "Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data".substr(0, 20),
      data_len:      20,
      digest:        "4c1a03424b55e07fe7f27be1d58bb9324a9a5a04",
      digest_96:     "4c1a03424b55e07fe7f27be1"}

    ];

    test_hmac(rfc2202, sha.hmac_sha1);
    next();

  });

  test("HMAC-SHA256 (RFC-4231)", function (next) {

    var rfc4231 = [

    {test_case:     1,
     key:           util.hexToString("0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b"),
     key_len:       20,
     data:          "Hi There",
     data_len:      8,
     digest:        "b0344c61d8db38535ca8afceaf0bf12b881dc200c9833da726e9376c2e32cff7"},

    // Test with a key shorter than the length of the HMAC output.
    {test_case:     2,
     key:           "Jefe",
     key_len:       4,
     data:          "what do ya want for nothing?",
     data_len:      28,
     digest:        "5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843"},

    // Test with a combined length of key and data that is larger than 64
    // bytes (= block-size of SHA-224 and SHA-256).
    {test_case:     3,
     key:           util.hexToString("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"),
     key_len:       20,
     data:          repeated(0xdd, 50),
     data_len:      50,
     digest:        "773ea91e36800e46854db8ebd09181a72959098b3ef8c122d9635514ced565fe"},

    // Test with a combined length of key and data that is larger than 64
    // bytes (= block-size of SHA-224 and SHA-256).
    {test_case:     4,
     key:           util.hexToString("0102030405060708090a0b0c0d0e0f10111213141516171819"),
     key_len:       25,
     data:          repeated(0xcd, 50),
     data_len:      50,
     digest:        "82558a389a443c0ea4cc819899f2083a85f0faa3e578f8077a2e3ff46729665b"},

    // Test with a truncation of output to 128 bits.
    {test_case:     5,
     key:           util.hexToString("0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c"),
     key_len:       20,
     data:          "Test With Truncation",
     data_len:      20,
     digest:        "a3b6167473100ee06e0c796c2955552bfa6f7c0a6a8aef8b93f860aab0cd20c5",
     digest_128:    "a3b6167473100ee06e0c796c2955552b"},

    // Test with a key larger than 128 bytes (= block-size of SHA-384 and
    // SHA-512).
    {test_case:     6,
     key:           repeated(0xaa, 131),
     key_len:       131,
     data:          "Test Using Larger Than Block-Size Key - Hash Key First",
     data_len:      54,
     digest:        "60e431591ee0b67f0d8a26aacbf5b77f8e0bc6213728c5140546040f0ee37f54"},

    // Test with a key and data that is larger than 128 bytes (= block-size
    // of SHA-384 and SHA-512).
    {test_case:     7,
     key:           repeated(0xaa, 131),
     key_len:       131,
     data:          "This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.",
     data_len:      152,
     digest:        "9b09ffa71b942fcb27635fbcd5b0e944bfdc63644f0713938a7f51535c3a35e2"}

    ];

    test_hmac(rfc4231, sha.hmac_sha256);
    next();
  });

});

runTests();
