/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "22c907de37d0a8c203eea4d621f1e859"
  },
  {
    "url": "assets/css/0.styles.98a87d8e.css",
    "revision": "e873672835dac8dedd05eb381a6a983e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d5f60888.js",
    "revision": "40e00d1009a00ca73ea4ecc3462bff3a"
  },
  {
    "url": "assets/js/100.b1a8a132.js",
    "revision": "789b9e1c294751ff05751333253c7205"
  },
  {
    "url": "assets/js/101.37389980.js",
    "revision": "8193203ef9d870e6c33611f4ea2ae85a"
  },
  {
    "url": "assets/js/102.d7942525.js",
    "revision": "9c315f67e7179a3fc3e43146fe755835"
  },
  {
    "url": "assets/js/103.34236290.js",
    "revision": "d4591bfd31d9b9100a72eebf778213f2"
  },
  {
    "url": "assets/js/104.582e1292.js",
    "revision": "e094d55b03b3b66ee9f052242525a1bf"
  },
  {
    "url": "assets/js/105.6378cfd0.js",
    "revision": "572a106352f7f4bb64dd416d5b85590b"
  },
  {
    "url": "assets/js/106.f9585567.js",
    "revision": "9d9b759498c7708147701d0ffbfe17a6"
  },
  {
    "url": "assets/js/107.44450759.js",
    "revision": "60d618a79e86b838b9200808abdc1020"
  },
  {
    "url": "assets/js/108.ab161b4a.js",
    "revision": "6025c76dfd230daa87686cd8b69b8bca"
  },
  {
    "url": "assets/js/109.508e26b3.js",
    "revision": "255a6ebda6578e53ca85e91ba9912170"
  },
  {
    "url": "assets/js/11.3555955e.js",
    "revision": "65228996bb5d991cf27b1b8f7713558b"
  },
  {
    "url": "assets/js/110.a348b470.js",
    "revision": "7ceb1d8a8e6075c216a2644a85505ea7"
  },
  {
    "url": "assets/js/111.b019a78b.js",
    "revision": "9a2b36fd5bb766cf9be7e427feed2a59"
  },
  {
    "url": "assets/js/112.9b64d1d9.js",
    "revision": "d7effd8f4760a4581708f239ea55e11c"
  },
  {
    "url": "assets/js/113.62ad55b8.js",
    "revision": "4e9da9101822586729c5e56367eded1e"
  },
  {
    "url": "assets/js/114.936aa828.js",
    "revision": "bddc26f6938038355e888686cdd4ebda"
  },
  {
    "url": "assets/js/115.54e3c17a.js",
    "revision": "6d34e5faaec0bc53cd48fb1e1f2a06a5"
  },
  {
    "url": "assets/js/116.6e09ca1a.js",
    "revision": "15f1487d0b28fa79afb4dd0e3c80e5c8"
  },
  {
    "url": "assets/js/117.a022537e.js",
    "revision": "e8185b89dc4fc611a19eea379da2371b"
  },
  {
    "url": "assets/js/118.f9bc1a93.js",
    "revision": "191c01592cda20f373adeec8795a6d52"
  },
  {
    "url": "assets/js/119.23a93a82.js",
    "revision": "ec693ecaa0452f6db10cbb398d3530f6"
  },
  {
    "url": "assets/js/12.766ff7ba.js",
    "revision": "b237d3882cb47874f8e17706e81fc493"
  },
  {
    "url": "assets/js/120.40258e3f.js",
    "revision": "d83310590cb6ffad189c5e52167c9d81"
  },
  {
    "url": "assets/js/121.3fa08752.js",
    "revision": "9df01742a84699523e748ad331f62c77"
  },
  {
    "url": "assets/js/122.9a0b1d04.js",
    "revision": "c5fd97ec52f3ff8bc80f9c07ea956604"
  },
  {
    "url": "assets/js/123.b9dcdf7e.js",
    "revision": "75d756884305ccf6045f96c2e8a57499"
  },
  {
    "url": "assets/js/124.e209f2f8.js",
    "revision": "c11f2a64f81980a6315343b4c04f2ad5"
  },
  {
    "url": "assets/js/125.1e515d6c.js",
    "revision": "9983c88dff0425e31b2e7210402f7d3d"
  },
  {
    "url": "assets/js/126.64bce778.js",
    "revision": "949aef0e51e903cb53664136367a049f"
  },
  {
    "url": "assets/js/127.97d278e2.js",
    "revision": "502ba0084d58f4cbb8edc80febb308bb"
  },
  {
    "url": "assets/js/128.09d8c00b.js",
    "revision": "5e3a1484f57382e778666bf2f8b3d834"
  },
  {
    "url": "assets/js/129.e6f29053.js",
    "revision": "3706d28751bb359cd076e79a7b3c52dd"
  },
  {
    "url": "assets/js/13.fac4f6d6.js",
    "revision": "553ac38328ea9f59b63f88129d33fb10"
  },
  {
    "url": "assets/js/130.6abb1454.js",
    "revision": "4b2f8a098062891e753cfc7c78422484"
  },
  {
    "url": "assets/js/131.4f4e4c27.js",
    "revision": "4ed4bb9b8140d9e4010e894424c790ab"
  },
  {
    "url": "assets/js/132.f536bd37.js",
    "revision": "ab1212cd52bfddd39e75c87162b939f3"
  },
  {
    "url": "assets/js/133.29d29d56.js",
    "revision": "692dc6b5edeb1541554d48dd83d1f55c"
  },
  {
    "url": "assets/js/134.deed521e.js",
    "revision": "fd13ca0a6531238ad3837cae1f7a0517"
  },
  {
    "url": "assets/js/135.3ff255a6.js",
    "revision": "11d35cc1e5e41fd7dafb3a5bb7e6e94c"
  },
  {
    "url": "assets/js/136.12cb9f8d.js",
    "revision": "c4938dff988a947ec84aefba3dd70b74"
  },
  {
    "url": "assets/js/137.41143a8a.js",
    "revision": "111f032473c14dcf96331a6317184325"
  },
  {
    "url": "assets/js/138.c37d78a6.js",
    "revision": "63c208a7441298ac3783eb316959c454"
  },
  {
    "url": "assets/js/139.5189ae43.js",
    "revision": "3b389958fb5172724846bd0cfc467b2f"
  },
  {
    "url": "assets/js/14.2e40ac6b.js",
    "revision": "5feb79a6a8d8d9b0f532fd97079005f7"
  },
  {
    "url": "assets/js/140.94baa0f0.js",
    "revision": "f15dc5144148a6285c34bdd74f8fccc0"
  },
  {
    "url": "assets/js/141.b4dadbc5.js",
    "revision": "29c0b300cc7dc331e8383b44c17a6dd5"
  },
  {
    "url": "assets/js/142.e03e94b1.js",
    "revision": "0cd39e3a3aa08573e67348d6cb655239"
  },
  {
    "url": "assets/js/143.e90743d1.js",
    "revision": "45c6edafe0e223303692536a2aa3de3f"
  },
  {
    "url": "assets/js/144.aafaf434.js",
    "revision": "2fd9bd8f51d495575228df04d8461683"
  },
  {
    "url": "assets/js/145.7d5012b6.js",
    "revision": "01532691fae65af4d2e21416c6ed96bf"
  },
  {
    "url": "assets/js/146.0deacd10.js",
    "revision": "27827b9c97ea341806fdfa6a53b05e6b"
  },
  {
    "url": "assets/js/147.3d13c9e3.js",
    "revision": "93fea74a309a1daacec9d4a6ccde34de"
  },
  {
    "url": "assets/js/148.6f88147d.js",
    "revision": "c272f9d2497ab9d4a9dfb8ce5ea395d9"
  },
  {
    "url": "assets/js/149.95def1b6.js",
    "revision": "cd5b8064f60067de10410d8d84fd3661"
  },
  {
    "url": "assets/js/15.b2915505.js",
    "revision": "49fea61483a14b765f92a87a6e3ed11b"
  },
  {
    "url": "assets/js/150.7d962e43.js",
    "revision": "9769d265c3157a4c597babb9b73bab79"
  },
  {
    "url": "assets/js/151.1c54fbeb.js",
    "revision": "494b988959d2b859702d22fd3303047e"
  },
  {
    "url": "assets/js/152.5aa8efdb.js",
    "revision": "990abd9c999ab82e6f37d3fb1c2c6fd3"
  },
  {
    "url": "assets/js/153.b674de01.js",
    "revision": "e350d334d775158212d7a85c00d76c87"
  },
  {
    "url": "assets/js/154.f03527c6.js",
    "revision": "fb1e828554fd40c88ea0ad52cefebbe3"
  },
  {
    "url": "assets/js/155.5edf756a.js",
    "revision": "5ef48f6938ce8533630b205b5be5879c"
  },
  {
    "url": "assets/js/156.1e0a9881.js",
    "revision": "291b3dd2993c5588fd88cabd5a739221"
  },
  {
    "url": "assets/js/157.eb6c2c61.js",
    "revision": "052c5f00355aa5c6a506f773f234837f"
  },
  {
    "url": "assets/js/158.4d008fb4.js",
    "revision": "bd3af2d9e0d5ec694fa43db3f06a432e"
  },
  {
    "url": "assets/js/159.a89b0f26.js",
    "revision": "21e38ad53c56d91f157283aa14ce5a06"
  },
  {
    "url": "assets/js/16.bb16761d.js",
    "revision": "8d5dc1ca023b2cd2c4329aae322dacfd"
  },
  {
    "url": "assets/js/160.7901ef3c.js",
    "revision": "05df44e9e89a98eacef943fcceda4957"
  },
  {
    "url": "assets/js/161.3d3221c9.js",
    "revision": "12e6b491f430ae742dc20e1c3e12776d"
  },
  {
    "url": "assets/js/162.f4194ac3.js",
    "revision": "601a869548c4ee7efeb30f7ffc5a5596"
  },
  {
    "url": "assets/js/163.b850217f.js",
    "revision": "882c63d9bf74b6fbbce91ab9efcd8416"
  },
  {
    "url": "assets/js/164.f1b5c079.js",
    "revision": "3f00053d6daa12bcb8503e18adf9cb1a"
  },
  {
    "url": "assets/js/165.8f63a298.js",
    "revision": "d472764915ba15a34d66809caeaae4ce"
  },
  {
    "url": "assets/js/166.15753d32.js",
    "revision": "383183ced8f0c2d7447447503385684e"
  },
  {
    "url": "assets/js/167.7d37f104.js",
    "revision": "4d0082c26fcca60b763696ac725e13e0"
  },
  {
    "url": "assets/js/168.06fdf17b.js",
    "revision": "bebc60e9259764473866f2287e467044"
  },
  {
    "url": "assets/js/169.c8dd3908.js",
    "revision": "00bf8ad697f868e5bf53b33e901c9b06"
  },
  {
    "url": "assets/js/17.02cb2578.js",
    "revision": "eb77bb9bcc0e2cdab10aaf1daf6dbf19"
  },
  {
    "url": "assets/js/170.09652d23.js",
    "revision": "2c147d46a5f4a20c25b106bf30ef0535"
  },
  {
    "url": "assets/js/171.203c6807.js",
    "revision": "cef5e0a7bd33eb1c6444189cd41fbabb"
  },
  {
    "url": "assets/js/172.9adc8899.js",
    "revision": "224e484a76b2df0c36c494190fd6eb87"
  },
  {
    "url": "assets/js/173.87f65624.js",
    "revision": "72c5077fd355922c85c79308212c3fef"
  },
  {
    "url": "assets/js/174.3b37f5d5.js",
    "revision": "d0cc1c21211d5832012daedae47cc5b9"
  },
  {
    "url": "assets/js/175.2d5b97d1.js",
    "revision": "fafe5ae426ae4165497d58796c51e16c"
  },
  {
    "url": "assets/js/176.68a31de9.js",
    "revision": "11c4b06821cc6720a621b4eae4a941bd"
  },
  {
    "url": "assets/js/177.1c2dfa30.js",
    "revision": "c5a346dcccf9254ac62c32633ac17fd5"
  },
  {
    "url": "assets/js/178.8258a3a6.js",
    "revision": "b70f62b95d45dada7e16ce793d964179"
  },
  {
    "url": "assets/js/179.62d7421a.js",
    "revision": "22f9019c9757537cd094b46d30209970"
  },
  {
    "url": "assets/js/18.f05e27b5.js",
    "revision": "53e3d864e41c7e4c03ad435aeb2c7545"
  },
  {
    "url": "assets/js/180.6d5f7d43.js",
    "revision": "2e6063d2d4bcbbb296b00ab33f362408"
  },
  {
    "url": "assets/js/181.e7da5aaa.js",
    "revision": "ddee706ba95049c3ed4c4382095f278c"
  },
  {
    "url": "assets/js/182.020a42a6.js",
    "revision": "dd43a1606d81580febc88779ceed5c78"
  },
  {
    "url": "assets/js/183.64d6c003.js",
    "revision": "05358b6d183f98d0739e4b24fc0aa0ce"
  },
  {
    "url": "assets/js/184.872fa8fb.js",
    "revision": "13eb60a5f0c18c906af0c6c39e2d2135"
  },
  {
    "url": "assets/js/185.956b7f8b.js",
    "revision": "80fdad43fb99bd5b4176b8512fc96d66"
  },
  {
    "url": "assets/js/186.6a318a3f.js",
    "revision": "e24fbb9c76912c2501363201b9d0ef25"
  },
  {
    "url": "assets/js/187.a77202c4.js",
    "revision": "2510562475766c328b2f3f9bf05325e0"
  },
  {
    "url": "assets/js/188.1113177a.js",
    "revision": "f8c2d43de914328fe86920be33df0044"
  },
  {
    "url": "assets/js/189.e7510f3a.js",
    "revision": "ada130fbc7978cf37dca16edf5998fd4"
  },
  {
    "url": "assets/js/19.1d969635.js",
    "revision": "ddc863726901e418057548a32ff304b4"
  },
  {
    "url": "assets/js/190.4aafb29f.js",
    "revision": "49bfb6f248ed1b88ce2174c78d6d829e"
  },
  {
    "url": "assets/js/191.7f5ada78.js",
    "revision": "0eb72f455d7e112848af23dac4f027d9"
  },
  {
    "url": "assets/js/192.29a7399a.js",
    "revision": "b4bb66e39ee709dd072a4d98e2c8c4c9"
  },
  {
    "url": "assets/js/193.dcc83b42.js",
    "revision": "58f4cb96fba9705e4e97be160709a28c"
  },
  {
    "url": "assets/js/194.d925cbf9.js",
    "revision": "0172af6995d779d09037a3a819230133"
  },
  {
    "url": "assets/js/195.d413ad5e.js",
    "revision": "c9f62c8cb1de8a111077416de8f5174d"
  },
  {
    "url": "assets/js/196.35a48356.js",
    "revision": "1b6c239c7a0f3f918f1f951217c1705f"
  },
  {
    "url": "assets/js/197.66df58ce.js",
    "revision": "c93e3eae45afb0307c2962d40a526c11"
  },
  {
    "url": "assets/js/198.ce170820.js",
    "revision": "10588ac3cc57b40573f9972b188aaab1"
  },
  {
    "url": "assets/js/199.0a6c50ec.js",
    "revision": "ac0fd49a262884efc450b4f55130e0c7"
  },
  {
    "url": "assets/js/2.55d58284.js",
    "revision": "446804a68808232bd16a15614f01d0ad"
  },
  {
    "url": "assets/js/20.fbf1a52b.js",
    "revision": "e14056f77af578d1eecf6ae9f848c4e4"
  },
  {
    "url": "assets/js/200.a9e91f41.js",
    "revision": "e4e48b3a69f3d631225f54575f5468cb"
  },
  {
    "url": "assets/js/201.46129a18.js",
    "revision": "8eaed0748bbd293d7d8b4eff759c6cb5"
  },
  {
    "url": "assets/js/202.6e82af3b.js",
    "revision": "6fcb0e5aaccde1ebd5dedb2fe57dbad1"
  },
  {
    "url": "assets/js/203.beed7cc5.js",
    "revision": "dd1c89dbe67be12c50dd8b6ec276cb9c"
  },
  {
    "url": "assets/js/204.a13e6186.js",
    "revision": "09a1b943e35e15b7e8b0ec0f9c956544"
  },
  {
    "url": "assets/js/205.95c8743b.js",
    "revision": "5be42a9318cb574887ab40680f8776fe"
  },
  {
    "url": "assets/js/206.743a7bdf.js",
    "revision": "09846c2f85ba2d914aa16876a5ae623e"
  },
  {
    "url": "assets/js/207.211c6154.js",
    "revision": "e9ee3bffbc422c5cc0358ddc68000ce4"
  },
  {
    "url": "assets/js/208.ba18ad21.js",
    "revision": "26a44cfeec98cc6a2a11341586951f49"
  },
  {
    "url": "assets/js/209.725432d8.js",
    "revision": "b31ae6a6ae9a4353ec79259af081c722"
  },
  {
    "url": "assets/js/21.d42747df.js",
    "revision": "a0ca25ae6bed228026d0968c8e17b816"
  },
  {
    "url": "assets/js/210.717d23bb.js",
    "revision": "9bb2cefd471493f011ca15212d40a113"
  },
  {
    "url": "assets/js/211.26d1120b.js",
    "revision": "f39a11f1b3860f3c4049592a76cac2e7"
  },
  {
    "url": "assets/js/212.e7f55f08.js",
    "revision": "05110b21e1bf09afc4548730550b79f0"
  },
  {
    "url": "assets/js/213.861a3e5d.js",
    "revision": "9cda15eb0c1431d5dd1f2c3223d500ba"
  },
  {
    "url": "assets/js/214.963042d8.js",
    "revision": "deacac73c9fa29eaefff65b1fc6934cd"
  },
  {
    "url": "assets/js/215.4d9479e6.js",
    "revision": "16066e321426481d70c15d304332b7eb"
  },
  {
    "url": "assets/js/216.a1e54afc.js",
    "revision": "dcf5d8954a6b26fa966ab9902147685d"
  },
  {
    "url": "assets/js/217.6a1f62ab.js",
    "revision": "c4aa3a0dca6b37980f2771f7dc5897e4"
  },
  {
    "url": "assets/js/218.8670edbd.js",
    "revision": "1fc9066e1b8eceae4e9c3a04d0e365ec"
  },
  {
    "url": "assets/js/219.4916451a.js",
    "revision": "721a16b37f2f56759364b11892aca621"
  },
  {
    "url": "assets/js/22.51f10354.js",
    "revision": "5bc927d3b65399542e7b92667c3dddea"
  },
  {
    "url": "assets/js/220.34346e06.js",
    "revision": "bbd46bdb57df291adda53a5efd13b973"
  },
  {
    "url": "assets/js/221.8c70f3b4.js",
    "revision": "6975421541d00cbb81c4fdf31f396d30"
  },
  {
    "url": "assets/js/222.a462d810.js",
    "revision": "e0b70d82e157ed8f6a783e9e70eeb9a9"
  },
  {
    "url": "assets/js/223.fb5b7a6e.js",
    "revision": "5db91a51ee66c66fd5c3ae6c0689eed3"
  },
  {
    "url": "assets/js/224.21863034.js",
    "revision": "f23bbc886d166cb5b79722b9b8bc2667"
  },
  {
    "url": "assets/js/225.050f4457.js",
    "revision": "3deb4a98a73b395471fda20d3b2e33ea"
  },
  {
    "url": "assets/js/226.595df1fa.js",
    "revision": "a75348f93fff9f9af9c136bd4bc2f95f"
  },
  {
    "url": "assets/js/227.753b2099.js",
    "revision": "a7e990240cb67c35e7e03fcdd17ef089"
  },
  {
    "url": "assets/js/228.84f2ecdd.js",
    "revision": "7b0fa6c71e8cc2253e3a7da086a73561"
  },
  {
    "url": "assets/js/229.37745693.js",
    "revision": "4f3737248ce5bbf880f0996142ea3de9"
  },
  {
    "url": "assets/js/23.5700195f.js",
    "revision": "b6342ee71cff4796e2af0cfe62b53b3f"
  },
  {
    "url": "assets/js/230.c7af89e2.js",
    "revision": "f63032614e6fb8a7b624c171a95c167f"
  },
  {
    "url": "assets/js/231.19ac089a.js",
    "revision": "22bad29f297eb986a9930e0d713bbf59"
  },
  {
    "url": "assets/js/232.9564d450.js",
    "revision": "19d9aa6455c47c3a95cd2e3281401ee9"
  },
  {
    "url": "assets/js/233.0cfbfcf8.js",
    "revision": "deb651a362f22f7550d06791b53d7623"
  },
  {
    "url": "assets/js/234.d684791d.js",
    "revision": "55777fc83abfa7d52b99ddff70422ae6"
  },
  {
    "url": "assets/js/235.15951b87.js",
    "revision": "711930c9d1e8e8a8cbd44e7f2f057e3c"
  },
  {
    "url": "assets/js/236.6055c051.js",
    "revision": "03680883984bf66e4dc9ede3b15d4aa6"
  },
  {
    "url": "assets/js/237.5d36b286.js",
    "revision": "0efe7f1859de4cd28e94a0be5be05add"
  },
  {
    "url": "assets/js/238.fbaa7304.js",
    "revision": "9e174971e8a1887d07c57500aaa8d842"
  },
  {
    "url": "assets/js/239.735e3128.js",
    "revision": "64141bada4f1c0215386dfe82fc07ee5"
  },
  {
    "url": "assets/js/24.7d022030.js",
    "revision": "a318d9ed9ac866366007fd63a238887d"
  },
  {
    "url": "assets/js/240.b50b29f2.js",
    "revision": "e4881fdcfe39c4a1e55cb65e54306c7e"
  },
  {
    "url": "assets/js/241.a59ab402.js",
    "revision": "b0f9984d16a0f16cdd7fdb845a85861c"
  },
  {
    "url": "assets/js/242.85e1b094.js",
    "revision": "6b6efbe4ec1cdd8bae46d75d43a11396"
  },
  {
    "url": "assets/js/243.099caba7.js",
    "revision": "414fd45043e8d79a0c01eed86736dadf"
  },
  {
    "url": "assets/js/244.c60e7432.js",
    "revision": "f76add39454ce724f76d15b6b146ade5"
  },
  {
    "url": "assets/js/245.9c8e8040.js",
    "revision": "94e14fcd3a7272d50d0116034c008bce"
  },
  {
    "url": "assets/js/246.2ecbaa58.js",
    "revision": "e93099e7b6252e75f5bd4fa44ed14b93"
  },
  {
    "url": "assets/js/247.28f6eb05.js",
    "revision": "a37158c6cbd3da7b213283e6c5fb5db0"
  },
  {
    "url": "assets/js/248.e2b75a17.js",
    "revision": "75bc60a526ca0f08041fb577626c4bd0"
  },
  {
    "url": "assets/js/249.4d5f1167.js",
    "revision": "181d1d84584271b869d156ba4fa87c11"
  },
  {
    "url": "assets/js/25.c5f3884e.js",
    "revision": "62001c64ae61c3d2cd5b43eee5683a66"
  },
  {
    "url": "assets/js/250.6477b99a.js",
    "revision": "72518240c2afcbc712053a273b01b1aa"
  },
  {
    "url": "assets/js/251.c0e54966.js",
    "revision": "08aca15c183075c5870b1d0e0eb28ae1"
  },
  {
    "url": "assets/js/252.acc844dd.js",
    "revision": "1a95c1efff7adb6fda06cd1940e306d7"
  },
  {
    "url": "assets/js/253.3dfa3e62.js",
    "revision": "0c4bc5260ebcf9e87759ef9a353df636"
  },
  {
    "url": "assets/js/254.d481fc7c.js",
    "revision": "6fdbb1094ca1783993b87f6d9cd13d63"
  },
  {
    "url": "assets/js/255.30ba9a89.js",
    "revision": "c3ca3bba18aac53883c22d33ab52900a"
  },
  {
    "url": "assets/js/256.b5bc6e2c.js",
    "revision": "526da9e642ec93802209504ef4218297"
  },
  {
    "url": "assets/js/257.262f2e16.js",
    "revision": "4911f44cadeab7470cf2871942369ecc"
  },
  {
    "url": "assets/js/258.f1972bbc.js",
    "revision": "f60202ea417c7dfd8f44237b7e4b4803"
  },
  {
    "url": "assets/js/259.15129a82.js",
    "revision": "c66b3eeffa52f631157fcd11226b6eb1"
  },
  {
    "url": "assets/js/26.5d75a820.js",
    "revision": "2a8a26683c2a3f07d860e8ce10447477"
  },
  {
    "url": "assets/js/260.bd8d41f5.js",
    "revision": "a09f043c11673abb0b63726d505adb73"
  },
  {
    "url": "assets/js/261.388bf126.js",
    "revision": "91d843d57e7043eb40903ca11737a9b4"
  },
  {
    "url": "assets/js/262.fad4353e.js",
    "revision": "ea423cb2e09e64f17b19a82aa90c7c38"
  },
  {
    "url": "assets/js/263.65c4d960.js",
    "revision": "b0c2f6c270c2eb855d6672bf3fb4722a"
  },
  {
    "url": "assets/js/264.25cec5d7.js",
    "revision": "cad8ad0b6672063f876a35bae829f0a4"
  },
  {
    "url": "assets/js/265.cef5533e.js",
    "revision": "df116f5e85ee954e0cc541204187b1c8"
  },
  {
    "url": "assets/js/266.fecfc91f.js",
    "revision": "cd602013ab6200f18917fc728c0fbc59"
  },
  {
    "url": "assets/js/267.fcbfc812.js",
    "revision": "6159c0fd6a7d1e2baa8d9911ef991e06"
  },
  {
    "url": "assets/js/268.5a37d2d1.js",
    "revision": "17f61de9c6ddbbdd26c055b63205c301"
  },
  {
    "url": "assets/js/269.bdd955a3.js",
    "revision": "04808423f4cbd37d2cb77dbf419dc170"
  },
  {
    "url": "assets/js/27.9d4da156.js",
    "revision": "e0b62c66162da2d1e2e9fde1becba83e"
  },
  {
    "url": "assets/js/270.f73afcc9.js",
    "revision": "489ece4f249138963163b30addfcc1ab"
  },
  {
    "url": "assets/js/271.5c7fd6b8.js",
    "revision": "8eaedabc7d3609889876209f2249f469"
  },
  {
    "url": "assets/js/272.237b5fc7.js",
    "revision": "a2f4a43809b4947493c04b29da55ebd6"
  },
  {
    "url": "assets/js/273.fdb82455.js",
    "revision": "d8c35f5a19e20f45d6a60c56d45b6a14"
  },
  {
    "url": "assets/js/274.afed2a54.js",
    "revision": "b1239383aa0e7a435f560c0c901e86be"
  },
  {
    "url": "assets/js/275.200487ff.js",
    "revision": "a2730d54c416d31cf22a98d5ac489ff1"
  },
  {
    "url": "assets/js/276.72f5a3c5.js",
    "revision": "e3380c664a42ad872b0e40703e1a1380"
  },
  {
    "url": "assets/js/277.f85e3946.js",
    "revision": "88482b6a9a6493d63a5ee2b4e628bef4"
  },
  {
    "url": "assets/js/278.241d3959.js",
    "revision": "4dcb09867e79f72625bf45b460f52959"
  },
  {
    "url": "assets/js/279.6d255d8b.js",
    "revision": "7830b156513a746c0d2ce627ab892ae1"
  },
  {
    "url": "assets/js/28.6b9ae431.js",
    "revision": "93989a026fc9d73369b81309bb241760"
  },
  {
    "url": "assets/js/280.2c85ba38.js",
    "revision": "480ab9be67a6ea1fd644626154b2882c"
  },
  {
    "url": "assets/js/281.d5de24bc.js",
    "revision": "981479ae4f1259843838b2f920a20dcf"
  },
  {
    "url": "assets/js/282.5f861bb6.js",
    "revision": "b6f807e0ef95a309d4ab293d65bca5e1"
  },
  {
    "url": "assets/js/283.761a4522.js",
    "revision": "139814f2f73256ef5b7aa8f6190f265c"
  },
  {
    "url": "assets/js/284.697cdaa1.js",
    "revision": "96c4c8faa1858003868bb8ebdcab617c"
  },
  {
    "url": "assets/js/285.15141f84.js",
    "revision": "021e0b503859cdfaa128703da4131c39"
  },
  {
    "url": "assets/js/286.e69d0b84.js",
    "revision": "861c7af935e1b1e040501d829eb1acb3"
  },
  {
    "url": "assets/js/287.945d968e.js",
    "revision": "a05435fda854f891eeb9e6985dd61449"
  },
  {
    "url": "assets/js/288.70491976.js",
    "revision": "c570fe1dbc7ef148e35569d496f5b494"
  },
  {
    "url": "assets/js/289.16bdc016.js",
    "revision": "8dbfc1f2899b4af8076b0b4079c38bec"
  },
  {
    "url": "assets/js/29.d58fe528.js",
    "revision": "472783bd37a37de91085cf5cc8fc97b6"
  },
  {
    "url": "assets/js/290.82dacd76.js",
    "revision": "b7dfd41929b6beaac39bf080f4f6919f"
  },
  {
    "url": "assets/js/291.7e5fdd26.js",
    "revision": "353645681e616e10be9dbbf69fc2e5d5"
  },
  {
    "url": "assets/js/292.77f879c4.js",
    "revision": "c4060639a6cdd7ad961f740b13a11712"
  },
  {
    "url": "assets/js/293.9ab498d0.js",
    "revision": "95d1c8d1c72e1ab937329206b30f72f8"
  },
  {
    "url": "assets/js/294.065c38e4.js",
    "revision": "94a8da7ea6dda00407586f6aef274d72"
  },
  {
    "url": "assets/js/295.9b87a042.js",
    "revision": "64e4d57c06d83edb99449313e4924498"
  },
  {
    "url": "assets/js/296.07944060.js",
    "revision": "5256ace879cefccb6a8a4008f65e6c49"
  },
  {
    "url": "assets/js/297.3f8fadd8.js",
    "revision": "6922d87d981ae6870e5681b936fb8cc0"
  },
  {
    "url": "assets/js/298.d018a4a9.js",
    "revision": "602c43dfea4cbb984a1401dcf98d44da"
  },
  {
    "url": "assets/js/299.dcd6f5f2.js",
    "revision": "0a60a6a6f783030a288b1b04689d52a2"
  },
  {
    "url": "assets/js/3.7ba7d1f1.js",
    "revision": "88420c3b378f1ff7ec0f9c83d1ffce32"
  },
  {
    "url": "assets/js/30.24d52a56.js",
    "revision": "ee6a76acfe9b8d72d45bb54fbb4dde2f"
  },
  {
    "url": "assets/js/300.74ac0432.js",
    "revision": "ae740c10d431e914c0671f804fbf11a8"
  },
  {
    "url": "assets/js/301.c7d7095f.js",
    "revision": "9c5a75b10c780ec10d332480c2c2b63b"
  },
  {
    "url": "assets/js/302.efc8bc23.js",
    "revision": "60d1ddb9ec53ddc31357f8d06df9c9d2"
  },
  {
    "url": "assets/js/303.1f176067.js",
    "revision": "d1f7b89a59180f9000c95b49d663283a"
  },
  {
    "url": "assets/js/304.15829930.js",
    "revision": "c3445b73d962cbb24c9cf34edaa5f71f"
  },
  {
    "url": "assets/js/305.40b68845.js",
    "revision": "cb9ff944fad0430f750830bafcd0e06a"
  },
  {
    "url": "assets/js/306.afe6d57e.js",
    "revision": "cf9547c416b65b373cba0af41a837e97"
  },
  {
    "url": "assets/js/307.ba44e8e2.js",
    "revision": "b3e6a34f39c276d88f4b6bee0fffeb24"
  },
  {
    "url": "assets/js/308.ae9ad7b1.js",
    "revision": "24f84966594c2fc02fe2fd5af586529f"
  },
  {
    "url": "assets/js/309.326b9ea0.js",
    "revision": "adc1b184ab0693ebba23f0647edbd13b"
  },
  {
    "url": "assets/js/31.59d2b89e.js",
    "revision": "2e986aaec761524713df8f9b9f41c381"
  },
  {
    "url": "assets/js/310.88d0225a.js",
    "revision": "93c0d2e3d0125ccc15e945721565b031"
  },
  {
    "url": "assets/js/311.51d8551f.js",
    "revision": "c23e5712752d27cdf520b34828d3b46a"
  },
  {
    "url": "assets/js/312.d394a24c.js",
    "revision": "c78de895f33b8c0232545f7e22b2b31b"
  },
  {
    "url": "assets/js/313.595e7679.js",
    "revision": "e173072817729b8265b8504504dce00a"
  },
  {
    "url": "assets/js/314.d30eb54f.js",
    "revision": "dcb601a1479e6c9cc6c66741cdadd364"
  },
  {
    "url": "assets/js/315.91d2187c.js",
    "revision": "d9cebec35641ce706a73489601db3e2f"
  },
  {
    "url": "assets/js/316.5d3fb62b.js",
    "revision": "616fd5a25c0b253148d7866cd799ae21"
  },
  {
    "url": "assets/js/317.b05fbbcd.js",
    "revision": "06795eb2ed66b0538a98f1625ddc2e91"
  },
  {
    "url": "assets/js/318.1d9d6f59.js",
    "revision": "028d002d02020bf6c0f746144f4cb112"
  },
  {
    "url": "assets/js/319.78fc8b6f.js",
    "revision": "91c1a91eb3c57c5f0b6cf163a62c36a0"
  },
  {
    "url": "assets/js/32.5d77fa92.js",
    "revision": "a536e79d6153da57b0ea39799923d133"
  },
  {
    "url": "assets/js/320.163ca080.js",
    "revision": "d4c3049493427b3b7d64901a19263560"
  },
  {
    "url": "assets/js/321.ff4defb7.js",
    "revision": "31b37a7c38087887f606c8eaf94d3695"
  },
  {
    "url": "assets/js/322.ab61c4a5.js",
    "revision": "75e4c4945077f4dc4cd0965dfa2d6a96"
  },
  {
    "url": "assets/js/323.cd3b59bb.js",
    "revision": "931bf3737c6e8f7f7443ce305baaa7b7"
  },
  {
    "url": "assets/js/324.172d7b77.js",
    "revision": "9fc0d36a5326970ecdb6a5c65d068f2f"
  },
  {
    "url": "assets/js/325.ee6c7ffa.js",
    "revision": "9c16839b5dc522d7ffd983ee66354e6e"
  },
  {
    "url": "assets/js/326.ebc80009.js",
    "revision": "842f07e189ae39729daa05d64269eb08"
  },
  {
    "url": "assets/js/327.d1ee78c8.js",
    "revision": "ec9a66586ffc0ce30a57238fbb775e4b"
  },
  {
    "url": "assets/js/328.ae32497d.js",
    "revision": "9d83f6914e0b1a1c53b14990db431731"
  },
  {
    "url": "assets/js/329.1864aac2.js",
    "revision": "47d4efdc37d9837d81aafc809bb074b0"
  },
  {
    "url": "assets/js/33.ec302a47.js",
    "revision": "b5cb440595b936df72696d9e9ad7a77b"
  },
  {
    "url": "assets/js/330.3f625d9f.js",
    "revision": "da9ddd5994486a187e6177315864ea13"
  },
  {
    "url": "assets/js/331.cee83161.js",
    "revision": "9e0d15c429296e46a27ec0b95e1f3b17"
  },
  {
    "url": "assets/js/332.ad15fb0f.js",
    "revision": "a17fd62229c42b7b9cb1ab30d9d9bdcc"
  },
  {
    "url": "assets/js/333.7eb9ea52.js",
    "revision": "de3210e723c9e430f99754604a870c01"
  },
  {
    "url": "assets/js/334.b5671e16.js",
    "revision": "2efcb4fe3b0b5375a88bf9d19513c12e"
  },
  {
    "url": "assets/js/335.a2a5f65d.js",
    "revision": "7a26cf263f8cc56e26c75778b890e484"
  },
  {
    "url": "assets/js/336.c5cbde1c.js",
    "revision": "c9ad131d7bd984214febb2380be47a02"
  },
  {
    "url": "assets/js/337.375cc534.js",
    "revision": "3d1d1d0caa40051c9a30d31335fe60fa"
  },
  {
    "url": "assets/js/338.bea937b5.js",
    "revision": "4fe4bb2ee1335635f85fb02cd2daf718"
  },
  {
    "url": "assets/js/339.1921d2c3.js",
    "revision": "0bd0d164183afa5095da1512c634eb25"
  },
  {
    "url": "assets/js/34.0c778679.js",
    "revision": "a3bd658d04fb1b57ff6aa406973c9c02"
  },
  {
    "url": "assets/js/340.81760fbc.js",
    "revision": "94bed4aae448bf5a90ec39d32816ec87"
  },
  {
    "url": "assets/js/341.9659962c.js",
    "revision": "5fc3eb84f9c4fdeb96646c136ec6d26c"
  },
  {
    "url": "assets/js/342.591e455d.js",
    "revision": "5d0dab0104d28b0d7eedc7f0408c2ee4"
  },
  {
    "url": "assets/js/343.bdb4d816.js",
    "revision": "7ec7a54c9bf470821de4f1c39aed9885"
  },
  {
    "url": "assets/js/344.6aee0829.js",
    "revision": "e2cd89eee474e972bf1295a1556424e5"
  },
  {
    "url": "assets/js/345.fd2011dd.js",
    "revision": "3e1e99f2c2207e03de731ded09411145"
  },
  {
    "url": "assets/js/35.0f70e2e3.js",
    "revision": "c824c123214a75d7b62a9b3a6d925417"
  },
  {
    "url": "assets/js/36.bebaeda6.js",
    "revision": "a54c802d8b111ac13346f453595a9852"
  },
  {
    "url": "assets/js/37.b5600065.js",
    "revision": "e21573389d77013edba11baffc8491ab"
  },
  {
    "url": "assets/js/38.1641eeb4.js",
    "revision": "780483d8d20b423eff9e3d64a912b0c7"
  },
  {
    "url": "assets/js/39.71a60531.js",
    "revision": "a36179e56b1b3c38c9b788fd97ead545"
  },
  {
    "url": "assets/js/4.499fcb2f.js",
    "revision": "8898f0a9e5a56bea3b2ecb24884194e6"
  },
  {
    "url": "assets/js/40.c69406df.js",
    "revision": "a6250b32f96e6d7a1e64f96eab322993"
  },
  {
    "url": "assets/js/41.b38d0608.js",
    "revision": "5c43584aa60230b7086db13f909e5fa9"
  },
  {
    "url": "assets/js/42.3f40f8d0.js",
    "revision": "5bc8d9fda58893e502945ecf6de1ec91"
  },
  {
    "url": "assets/js/43.04897b84.js",
    "revision": "948c2f0156eb820aecc8392df414b467"
  },
  {
    "url": "assets/js/44.35487865.js",
    "revision": "4da289d80ee999731bef7b8e43e8b9ae"
  },
  {
    "url": "assets/js/45.37673ef6.js",
    "revision": "75e93104f54924a9bb0eebc7c7c6cd7b"
  },
  {
    "url": "assets/js/46.eed30cd8.js",
    "revision": "5569c6669708b304eda4a8a39bdec212"
  },
  {
    "url": "assets/js/47.925dc6c2.js",
    "revision": "b242fc69901db13aab14dca2a2f08ac2"
  },
  {
    "url": "assets/js/48.351df872.js",
    "revision": "b80003b3f11ddc04f1818bc35c10330d"
  },
  {
    "url": "assets/js/49.8efc274d.js",
    "revision": "5e18da5525085a2942a21221a15fadfe"
  },
  {
    "url": "assets/js/5.f1374435.js",
    "revision": "bc2971770c7d129bc6c0fc2cbf602314"
  },
  {
    "url": "assets/js/50.52315da8.js",
    "revision": "1181702b91ecc19605ca4c8eb605ed2f"
  },
  {
    "url": "assets/js/51.d2714c66.js",
    "revision": "15e9f35cc9bec3c2ba6f51b692cb648e"
  },
  {
    "url": "assets/js/52.53b6f2d9.js",
    "revision": "8f5b69397d3c0dc751b622d94344d4e9"
  },
  {
    "url": "assets/js/53.0045ca21.js",
    "revision": "143d717d345fcd616e7a5871d15fe2ee"
  },
  {
    "url": "assets/js/54.5d8031f7.js",
    "revision": "c1fc611abb75d717416d77ba881135e5"
  },
  {
    "url": "assets/js/55.feaa5d41.js",
    "revision": "af30e998a50a4e9d5c5c31b565502095"
  },
  {
    "url": "assets/js/56.f51326a0.js",
    "revision": "5c65b84b820be7853739e13507de884c"
  },
  {
    "url": "assets/js/57.68402e0e.js",
    "revision": "3bb1b1930d435f0dfcc86b5b042416f1"
  },
  {
    "url": "assets/js/58.fe764d14.js",
    "revision": "e88806ef0bbd5b0efd8f229fdc0db246"
  },
  {
    "url": "assets/js/59.f84d231a.js",
    "revision": "b63f727e4735f0f145c53b73c0ce645a"
  },
  {
    "url": "assets/js/6.139c4d56.js",
    "revision": "f39a11bae34a343a74563b241c11d840"
  },
  {
    "url": "assets/js/60.5a3f852c.js",
    "revision": "782ff393a45479ca9989bea7ef4bdb84"
  },
  {
    "url": "assets/js/61.1bd2d01a.js",
    "revision": "7652f9962e303823d4a5a4f0f843be4a"
  },
  {
    "url": "assets/js/62.88455d87.js",
    "revision": "9b5b2402638fcba1d96872e481529b81"
  },
  {
    "url": "assets/js/63.76af85b3.js",
    "revision": "b7cc626aa7686b51ae3cb8e2e1c0037d"
  },
  {
    "url": "assets/js/64.e5d09188.js",
    "revision": "80f403268df3a09f0603c1dc79793a93"
  },
  {
    "url": "assets/js/65.9d874c57.js",
    "revision": "a776def19ef84a35f172707be04b2c3d"
  },
  {
    "url": "assets/js/66.8eb90e11.js",
    "revision": "ba1f3dae404eebaf9a3b8f5a05a90e1d"
  },
  {
    "url": "assets/js/67.442af753.js",
    "revision": "01fbdbc3a40a47c779426f43b6b2ce73"
  },
  {
    "url": "assets/js/68.85e50429.js",
    "revision": "5a0a8f9496049983f2f13568ad079c12"
  },
  {
    "url": "assets/js/69.f97fbb27.js",
    "revision": "3b066e1427f73432c064ea9f66717dcf"
  },
  {
    "url": "assets/js/7.042a65df.js",
    "revision": "c781482dd528555f5fbbc59802729e7f"
  },
  {
    "url": "assets/js/70.21692466.js",
    "revision": "f2becd07b81a53f3ed7b3a974c28016e"
  },
  {
    "url": "assets/js/71.4896678b.js",
    "revision": "6dc50eb0c5849925ea8a3086b0a6f0ca"
  },
  {
    "url": "assets/js/72.2b892c5e.js",
    "revision": "fabc0483e7e6d5af76c71d85ae1b2d2a"
  },
  {
    "url": "assets/js/73.9e8e1ce6.js",
    "revision": "21f200407cee4dee452bf8ab493b102a"
  },
  {
    "url": "assets/js/74.a12fec3f.js",
    "revision": "f8991f77fd44863fb0281bcc9ea40d18"
  },
  {
    "url": "assets/js/75.7bfeabfe.js",
    "revision": "afa83d77d45ec7ad78da8edb41ed5c9f"
  },
  {
    "url": "assets/js/76.14ae6ee2.js",
    "revision": "e5b37b3236354a81f398c032cc5b73f9"
  },
  {
    "url": "assets/js/77.2472e9dd.js",
    "revision": "ef76025e6090c67111b3bcd946a70186"
  },
  {
    "url": "assets/js/78.4c4495d7.js",
    "revision": "24e81abbc299a0a653500ef3932b89de"
  },
  {
    "url": "assets/js/79.85a7e326.js",
    "revision": "628dc1631c7d2b1d34f33d1d40d9204a"
  },
  {
    "url": "assets/js/8.c0afbd91.js",
    "revision": "fcd4b89b127b59be9ebdf75f38aea306"
  },
  {
    "url": "assets/js/80.716e9cc2.js",
    "revision": "5878fb1938c7a3286649e6135edacd55"
  },
  {
    "url": "assets/js/81.a6050d30.js",
    "revision": "a6674178b5eee5da863a0f394757ee96"
  },
  {
    "url": "assets/js/82.8ef290fa.js",
    "revision": "415d8d81da66eaa0daf0ef2aca95b658"
  },
  {
    "url": "assets/js/83.6089460f.js",
    "revision": "5c18ab121315007fcc55d3afea092e0b"
  },
  {
    "url": "assets/js/84.5a50433b.js",
    "revision": "8679636c4d2d6e7c0bc1903f527dc716"
  },
  {
    "url": "assets/js/85.2baa16f5.js",
    "revision": "2cd69ffbb736fc43c128d28d19616100"
  },
  {
    "url": "assets/js/86.2c02c29b.js",
    "revision": "1c967ca81ecf55c54f84ae00b21080f6"
  },
  {
    "url": "assets/js/87.0dbce3e7.js",
    "revision": "009baf60a1af7c206cea7184f28b03c9"
  },
  {
    "url": "assets/js/88.19510be2.js",
    "revision": "8984171c36728aeeceae692ea043b9f9"
  },
  {
    "url": "assets/js/89.57885057.js",
    "revision": "15011d078d2c7f912f1f98429ff052c1"
  },
  {
    "url": "assets/js/9.3ce99ebb.js",
    "revision": "0646e232af829ec687aee81a26a37e5e"
  },
  {
    "url": "assets/js/90.163ab3ad.js",
    "revision": "c8a4bb530120e0c57db2c8e7a4dfdbf3"
  },
  {
    "url": "assets/js/91.abf20628.js",
    "revision": "7d5353f45af5dc9a46991591848f4ccb"
  },
  {
    "url": "assets/js/92.514e4c80.js",
    "revision": "ca2d501356575672db6cac2d8464f558"
  },
  {
    "url": "assets/js/93.6270e0c8.js",
    "revision": "94a53c749391ad38972d2391419f9c05"
  },
  {
    "url": "assets/js/94.c3b63486.js",
    "revision": "8ab784da8665ba947c4e9726007cd80a"
  },
  {
    "url": "assets/js/95.28adf85b.js",
    "revision": "a26b9250d14bff9857b3b7681a7d2fb2"
  },
  {
    "url": "assets/js/96.078f362c.js",
    "revision": "ba8896cd97a4a2df551a474d83293291"
  },
  {
    "url": "assets/js/97.f40c53f3.js",
    "revision": "7241c569b68c3c3636f9e2d63f101198"
  },
  {
    "url": "assets/js/98.47fb4ab1.js",
    "revision": "368f615b73d5733bd812308227592c5f"
  },
  {
    "url": "assets/js/99.64b0e4c4.js",
    "revision": "74fcea7d71dd6d3969654b4873af0f32"
  },
  {
    "url": "assets/js/app.859e51a9.js",
    "revision": "9ff39d08dc83269b04665c297e3ad221"
  },
  {
    "url": "hero.png",
    "revision": "bf9756f0771c9499e8ebfadcb5da4151"
  },
  {
    "url": "home/alphabet.jpg",
    "revision": "3499ee8f00cecd931ddf8f90409f361f"
  },
  {
    "url": "home/courses.jpg",
    "revision": "d75d32ad3d7e119cf3564ee31cb863e9"
  },
  {
    "url": "home/dictionary.jpg",
    "revision": "69462af706a12fbaa64d4324dcc7fc8e"
  },
  {
    "url": "home/grammar.jpg",
    "revision": "19c23bcff850d7083f294259a6e05977"
  },
  {
    "url": "home/greetings.jpg",
    "revision": "a23babe3dc3675e83f6abbbeb9ed581a"
  },
  {
    "url": "home/kitchen.jpg",
    "revision": "b4190ca045f8ae89a3da7c47dc8b75bb"
  },
  {
    "url": "home/more_used.jpg",
    "revision": "165819f5607365d63f49e790ff9f40bb"
  },
  {
    "url": "home/people.jpg",
    "revision": "a1f601ae7dc06dbfa1643b634ee77a21"
  },
  {
    "url": "home/phrases.jpg",
    "revision": "e7801ece1f5fb8c75aacbe76e8f8a0c7"
  },
  {
    "url": "home/profession.jpg",
    "revision": "32cf7bf34c383f34ae89482c39f28568"
  },
  {
    "url": "home/vegetables.jpg",
    "revision": "06d39f1177690ae2e29a0786a23a2cbc"
  },
  {
    "url": "home/verbs.png",
    "revision": "1db334303ca05b1bb790c30014a28d28"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "46fa3968db394b2f4e815b47fb446d1a"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "913fc39bfe4be9583714f754b0e2efb6"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "10905b3ea7bccb4254b38cf5bbcb2f90"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "a5a610a2694eb9beae67c9cbfca8cffc"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "4e32be38a5e5362420686ef2146f31ef"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "2f544c46cd8621894cea3d80e914dab7"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "34f37b51f20a948f5ff637750c735630"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "4e32be38a5e5362420686ef2146f31ef"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "d59cdc20e530b9ddc159586961d0cbe9"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "ccc08661fa5948820b70c11e4f2e2f7b"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "26e25c5eb8e7061c44fa603d3f31296f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "90ff0ebc522d5841e3442bfe280035d9"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "81491474ad58360ee6552309bf5ebc4e"
  },
  {
    "url": "index.html",
    "revision": "4017986a98d7fe5e6cc7ecbf35348c16"
  },
  {
    "url": "logo.png",
    "revision": "55b3058e403b667ac365966735bc6e5f"
  },
  {
    "url": "logo/achi.jpg",
    "revision": "5f42e091f4da1990f87f7ae04b4394d7"
  },
  {
    "url": "logo/akateko.jpg",
    "revision": "df5e1de23381cdc56e6e12f433a8a3db"
  },
  {
    "url": "logo/chol.jpg",
    "revision": "1cb6e98841b10d4d93cf47746640e91e"
  },
  {
    "url": "logo/chontal.jpg",
    "revision": "ce69f253b98408900618738dd5281e08"
  },
  {
    "url": "logo/chorti.jpg",
    "revision": "397aa54e698ec3e8742d8b6764f15742"
  },
  {
    "url": "logo/chuj.jpg",
    "revision": "99be6300b7c585b8d671644c77c21977"
  },
  {
    "url": "logo/huasteco.jpg",
    "revision": "b9b2e15cbaff690508d533d9b657f9b0"
  },
  {
    "url": "logo/ixil.jpg",
    "revision": "22878bdb2fed10fe02d79727a453db8f"
  },
  {
    "url": "logo/kaqchikel.jpg",
    "revision": "49f14ae22328f9a397b2346b9ab88636"
  },
  {
    "url": "logo/kiche.jpg",
    "revision": "7148e3e3e77a2c12bae66805c82a780a"
  },
  {
    "url": "logo/mam.jpg",
    "revision": "f98ded722ed492f1d8b8605d0db2630c"
  },
  {
    "url": "logo/maya.jpg",
    "revision": "59806bbfdbfaa423716d251ebb818c01"
  },
  {
    "url": "mx/amuzgo/courses/basic/index.html",
    "revision": "2026bdad7d9a3e8b4f549e4844e1088e"
  },
  {
    "url": "mx/amuzgo/courses/intermediate/index.html",
    "revision": "ad965e8ecb71e8e21ecbbf8c7be071ad"
  },
  {
    "url": "mx/amuzgo/dictionary/glossary.html",
    "revision": "cb0affbac1fc3fc76a275e1c943abf4b"
  },
  {
    "url": "mx/amuzgo/dictionary/index.html",
    "revision": "610c09be9f84a6116938992db714a42d"
  },
  {
    "url": "mx/amuzgo/grammar/adjective/index.html",
    "revision": "8ff672eb8bdfe2a47f3e722fc7eaeae7"
  },
  {
    "url": "mx/amuzgo/grammar/adverb/index.html",
    "revision": "e3cba81ea97901cda472ee0f14aa1f74"
  },
  {
    "url": "mx/amuzgo/grammar/alphabet/index.html",
    "revision": "1c7ad18f6ecf3f9506a2d08daae680ec"
  },
  {
    "url": "mx/amuzgo/grammar/article/index.html",
    "revision": "53c66f7e5a2532bc49c1e5a11f40aa4b"
  },
  {
    "url": "mx/amuzgo/grammar/guide/index.html",
    "revision": "447da84c496eb5e75be422601eadc9a0"
  },
  {
    "url": "mx/amuzgo/grammar/verbs/index.html",
    "revision": "f55a68936982bcd38edff6a5838df199"
  },
  {
    "url": "mx/amuzgo/vocabulary/animals/index.html",
    "revision": "aa47bfe7524e0e98d4aacb97f9500de8"
  },
  {
    "url": "mx/amuzgo/vocabulary/greetings/index.html",
    "revision": "cd61369097211310b364a8f244a9e9c4"
  },
  {
    "url": "mx/amuzgo/vocabulary/more_used/index.html",
    "revision": "5a544889b03272479de7f909c93a0ba8"
  },
  {
    "url": "mx/amuzgo/vocabulary/people/index.html",
    "revision": "c258c021d341e5873aa76b71a017cbd6"
  },
  {
    "url": "mx/amuzgo/vocabulary/phrases/index.html",
    "revision": "8700d99c3011ace67b82c4f3a0c589eb"
  },
  {
    "url": "mx/ayapaneco/courses/basic/index.html",
    "revision": "1dbc9f0bde6d9340f9b843983d5b4533"
  },
  {
    "url": "mx/ayapaneco/courses/intermediate/index.html",
    "revision": "edfac9f20c475215fe1747540f8c39b3"
  },
  {
    "url": "mx/ayapaneco/dictionary/glossary.html",
    "revision": "439218e11c44d4d70219e910acab301e"
  },
  {
    "url": "mx/ayapaneco/dictionary/index.html",
    "revision": "d7ad42871a2da44e85c3784e3d12092c"
  },
  {
    "url": "mx/ayapaneco/grammar/adjective/index.html",
    "revision": "72859d57a00c1341a55a225db13f9573"
  },
  {
    "url": "mx/ayapaneco/grammar/adverb/index.html",
    "revision": "fa94cc21f71a2adb7bf35a66ff1a1656"
  },
  {
    "url": "mx/ayapaneco/grammar/alphabet/index.html",
    "revision": "70250718ed93de94e684de1b5c8282ef"
  },
  {
    "url": "mx/ayapaneco/grammar/article/index.html",
    "revision": "53f8500991720bbc78fc84762662f33e"
  },
  {
    "url": "mx/ayapaneco/grammar/guide/index.html",
    "revision": "29edcce8dd2e2d4e7795c22a66cb6bd5"
  },
  {
    "url": "mx/ayapaneco/grammar/verbs/index.html",
    "revision": "c33ae694cfc225ac78e1053c6cbed154"
  },
  {
    "url": "mx/ayapaneco/index.html",
    "revision": "3a754ad43f6d3eb7ad0257832b7fb97c"
  },
  {
    "url": "mx/ayapaneco/vocabulary/animals/index.html",
    "revision": "c69db81e8d7954063e094bcad439c8a2"
  },
  {
    "url": "mx/ayapaneco/vocabulary/greetings/index.html",
    "revision": "c245e9b92bfd5df654aa9c78f43cd9dc"
  },
  {
    "url": "mx/ayapaneco/vocabulary/more_used/index.html",
    "revision": "e80a8a599a50b971fc506b3cae3647c0"
  },
  {
    "url": "mx/ayapaneco/vocabulary/people/index.html",
    "revision": "535439d99745fbd06f1d3148e7ecf343"
  },
  {
    "url": "mx/ayapaneco/vocabulary/phrases/index.html",
    "revision": "83f497ca2235bf78da96430d69a34a71"
  },
  {
    "url": "mx/chatino/courses/basic/index.html",
    "revision": "b5b3b6d528776c1430ddeceb4e14bd29"
  },
  {
    "url": "mx/chatino/courses/intermediate/index.html",
    "revision": "21fee9598fb223dcf12de6ebd76f36a5"
  },
  {
    "url": "mx/chatino/dictionary/glossary.html",
    "revision": "6544cbecfc75634c8119a2d8d088e83e"
  },
  {
    "url": "mx/chatino/dictionary/index.html",
    "revision": "6186d1df36d8a66fcaa0c3929ca5dab4"
  },
  {
    "url": "mx/chatino/grammar/adjective/index.html",
    "revision": "6ba930bcfe054d5392a611e298a46778"
  },
  {
    "url": "mx/chatino/grammar/adverb/index.html",
    "revision": "ca8a396145b1ca4a45b57826a9f62fd3"
  },
  {
    "url": "mx/chatino/grammar/alphabet/index.html",
    "revision": "ea6c8fd17c0fa5248bc3bfb634a89345"
  },
  {
    "url": "mx/chatino/grammar/article/index.html",
    "revision": "78570d0a62c5ee5a2b01b4d05a856436"
  },
  {
    "url": "mx/chatino/grammar/guide/index.html",
    "revision": "50552d71fc848fce8444fe6980be077c"
  },
  {
    "url": "mx/chatino/grammar/verbs/index.html",
    "revision": "43934c0d90998bce6e00868fd41b3f97"
  },
  {
    "url": "mx/chatino/index.html",
    "revision": "ca8454daeaec60b3bd5665dbfe28ae37"
  },
  {
    "url": "mx/chatino/vocabulary/animals/index.html",
    "revision": "8c6148ecf1849146b8f0796a0b137d07"
  },
  {
    "url": "mx/chatino/vocabulary/greetings/index.html",
    "revision": "220b621def0470bd0fb2c96271f8b06b"
  },
  {
    "url": "mx/chatino/vocabulary/more_used/index.html",
    "revision": "ea6d825fdd3d7c445fb83bce774054d5"
  },
  {
    "url": "mx/chatino/vocabulary/people/index.html",
    "revision": "762d4e5a51457ba1fec9c44b623eef52"
  },
  {
    "url": "mx/chatino/vocabulary/phrases/index.html",
    "revision": "8556e5b378abf51b584370093fc41150"
  },
  {
    "url": "mx/chichimeco/courses/basic/index.html",
    "revision": "19e78b37d366753fa43d139d7e3e79c6"
  },
  {
    "url": "mx/chichimeco/courses/intermediate/index.html",
    "revision": "f66b1eac6bd76ad2b282f9e8f0cd6cdb"
  },
  {
    "url": "mx/chichimeco/dictionary/glossary.html",
    "revision": "720088b99f1c16b7541a9b5b2f0c7484"
  },
  {
    "url": "mx/chichimeco/dictionary/index.html",
    "revision": "4d12661dc8c5c17b4e4263ff25f1a7b8"
  },
  {
    "url": "mx/chichimeco/grammar/adjective/index.html",
    "revision": "b63ad2c2354cabd0919d4d130517358d"
  },
  {
    "url": "mx/chichimeco/grammar/adverb/index.html",
    "revision": "e79110476b51137c3f9ccb6c06ceb004"
  },
  {
    "url": "mx/chichimeco/grammar/alphabet/index.html",
    "revision": "6d172aea4d91c8c020f19916e94c6c85"
  },
  {
    "url": "mx/chichimeco/grammar/article/index.html",
    "revision": "d375aba3bda5801ace707e5a0281da88"
  },
  {
    "url": "mx/chichimeco/grammar/guide/index.html",
    "revision": "f1fe77da97f1993692fc6451df0109a9"
  },
  {
    "url": "mx/chichimeco/grammar/verbs/index.html",
    "revision": "0fe7bf4725fa3f89db03cdcd0e02fba6"
  },
  {
    "url": "mx/chichimeco/index.html",
    "revision": "3c05a41626b0480edc3d8af61c1d02ff"
  },
  {
    "url": "mx/chichimeco/vocabulary/animals/index.html",
    "revision": "4c3554dcb04d4133921528d5a7ccc182"
  },
  {
    "url": "mx/chichimeco/vocabulary/greetings/index.html",
    "revision": "56104c155cb25024981b3236719e01ce"
  },
  {
    "url": "mx/chichimeco/vocabulary/more_used/index.html",
    "revision": "efba2166c40d626962013a511c136eee"
  },
  {
    "url": "mx/chichimeco/vocabulary/people/index.html",
    "revision": "866e4fd352d9dfe0b6d30f761394e20b"
  },
  {
    "url": "mx/chichimeco/vocabulary/phrases/index.html",
    "revision": "48d3d0d474efe906a838175f9c3e4b25"
  },
  {
    "url": "mx/chinanteco/courses/basic/index.html",
    "revision": "1274b20fd8fa9a373b00b6e94b3afc0a"
  },
  {
    "url": "mx/chinanteco/courses/intermediate/index.html",
    "revision": "3d412b1e5cf711060667c29402d1e150"
  },
  {
    "url": "mx/chinanteco/dictionary/glossary.html",
    "revision": "14d6ff42ed2113657e9b22670e907779"
  },
  {
    "url": "mx/chinanteco/dictionary/index.html",
    "revision": "3cdf5d67b03491001c0d91041a263bd9"
  },
  {
    "url": "mx/chinanteco/grammar/adjective/index.html",
    "revision": "7e1054b3b510bcee2d3ee367ed5a7e4c"
  },
  {
    "url": "mx/chinanteco/grammar/adverb/index.html",
    "revision": "62575a5dff9050d388eec175dc203ffb"
  },
  {
    "url": "mx/chinanteco/grammar/alphabet/index.html",
    "revision": "fc84106e8fa65e81b6f40b7ac9a09533"
  },
  {
    "url": "mx/chinanteco/grammar/article/index.html",
    "revision": "acd151569d34522cf50d3378260280aa"
  },
  {
    "url": "mx/chinanteco/grammar/guide/index.html",
    "revision": "c431681bd8f3e21210a02620bd3069df"
  },
  {
    "url": "mx/chinanteco/grammar/verbs/index.html",
    "revision": "cb8b74fd612802d1bc2efd2cb14eaa64"
  },
  {
    "url": "mx/chinanteco/index.html",
    "revision": "864d8618e06c1304d8b8cb9f7a7c7123"
  },
  {
    "url": "mx/chinanteco/vocabulary/animals/index.html",
    "revision": "68682769e8a2aa1bb396581b590e8739"
  },
  {
    "url": "mx/chinanteco/vocabulary/greetings/index.html",
    "revision": "7d6718a54dcbd8322f23f6a69505b2d4"
  },
  {
    "url": "mx/chinanteco/vocabulary/more_used/index.html",
    "revision": "cdbaba50d22f84f5e322d19dbd09684b"
  },
  {
    "url": "mx/chinanteco/vocabulary/people/index.html",
    "revision": "49496debeae09a73b63a224bd426efd7"
  },
  {
    "url": "mx/chinanteco/vocabulary/phrases/index.html",
    "revision": "bd110fa1202ed09898c85bf312a1ac97"
  },
  {
    "url": "mx/chocholteco/courses/basic/index.html",
    "revision": "efd570e23a5d311022e7927544539411"
  },
  {
    "url": "mx/chocholteco/courses/intermediate/index.html",
    "revision": "f92fe669036ac3c4c68392ad3dc0a375"
  },
  {
    "url": "mx/chocholteco/dictionary/glossary.html",
    "revision": "491d48da598307d2e0507e25b54b51c4"
  },
  {
    "url": "mx/chocholteco/dictionary/index.html",
    "revision": "b991ae4523ba1625215d317249d29c8e"
  },
  {
    "url": "mx/chocholteco/grammar/adjective/index.html",
    "revision": "5c9b1d35cd613d35dd508a825c86fff4"
  },
  {
    "url": "mx/chocholteco/grammar/adverb/index.html",
    "revision": "212d567304c0a06586531ee4db405afc"
  },
  {
    "url": "mx/chocholteco/grammar/alphabet/index.html",
    "revision": "fbbea7cc2701c6c1bc1824db9ff89a3b"
  },
  {
    "url": "mx/chocholteco/grammar/article/index.html",
    "revision": "2ee7e9687c18d7d608a224446c2e2faf"
  },
  {
    "url": "mx/chocholteco/grammar/guide/index.html",
    "revision": "c51c8aa0a143311788c68e426d2c01c4"
  },
  {
    "url": "mx/chocholteco/grammar/verbs/index.html",
    "revision": "55ee00261235d53b51a94ef0de1e967d"
  },
  {
    "url": "mx/chocholteco/index.html",
    "revision": "4591ba0feac64eee17125262fed38145"
  },
  {
    "url": "mx/chocholteco/vocabulary/animals/index.html",
    "revision": "f0bc100c22a21c99a7ae812d76ad7e68"
  },
  {
    "url": "mx/chocholteco/vocabulary/greetings/index.html",
    "revision": "dbb272dc5df9cef23692d92fbe5a81b2"
  },
  {
    "url": "mx/chocholteco/vocabulary/more_used/index.html",
    "revision": "7ed05b000c985b878872cf80c19bf143"
  },
  {
    "url": "mx/chocholteco/vocabulary/people/index.html",
    "revision": "08654c21cd34cfb47cb17d06a349e307"
  },
  {
    "url": "mx/chocholteco/vocabulary/phrases/index.html",
    "revision": "0974853af53d8494e816a9f5de7ee9c2"
  },
  {
    "url": "mx/cuicateco/courses/basic/index.html",
    "revision": "9ccce789c9a066408a18bba69c77795c"
  },
  {
    "url": "mx/cuicateco/courses/intermediate/index.html",
    "revision": "d49aea01a934330379bc4a99a1b270c4"
  },
  {
    "url": "mx/cuicateco/dictionary/glossary.html",
    "revision": "ccb79ff847f0d29d57602e5dc137b0ba"
  },
  {
    "url": "mx/cuicateco/dictionary/index.html",
    "revision": "e66dd05f55a5c0796d2d0a36ef650124"
  },
  {
    "url": "mx/cuicateco/grammar/adjective/index.html",
    "revision": "99cabea36f0c535276b179ff5ef2b47c"
  },
  {
    "url": "mx/cuicateco/grammar/adverb/index.html",
    "revision": "6f17f68e9c341707971bb06f9dd2ae1b"
  },
  {
    "url": "mx/cuicateco/grammar/alphabet/index.html",
    "revision": "68b7c483745ee688267c57ce6cb48901"
  },
  {
    "url": "mx/cuicateco/grammar/article/index.html",
    "revision": "b2115d95f66f1e8af6bb6eede8797b98"
  },
  {
    "url": "mx/cuicateco/grammar/guide/index.html",
    "revision": "6023284de33e89b1e8dd911c22a40b05"
  },
  {
    "url": "mx/cuicateco/grammar/verbs/index.html",
    "revision": "76d6d8d2a4f6c345f94b58465584c209"
  },
  {
    "url": "mx/cuicateco/index.html",
    "revision": "fb4e1c10f206d4b562b9fe482570d320"
  },
  {
    "url": "mx/cuicateco/vocabulary/animals/index.html",
    "revision": "8ce6dc0a074c96728ab5027b03186354"
  },
  {
    "url": "mx/cuicateco/vocabulary/greetings/index.html",
    "revision": "e71f614e9261933621e18e86aea9b57e"
  },
  {
    "url": "mx/cuicateco/vocabulary/more_used/index.html",
    "revision": "d8d1db7102cdf7a67530b8ee9b9b76b1"
  },
  {
    "url": "mx/cuicateco/vocabulary/people/index.html",
    "revision": "79d463241e1b9518f6b0c715a7894133"
  },
  {
    "url": "mx/cuicateco/vocabulary/phrases/index.html",
    "revision": "882d3891c50520c0ab3eabc854877589"
  },
  {
    "url": "mx/ixcateco/courses/basic/index.html",
    "revision": "cc0606ccefd679763e738ab4632f06b9"
  },
  {
    "url": "mx/ixcateco/courses/intermediate/index.html",
    "revision": "d3a0ce55d012b697e402e1c0029b09a1"
  },
  {
    "url": "mx/ixcateco/dictionary/glossary.html",
    "revision": "8ae0e7e680f87eb2524e4cc3f0045f05"
  },
  {
    "url": "mx/ixcateco/dictionary/index.html",
    "revision": "d551a0e05b021b76eec5dab0f26b6845"
  },
  {
    "url": "mx/ixcateco/grammar/adjective/index.html",
    "revision": "4f6d04ee3ec582ba0a8c8cd0a4ecf563"
  },
  {
    "url": "mx/ixcateco/grammar/adverb/index.html",
    "revision": "228f1fbb5f27859d2c1cc76b2c9d1ea0"
  },
  {
    "url": "mx/ixcateco/grammar/alphabet/index.html",
    "revision": "4989e0ac6e7c25d7a3285df91cab0526"
  },
  {
    "url": "mx/ixcateco/grammar/article/index.html",
    "revision": "d6f8fcf041f30624e96feb7a42645bbd"
  },
  {
    "url": "mx/ixcateco/grammar/guide/index.html",
    "revision": "1f74e9da72644fd8e7b3a873ab2f8e7f"
  },
  {
    "url": "mx/ixcateco/grammar/verbs/index.html",
    "revision": "48ef7a6ff01e18ade9ffd79f75c9ef18"
  },
  {
    "url": "mx/ixcateco/index.html",
    "revision": "c40fee6f0f98dac9ed7f0070fe68b87a"
  },
  {
    "url": "mx/ixcateco/vocabulary/animals/index.html",
    "revision": "8b0562555e80bcb18bf57da4a7878386"
  },
  {
    "url": "mx/ixcateco/vocabulary/greetings/index.html",
    "revision": "780d2c9a00879b9fb2351c05bfda7771"
  },
  {
    "url": "mx/ixcateco/vocabulary/more_used/index.html",
    "revision": "48833519bda2856fbe4ecaf826f91e25"
  },
  {
    "url": "mx/ixcateco/vocabulary/people/index.html",
    "revision": "b475eca58f24eac7ee2a842b6db5e464"
  },
  {
    "url": "mx/ixcateco/vocabulary/phrases/index.html",
    "revision": "4103af6043d8e3dfa793c4d1f91b8543"
  },
  {
    "url": "mx/matlatzinca/courses/basic/index.html",
    "revision": "c2e365574ce0ee1f80e8deb1cdbcab33"
  },
  {
    "url": "mx/matlatzinca/courses/intermediate/index.html",
    "revision": "6f652c6a7351456ac08b3660a77c21cb"
  },
  {
    "url": "mx/matlatzinca/dictionary/glossary.html",
    "revision": "cab6ebc40ff7a1453989912265d48656"
  },
  {
    "url": "mx/matlatzinca/dictionary/index.html",
    "revision": "74ef51edfb282ecf2d25c0917a0006ad"
  },
  {
    "url": "mx/matlatzinca/grammar/adjective/index.html",
    "revision": "83a9e814af2345c702d173920163e6f4"
  },
  {
    "url": "mx/matlatzinca/grammar/adverb/index.html",
    "revision": "5f046c75f426bb3d61939fe9d4b430e8"
  },
  {
    "url": "mx/matlatzinca/grammar/alphabet/index.html",
    "revision": "b5f091b7e84837758592dc693b535ed6"
  },
  {
    "url": "mx/matlatzinca/grammar/article/index.html",
    "revision": "ce08e02a3121f8bfbebfca14f71e1a3b"
  },
  {
    "url": "mx/matlatzinca/grammar/guide/index.html",
    "revision": "66d069a08061c69fee4870752022d313"
  },
  {
    "url": "mx/matlatzinca/grammar/verbs/index.html",
    "revision": "46f27513879bcb7b48d4e44f4cdc20a5"
  },
  {
    "url": "mx/matlatzinca/index.html",
    "revision": "1626c74ad0efb20d5b2ac5050e919823"
  },
  {
    "url": "mx/matlatzinca/vocabulary/animals/index.html",
    "revision": "98648f439e5f9ff77375694bc01774be"
  },
  {
    "url": "mx/matlatzinca/vocabulary/greetings/index.html",
    "revision": "58fe98ce2eae312080a8e97ab360fd9d"
  },
  {
    "url": "mx/matlatzinca/vocabulary/more_used/index.html",
    "revision": "c94962d9c5df3db2fe251a3129586cd1"
  },
  {
    "url": "mx/matlatzinca/vocabulary/people/index.html",
    "revision": "5639d42420dc249d9d5600b157521802"
  },
  {
    "url": "mx/matlatzinca/vocabulary/phrases/index.html",
    "revision": "0480f9663986fae2c5875dfa0ca3564d"
  },
  {
    "url": "mx/maya/courses/basic/index.html",
    "revision": "262ef9ecb013ce73d61dde67631055ce"
  },
  {
    "url": "mx/maya/courses/intermediate/index.html",
    "revision": "d6d5ae819562c2f4e6352a4ad4f6661e"
  },
  {
    "url": "mx/maya/dictionary/glossary.html",
    "revision": "d5ae8ce293c49ce6c89631813a9a950d"
  },
  {
    "url": "mx/maya/dictionary/index.html",
    "revision": "a355007b28aec8d2e65dbad44f4a867a"
  },
  {
    "url": "mx/maya/grammar/adjective/index.html",
    "revision": "8e9e94062a02b2071f27e3c617ef5af8"
  },
  {
    "url": "mx/maya/grammar/adverb/index.html",
    "revision": "64abdbc8110806be0c9285f0ac6c7b21"
  },
  {
    "url": "mx/maya/grammar/alphabet/index.html",
    "revision": "aa2d0ec698cc7f6e4ff73d373576e999"
  },
  {
    "url": "mx/maya/grammar/article/index.html",
    "revision": "a4b768e469da84a305e481bec8f5ad7d"
  },
  {
    "url": "mx/maya/grammar/guide/index.html",
    "revision": "320c9166ae2ebd8e603f3ea951cc104f"
  },
  {
    "url": "mx/maya/grammar/verbs/index.html",
    "revision": "e0451f1ab5212877647a562e42d89203"
  },
  {
    "url": "mx/maya/index.html",
    "revision": "65e90642f869332391acff939a0e07ee"
  },
  {
    "url": "mx/maya/vocabulary/animals/index.html",
    "revision": "2c2244f6daeeb7550a6cea99e932b44f"
  },
  {
    "url": "mx/maya/vocabulary/greetings/index.html",
    "revision": "307ea36749bc92d2ebc2d8172caf9a3d"
  },
  {
    "url": "mx/maya/vocabulary/more_used/index.html",
    "revision": "7da5e093a5c7a449e1ac0df6c6a176c9"
  },
  {
    "url": "mx/maya/vocabulary/people/index.html",
    "revision": "5f351a044d18dc243c8a826259a6beb9"
  },
  {
    "url": "mx/maya/vocabulary/phrases/index.html",
    "revision": "0724437ad25afba427ed1df843aa2adf"
  },
  {
    "url": "mx/mazahua/courses/basic/index.html",
    "revision": "964f4399974a941aa2c327d00435d360"
  },
  {
    "url": "mx/mazahua/courses/intermediate/index.html",
    "revision": "d093c17bf8715321758cf51ce1946440"
  },
  {
    "url": "mx/mazahua/dictionary/glossary.html",
    "revision": "c13ca2acee8ff89a2199199d707e573a"
  },
  {
    "url": "mx/mazahua/dictionary/index.html",
    "revision": "c036ac62ff3dca6ebfe2309bf31b82f2"
  },
  {
    "url": "mx/mazahua/grammar/adjective/index.html",
    "revision": "9a7a02e5ef7421d0ebc0e8801612db46"
  },
  {
    "url": "mx/mazahua/grammar/adverb/index.html",
    "revision": "be913622132f7597dbe39aa1c8410cb7"
  },
  {
    "url": "mx/mazahua/grammar/alphabet/index.html",
    "revision": "a95e1b7f40f1b02b45f31e14a1dc8fe8"
  },
  {
    "url": "mx/mazahua/grammar/article/index.html",
    "revision": "22205fad8600e5add6de62a53b8b3bfd"
  },
  {
    "url": "mx/mazahua/grammar/guide/index.html",
    "revision": "afa2cfd4cfd0ec79540a8792e879fdcb"
  },
  {
    "url": "mx/mazahua/grammar/verbs/index.html",
    "revision": "4acfb7caf5f0bc522dda47a0ccbab359"
  },
  {
    "url": "mx/mazahua/index.html",
    "revision": "344aeea096725b0db52c410f8119d6de"
  },
  {
    "url": "mx/mazahua/vocabulary/animals/index.html",
    "revision": "c302faceb312445506a220e3a56100e5"
  },
  {
    "url": "mx/mazahua/vocabulary/greetings/index.html",
    "revision": "49984421cf48bb3d131be96761b86f8f"
  },
  {
    "url": "mx/mazahua/vocabulary/more_used/index.html",
    "revision": "6f1b66d8ece292c2416245186fcb088b"
  },
  {
    "url": "mx/mazahua/vocabulary/people/index.html",
    "revision": "3aa1633a8859178ef59a60ecc4d0ace7"
  },
  {
    "url": "mx/mazahua/vocabulary/phrases/index.html",
    "revision": "9910d3fcf9602b25acecf452a16faef1"
  },
  {
    "url": "mx/mixe/courses/basic/index.html",
    "revision": "b87fe52edcd8e184b59038f2f7a22023"
  },
  {
    "url": "mx/mixe/courses/intermediate/index.html",
    "revision": "71dbce2c2461d130e5838379eb97a690"
  },
  {
    "url": "mx/mixe/dictionary/glossary.html",
    "revision": "09d70f8eb4335830e059fb4c75410835"
  },
  {
    "url": "mx/mixe/dictionary/index.html",
    "revision": "15883618c9ab041e534a41a3a51440d9"
  },
  {
    "url": "mx/mixe/grammar/adjective/index.html",
    "revision": "b0b14ea4e782c875ff86bfa1d67c5458"
  },
  {
    "url": "mx/mixe/grammar/adverb/index.html",
    "revision": "b29ddd7a42e0edd1b97a318694c85101"
  },
  {
    "url": "mx/mixe/grammar/alphabet/index.html",
    "revision": "75dd1939222fc7e09ae7745070bae2a0"
  },
  {
    "url": "mx/mixe/grammar/article/index.html",
    "revision": "c58440de27e95741af33c59c95851f2f"
  },
  {
    "url": "mx/mixe/grammar/guide/index.html",
    "revision": "ebd16e4d7cddc21a7ffc0efc62e38bc9"
  },
  {
    "url": "mx/mixe/grammar/verbs/index.html",
    "revision": "b00563c2d409949c800fc51ec7e70013"
  },
  {
    "url": "mx/mixe/index.html",
    "revision": "1b92813e25adfdb985078723d72a94ce"
  },
  {
    "url": "mx/mixe/vocabulary/animals/index.html",
    "revision": "888a1cfbb485d151b805a15c968ff5e3"
  },
  {
    "url": "mx/mixe/vocabulary/greetings/index.html",
    "revision": "3da94c65401cbb62e3f7bcb9eef5050e"
  },
  {
    "url": "mx/mixe/vocabulary/more_used/index.html",
    "revision": "fc97437bf939d91f5cf98ddafb084eed"
  },
  {
    "url": "mx/mixe/vocabulary/people/index.html",
    "revision": "09ba8af31ccbbf20dc27182cc4b639d4"
  },
  {
    "url": "mx/mixe/vocabulary/phrases/index.html",
    "revision": "8fbe930679634ef063e45e4a8e0e7150"
  },
  {
    "url": "mx/oluteco/courses/basic/index.html",
    "revision": "ed3fa926859f050b6cd5cdfd38ea9a5b"
  },
  {
    "url": "mx/oluteco/courses/intermediate/index.html",
    "revision": "29e6b517d22e80a896657eeee41b8680"
  },
  {
    "url": "mx/oluteco/dictionary/glossary.html",
    "revision": "23500b890b702f75b1f0b13a266171d8"
  },
  {
    "url": "mx/oluteco/dictionary/index.html",
    "revision": "c753b1a9ba021f8bb04cfd96d7413d06"
  },
  {
    "url": "mx/oluteco/grammar/adjective/index.html",
    "revision": "fd67ff800941c8c0e0993199f3e2a20f"
  },
  {
    "url": "mx/oluteco/grammar/adverb/index.html",
    "revision": "a466ba46070e7dd3cf7578851f99af83"
  },
  {
    "url": "mx/oluteco/grammar/alphabet/index.html",
    "revision": "d73c842cc7da022c93ade3fbbd212091"
  },
  {
    "url": "mx/oluteco/grammar/article/index.html",
    "revision": "caeb43017ccac4cd4bafb980977e7e26"
  },
  {
    "url": "mx/oluteco/grammar/guide/index.html",
    "revision": "8dfc14ea2ce053da637bdb2804fd59a4"
  },
  {
    "url": "mx/oluteco/grammar/verbs/index.html",
    "revision": "44d99f18ce61d2b9186d3cee8491d426"
  },
  {
    "url": "mx/oluteco/index.html",
    "revision": "56eb48a160c59cf1fd89309e6d0b2a6b"
  },
  {
    "url": "mx/oluteco/vocabulary/animals/index.html",
    "revision": "eb758a6b298f177fd2280c4cc1b8eb92"
  },
  {
    "url": "mx/oluteco/vocabulary/greetings/index.html",
    "revision": "88cf7cb45da1290da1aeb0d6fb60e185"
  },
  {
    "url": "mx/oluteco/vocabulary/more_used/index.html",
    "revision": "751cd9c5e9f7362749126cca0e5f6e9d"
  },
  {
    "url": "mx/oluteco/vocabulary/people/index.html",
    "revision": "99fbb1ac45e8121c2742d749e6adeeb4"
  },
  {
    "url": "mx/oluteco/vocabulary/phrases/index.html",
    "revision": "28c164836c98dce6b58653ba97911264"
  },
  {
    "url": "mx/popoluca/courses/basic/index.html",
    "revision": "811f3ffaa76bf4f74f98c058aa5b6da0"
  },
  {
    "url": "mx/popoluca/courses/intermediate/index.html",
    "revision": "06bdd8785004cba108d7802e38ea3db7"
  },
  {
    "url": "mx/popoluca/dictionary/glossary.html",
    "revision": "6a1f0f4cba0915b0007fe5cfc8646b89"
  },
  {
    "url": "mx/popoluca/dictionary/index.html",
    "revision": "f0dc67c3426e3b6f745fb8f206750789"
  },
  {
    "url": "mx/popoluca/grammar/adjective/index.html",
    "revision": "b778896e78b8711f27cbdd7e3bc4cf2f"
  },
  {
    "url": "mx/popoluca/grammar/adverb/index.html",
    "revision": "0b53ce176ec54d341d22681afa915f02"
  },
  {
    "url": "mx/popoluca/grammar/alphabet/index.html",
    "revision": "118f412cff2bafba90509a22a0641a36"
  },
  {
    "url": "mx/popoluca/grammar/article/index.html",
    "revision": "e8bb77b9abc6c3df6fa819c6ca610647"
  },
  {
    "url": "mx/popoluca/grammar/guide/index.html",
    "revision": "1908a46180f85f3c2cc26da2a1227dfa"
  },
  {
    "url": "mx/popoluca/grammar/verbs/index.html",
    "revision": "619c72fa445dde4b88d94cd91eeaf9f7"
  },
  {
    "url": "mx/popoluca/index.html",
    "revision": "e5d96b2ea0ec0fc0d713cb9383d96a0b"
  },
  {
    "url": "mx/popoluca/vocabulary/animals/index.html",
    "revision": "fc2b57472621a8d91bb4db4389dd2caa"
  },
  {
    "url": "mx/popoluca/vocabulary/greetings/index.html",
    "revision": "bcc9175f0d452a370c98afd130c253eb"
  },
  {
    "url": "mx/popoluca/vocabulary/more_used/index.html",
    "revision": "14e02c63f2f5b3a5271a6afe9f24145b"
  },
  {
    "url": "mx/popoluca/vocabulary/people/index.html",
    "revision": "2daae898040d2df336cd97e9d41884ec"
  },
  {
    "url": "mx/popoluca/vocabulary/phrases/index.html",
    "revision": "ac7118b5f8c0e8fb809e8800af0326c2"
  },
  {
    "url": "mx/sayulteco/courses/basic/index.html",
    "revision": "96ba1f536e54209b2caaa838ee92efd6"
  },
  {
    "url": "mx/sayulteco/courses/intermediate/index.html",
    "revision": "d2595d88fcbaca14f96842c811a95b7e"
  },
  {
    "url": "mx/sayulteco/dictionary/glossary.html",
    "revision": "e47300632d2c5fe634d513d07f970207"
  },
  {
    "url": "mx/sayulteco/dictionary/index.html",
    "revision": "e8218334e5eacd34b7dba718b1d52dc0"
  },
  {
    "url": "mx/sayulteco/grammar/adjective/index.html",
    "revision": "a0027ca7f5e5752e56b15c20065441cf"
  },
  {
    "url": "mx/sayulteco/grammar/adverb/index.html",
    "revision": "a86c290705b8217f76fa17eba1d527e9"
  },
  {
    "url": "mx/sayulteco/grammar/alphabet/index.html",
    "revision": "d13c3643246d90b9ed3eb6f2cefef44b"
  },
  {
    "url": "mx/sayulteco/grammar/article/index.html",
    "revision": "d0f825193c6c925082ece2f3cb0d6ff4"
  },
  {
    "url": "mx/sayulteco/grammar/guide/index.html",
    "revision": "c277ae2ff8adf839e8062220c94e4f59"
  },
  {
    "url": "mx/sayulteco/grammar/verbs/index.html",
    "revision": "9882d6135dce152012f26e6f8efd0180"
  },
  {
    "url": "mx/sayulteco/index.html",
    "revision": "aa6dc5dd249d29fd77e5179c5e8a3aed"
  },
  {
    "url": "mx/sayulteco/vocabulary/animals/index.html",
    "revision": "6efd5fa028752f3d9f937f0d98cdd197"
  },
  {
    "url": "mx/sayulteco/vocabulary/greetings/index.html",
    "revision": "d0a42d7d4a54501b446b859ff89e2ae4"
  },
  {
    "url": "mx/sayulteco/vocabulary/more_used/index.html",
    "revision": "add585bdb8bcb256542701b56d1f8004"
  },
  {
    "url": "mx/sayulteco/vocabulary/people/index.html",
    "revision": "d66b4d7104ae14ccab368c24dfd1f51a"
  },
  {
    "url": "mx/sayulteco/vocabulary/phrases/index.html",
    "revision": "bdac11523ca857fe1ff581011090ab72"
  },
  {
    "url": "mx/texistepequeno/courses/basic/index.html",
    "revision": "c7c3abafe14e45727c8476af07dc02c4"
  },
  {
    "url": "mx/texistepequeno/courses/intermediate/index.html",
    "revision": "06159d92dc34526093845ae19395a544"
  },
  {
    "url": "mx/texistepequeno/dictionary/glossary.html",
    "revision": "a4e1c6caa4c1c96f29281f7d08ea3ff0"
  },
  {
    "url": "mx/texistepequeno/dictionary/index.html",
    "revision": "f0f324ad09ca7eaf34ab543726b62b10"
  },
  {
    "url": "mx/texistepequeno/grammar/adjective/index.html",
    "revision": "d0aa91bdbdc5d28f006b3504a23f0143"
  },
  {
    "url": "mx/texistepequeno/grammar/adverb/index.html",
    "revision": "fb833aee1e2d2c406e149b65f3207de9"
  },
  {
    "url": "mx/texistepequeno/grammar/alphabet/index.html",
    "revision": "b8c9e332a5632a73d33f0f4d07843f92"
  },
  {
    "url": "mx/texistepequeno/grammar/article/index.html",
    "revision": "599d5bdfacaecbf4e909728d44d4e9cd"
  },
  {
    "url": "mx/texistepequeno/grammar/guide/index.html",
    "revision": "2a4eb3e765fd1298cd8ce15087b2aee3"
  },
  {
    "url": "mx/texistepequeno/grammar/verbs/index.html",
    "revision": "95c63c8eaaab52a2dec31ad1f4b1bd3a"
  },
  {
    "url": "mx/texistepequeno/index.html",
    "revision": "a8a22ae2268853f606862047c9ed2632"
  },
  {
    "url": "mx/texistepequeno/vocabulary/animals/index.html",
    "revision": "2aed146d2c75e9b62801862bd59f987c"
  },
  {
    "url": "mx/texistepequeno/vocabulary/greetings/index.html",
    "revision": "899b0f6de74b4060a1925ae49a597b20"
  },
  {
    "url": "mx/texistepequeno/vocabulary/more_used/index.html",
    "revision": "a9770be715749d2e57b596d4e2139ff7"
  },
  {
    "url": "mx/texistepequeno/vocabulary/people/index.html",
    "revision": "28a0dcae861af8ec42f5f4f4bfa1b656"
  },
  {
    "url": "mx/texistepequeno/vocabulary/phrases/index.html",
    "revision": "91c8bb6c5eeb80df2ea0dffef05d42ba"
  },
  {
    "url": "mx/tlahuica/courses/basic/index.html",
    "revision": "8402a0d4730914aae890e3206f8186d3"
  },
  {
    "url": "mx/tlahuica/courses/intermediate/index.html",
    "revision": "f30845e127b0544aeca49166e21df32a"
  },
  {
    "url": "mx/tlahuica/dictionary/glossary.html",
    "revision": "b788fb3dc9515f24f50408a9abff1cb2"
  },
  {
    "url": "mx/tlahuica/dictionary/index.html",
    "revision": "4a363de9308c7eb7b9b931001b6bd052"
  },
  {
    "url": "mx/tlahuica/grammar/adjective/index.html",
    "revision": "18bdbc67886ca35d3f4f832ed3fd4d1a"
  },
  {
    "url": "mx/tlahuica/grammar/adverb/index.html",
    "revision": "f59cf7c124d1f351bb1829df0721a58c"
  },
  {
    "url": "mx/tlahuica/grammar/alphabet/index.html",
    "revision": "635d8ad2a23ab2b9de2eb311f28f7ce7"
  },
  {
    "url": "mx/tlahuica/grammar/article/index.html",
    "revision": "bd9e43566134820f61410deddb86f324"
  },
  {
    "url": "mx/tlahuica/grammar/guide/index.html",
    "revision": "e2ad2caade421c62d5da77a9d5a291fd"
  },
  {
    "url": "mx/tlahuica/grammar/verbs/index.html",
    "revision": "61f394f5127f53686fd38dc7f2bc1558"
  },
  {
    "url": "mx/tlahuica/index.html",
    "revision": "2a11b701e1a86d824be944501c2149c5"
  },
  {
    "url": "mx/tlahuica/vocabulary/animals/index.html",
    "revision": "dd69f57f022359931e598ce45441312f"
  },
  {
    "url": "mx/tlahuica/vocabulary/greetings/index.html",
    "revision": "f05675c2e190202149bf2f76cec61c7c"
  },
  {
    "url": "mx/tlahuica/vocabulary/more_used/index.html",
    "revision": "992190be2554c855e9f6a96d07fbd446"
  },
  {
    "url": "mx/tlahuica/vocabulary/people/index.html",
    "revision": "9c7118b1f76b9f0f0a0f1c49561fe54f"
  },
  {
    "url": "mx/tlahuica/vocabulary/phrases/index.html",
    "revision": "06a586b326f6c866dd9605efbadfe331"
  },
  {
    "url": "mx/tlapaneco/courses/basic/index.html",
    "revision": "013d76f25bd5e603515fede0a0acdb26"
  },
  {
    "url": "mx/tlapaneco/courses/intermediate/index.html",
    "revision": "dba588539ea30484dc78285d87be8e15"
  },
  {
    "url": "mx/tlapaneco/dictionary/glossary.html",
    "revision": "47201821ccb74a654521a92fbe9786c4"
  },
  {
    "url": "mx/tlapaneco/dictionary/index.html",
    "revision": "872128a6cd46fc305f96cb7b0196bfc6"
  },
  {
    "url": "mx/tlapaneco/grammar/adjective/index.html",
    "revision": "f8ebb4df872db85ebb79b4128b78ca87"
  },
  {
    "url": "mx/tlapaneco/grammar/adverb/index.html",
    "revision": "13349912dbd401acd8d5943308bcf6aa"
  },
  {
    "url": "mx/tlapaneco/grammar/alphabet/index.html",
    "revision": "62712693f8f37b38edb5d02e652a3954"
  },
  {
    "url": "mx/tlapaneco/grammar/article/index.html",
    "revision": "a23e9371d3f306e81f16b20f08906ef1"
  },
  {
    "url": "mx/tlapaneco/grammar/guide/index.html",
    "revision": "2c8c97e57b613986fbf83da10bc3cacc"
  },
  {
    "url": "mx/tlapaneco/grammar/verbs/index.html",
    "revision": "7a9e4c7916394a539ffa6cd20727800b"
  },
  {
    "url": "mx/tlapaneco/index.html",
    "revision": "35a396b8d74da7427be95f9eb4ed58ba"
  },
  {
    "url": "mx/tlapaneco/vocabulary/animals/index.html",
    "revision": "a635c7cfc8ba9312d031b080d0fa38c8"
  },
  {
    "url": "mx/tlapaneco/vocabulary/greetings/index.html",
    "revision": "f87b70d0ff4b3e3ec7f95616f146ab55"
  },
  {
    "url": "mx/tlapaneco/vocabulary/more_used/index.html",
    "revision": "6df3841a4640d112a85fe8adef389932"
  },
  {
    "url": "mx/tlapaneco/vocabulary/people/index.html",
    "revision": "0220976b8fa90ead1aa1097704695a77"
  },
  {
    "url": "mx/tlapaneco/vocabulary/phrases/index.html",
    "revision": "ec293b945543f74fb17f7434f865b497"
  },
  {
    "url": "mx/tojolabal/courses/basic/index.html",
    "revision": "9f331c6706d2f7fe09f638341afb8ce4"
  },
  {
    "url": "mx/tojolabal/courses/intermediate/index.html",
    "revision": "48cb1dac0a8317bf7ed50bc3d964e43c"
  },
  {
    "url": "mx/tojolabal/dictionary/glossary.html",
    "revision": "313647ff7125cd3f92d2652da83d13ef"
  },
  {
    "url": "mx/tojolabal/dictionary/index.html",
    "revision": "c0b3852e2248db4d8b8ca030ffa803f5"
  },
  {
    "url": "mx/tojolabal/grammar/adjective/index.html",
    "revision": "436618da0b5de4fdd7b534c126d01dc2"
  },
  {
    "url": "mx/tojolabal/grammar/adverb/index.html",
    "revision": "bf66ef147a1da1d62655f8e3c64236ae"
  },
  {
    "url": "mx/tojolabal/grammar/alphabet/index.html",
    "revision": "2019b4d491aaebe3e9643c3eb40307a5"
  },
  {
    "url": "mx/tojolabal/grammar/article/index.html",
    "revision": "9c63897324ba2922b9f20a65a2e12480"
  },
  {
    "url": "mx/tojolabal/grammar/guide/index.html",
    "revision": "6f4f5f37d1d776351093bfa8d5a03e47"
  },
  {
    "url": "mx/tojolabal/grammar/verbs/index.html",
    "revision": "e2d8064080f70c2e7d46718b322e01c8"
  },
  {
    "url": "mx/tojolabal/index.html",
    "revision": "45ad09a7164884fb5542a691496f0aa5"
  },
  {
    "url": "mx/tojolabal/vocabulary/animals/index.html",
    "revision": "71c6f4a146e3861fe71e4e92356c0d58"
  },
  {
    "url": "mx/tojolabal/vocabulary/greetings/index.html",
    "revision": "706e8a9036b5275495c41b618748d1c1"
  },
  {
    "url": "mx/tojolabal/vocabulary/more_used/index.html",
    "revision": "8eb5505bdd21e9eb1817b7770cd1dd71"
  },
  {
    "url": "mx/tojolabal/vocabulary/people/index.html",
    "revision": "2567e69a3ce380a57bb756efececa57d"
  },
  {
    "url": "mx/tojolabal/vocabulary/phrases/index.html",
    "revision": "6646cbf55d112721a136f1b43e2ce70f"
  },
  {
    "url": "mx/triqui/courses/basic/index.html",
    "revision": "a6af83723fe6969e7ea7663942af2477"
  },
  {
    "url": "mx/triqui/courses/intermediate/index.html",
    "revision": "680cda05f9a7a4acef4e20d13cd5738b"
  },
  {
    "url": "mx/triqui/dictionary/glossary.html",
    "revision": "53edef9de018fe7d091c4852f5774c3b"
  },
  {
    "url": "mx/triqui/dictionary/index.html",
    "revision": "b2f7e688b0fa20c89c41e4fd9ac7d12d"
  },
  {
    "url": "mx/triqui/grammar/adjective/index.html",
    "revision": "945a7533f764433236c3ef1ff5f5d0cc"
  },
  {
    "url": "mx/triqui/grammar/adverb/index.html",
    "revision": "845e9ff7ad77b00cb5b70b999e0e800d"
  },
  {
    "url": "mx/triqui/grammar/alphabet/index.html",
    "revision": "a151096b3489f7fb54ee6750f23f6700"
  },
  {
    "url": "mx/triqui/grammar/article/index.html",
    "revision": "3a14f1a6a827ce6761dceeb223e8a668"
  },
  {
    "url": "mx/triqui/grammar/guide/index.html",
    "revision": "8f5ea93c74a87a6ad47a22e792963786"
  },
  {
    "url": "mx/triqui/grammar/verbs/index.html",
    "revision": "94c6b035fb1457df5ebabf6596c43a73"
  },
  {
    "url": "mx/triqui/index.html",
    "revision": "ef39b7aec7d37bb6d801636d7596c4af"
  },
  {
    "url": "mx/triqui/vocabulary/animals/index.html",
    "revision": "53da0c3e057439368bd83c391c8b60dc"
  },
  {
    "url": "mx/triqui/vocabulary/greetings/index.html",
    "revision": "7719f9fdafd88fcb163537431383277e"
  },
  {
    "url": "mx/triqui/vocabulary/more_used/index.html",
    "revision": "61fa3bcd7099f12dab83a6f2723ec9cf"
  },
  {
    "url": "mx/triqui/vocabulary/people/index.html",
    "revision": "5239754bf3916a3fb6dcd1f0e374b4a5"
  },
  {
    "url": "mx/triqui/vocabulary/phrases/index.html",
    "revision": "10f12f63b97b3f809b7c3bde93b7ec77"
  },
  {
    "url": "mx/tseltal/courses/basic/index.html",
    "revision": "7df3d0fafe5cc048afd272dda9c88b45"
  },
  {
    "url": "mx/tseltal/courses/intermediate/index.html",
    "revision": "113e337d61343634f22f2b9d269e1204"
  },
  {
    "url": "mx/tseltal/dictionary/glossary.html",
    "revision": "b6d980ad5e93226bdbce0d9cf58a724c"
  },
  {
    "url": "mx/tseltal/dictionary/index.html",
    "revision": "ac7fdae4d22705790f0cb5c8e2a6d458"
  },
  {
    "url": "mx/tseltal/grammar/adjective/index.html",
    "revision": "e48f84a8cde0b1435c608b6dccf74760"
  },
  {
    "url": "mx/tseltal/grammar/adverb/index.html",
    "revision": "86b18f9c5cc3a0ca2756b6c5beb32c20"
  },
  {
    "url": "mx/tseltal/grammar/alphabet/index.html",
    "revision": "13d45d308a41343de614538b35ee5165"
  },
  {
    "url": "mx/tseltal/grammar/article/index.html",
    "revision": "aaca485247e27cd0f5d9a43ea9188c81"
  },
  {
    "url": "mx/tseltal/grammar/guide/index.html",
    "revision": "02fffdbcd50523d33c5ae3e1d0cc22b3"
  },
  {
    "url": "mx/tseltal/grammar/verbs/index.html",
    "revision": "5a315dba9d44c165b8bbd9c98172428b"
  },
  {
    "url": "mx/tseltal/index.html",
    "revision": "36e212eef7f77eedb752c2e73d416570"
  },
  {
    "url": "mx/tseltal/vocabulary/animals/index.html",
    "revision": "44302f61ea5ee91a8edd02bd4ce016e5"
  },
  {
    "url": "mx/tseltal/vocabulary/greetings/index.html",
    "revision": "7f289887598ba5d7243551582c6ce5ca"
  },
  {
    "url": "mx/tseltal/vocabulary/more_used/index.html",
    "revision": "cad517ba3ea2048e8ba68d7608198552"
  },
  {
    "url": "mx/tseltal/vocabulary/people/index.html",
    "revision": "50906710da56ae25b48813cfe816182c"
  },
  {
    "url": "mx/tseltal/vocabulary/phrases/index.html",
    "revision": "07edc9c2c1d49c9b4d11bcbc021b4a87"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
