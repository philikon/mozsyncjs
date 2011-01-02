
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

      {Len: 1 / 8,
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
