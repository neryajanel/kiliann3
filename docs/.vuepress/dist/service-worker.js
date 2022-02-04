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
    "revision": "f99734ad01382391fd2397407cb8b162"
  },
  {
    "url": "assets/css/0.styles.344bdea9.css",
    "revision": "460ee595697939c76554bc5341143fb2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8b1efc70.js",
    "revision": "ffac289c72bc7cf35537b2eb698c9e64"
  },
  {
    "url": "assets/js/100.85bdadcb.js",
    "revision": "0bc107bde084a7f7e3df58b8db80f118"
  },
  {
    "url": "assets/js/101.4346051d.js",
    "revision": "cabbc05ef615621e0aac7c7308f098fc"
  },
  {
    "url": "assets/js/102.3a81159c.js",
    "revision": "0ae738334f4092d764a2711a903f80f9"
  },
  {
    "url": "assets/js/103.67682e30.js",
    "revision": "ae6afd9361d35cadd1d3d896c77b6fe4"
  },
  {
    "url": "assets/js/104.0f4a9b4c.js",
    "revision": "41f7c09c55df9acff2b1d4929c2608ad"
  },
  {
    "url": "assets/js/105.769812b6.js",
    "revision": "254c918376f3c92b36f170e93e0b2488"
  },
  {
    "url": "assets/js/106.8bed4641.js",
    "revision": "983b97b33d2fc57bd225b37b4195cf94"
  },
  {
    "url": "assets/js/107.ddd2059e.js",
    "revision": "10e497dac4b4ea5090ca68ddd09a0509"
  },
  {
    "url": "assets/js/108.33cfc562.js",
    "revision": "9ff346e74561364d760d581b225f8f1f"
  },
  {
    "url": "assets/js/109.05d1fbde.js",
    "revision": "e21f27c384f4efb53a0c027e378cb048"
  },
  {
    "url": "assets/js/11.6295f30e.js",
    "revision": "b77a2de0042e10c6d8a0d02da0ef90b4"
  },
  {
    "url": "assets/js/110.5a5a3ccc.js",
    "revision": "912740a49bcea3c4a2b5ebcc29856784"
  },
  {
    "url": "assets/js/111.f7773e06.js",
    "revision": "380b28d42a556de7f8a71487b3b0a8e2"
  },
  {
    "url": "assets/js/112.c759be96.js",
    "revision": "b85f9136b7f6e7c0a9f0bbeda9acbe8a"
  },
  {
    "url": "assets/js/113.6caece79.js",
    "revision": "d61e3e675e0e9e732384edd5c5657025"
  },
  {
    "url": "assets/js/114.632f80ca.js",
    "revision": "d39e7d318c191d7581ccfa3161717f9e"
  },
  {
    "url": "assets/js/115.f5faf3da.js",
    "revision": "6882602a146bd83443548111fcf99bae"
  },
  {
    "url": "assets/js/116.d8d2e172.js",
    "revision": "efc41015585c4a53c7d55420e1c0c12a"
  },
  {
    "url": "assets/js/117.adcc3501.js",
    "revision": "3b93fd94be341a69a4e869b70d3ecd92"
  },
  {
    "url": "assets/js/118.9139d8dc.js",
    "revision": "5c0efbec8c7d98d765a0180c1d33126b"
  },
  {
    "url": "assets/js/119.5f099883.js",
    "revision": "c8cbb3875d7612d3235bc764af9483a8"
  },
  {
    "url": "assets/js/12.bde0be2b.js",
    "revision": "c19d42637e3d2c5bb9c619d296aafc7f"
  },
  {
    "url": "assets/js/120.db89ad55.js",
    "revision": "42f8d711baaa7e9e19762348f7fdb4e6"
  },
  {
    "url": "assets/js/121.8cc6d226.js",
    "revision": "8f0c278a941f4dacf783160b9f6a8fea"
  },
  {
    "url": "assets/js/122.8cde70b4.js",
    "revision": "0302326499da0bde6505b1db22ab06cc"
  },
  {
    "url": "assets/js/123.bd6f78be.js",
    "revision": "d2d75c79171184847c7949df211659c2"
  },
  {
    "url": "assets/js/124.5bf1b239.js",
    "revision": "bc65cf0cfbf336a50e89afcb630bc763"
  },
  {
    "url": "assets/js/125.c6cd7d8e.js",
    "revision": "2bc85dd29705996f1f04c3bc3ea01648"
  },
  {
    "url": "assets/js/126.8dba9c8a.js",
    "revision": "88346619d42555c982004eb8c5da6ba6"
  },
  {
    "url": "assets/js/127.7e4f0f0a.js",
    "revision": "dba715d26de8b213bede7b7957206455"
  },
  {
    "url": "assets/js/128.624eab00.js",
    "revision": "10bb11e64b583cd8681afa07df969e74"
  },
  {
    "url": "assets/js/129.f67b2adb.js",
    "revision": "05afaff36d1789cae362f5dc74d80bb0"
  },
  {
    "url": "assets/js/13.bb065f74.js",
    "revision": "6c5313f09f7dfd60d8cdd8497c159c83"
  },
  {
    "url": "assets/js/130.7a0fb646.js",
    "revision": "49554c9224609aea2afc184b8a73e2d7"
  },
  {
    "url": "assets/js/131.1d6eadbf.js",
    "revision": "c12468819d4b4d98d7c2177f499caf8a"
  },
  {
    "url": "assets/js/132.26d42779.js",
    "revision": "cf51203beb4a9a7c347398a7dbc831bd"
  },
  {
    "url": "assets/js/133.7164b7ac.js",
    "revision": "4eb46fd26dcde90155331b7872af7caa"
  },
  {
    "url": "assets/js/134.72205b70.js",
    "revision": "0a2f9e1e94c2c8a1a5f86a8f0e3db8b8"
  },
  {
    "url": "assets/js/135.07edda36.js",
    "revision": "ec77076262060e37961c4075c8fbdaf5"
  },
  {
    "url": "assets/js/136.fedd3dd9.js",
    "revision": "89c1e9417753b9e117ae8fd169e786fb"
  },
  {
    "url": "assets/js/137.db8baee8.js",
    "revision": "b4b92dd47178bf810eb158ff380c0995"
  },
  {
    "url": "assets/js/138.31e7fcab.js",
    "revision": "559a484468914ff53aa1ed5c99c6f82b"
  },
  {
    "url": "assets/js/139.0fb5daa5.js",
    "revision": "28b6f5ab8c69ef5b01bc7d460fa9f490"
  },
  {
    "url": "assets/js/14.99b0f7c4.js",
    "revision": "13842dc7da88f38953655de68ca1d019"
  },
  {
    "url": "assets/js/140.38a27d3c.js",
    "revision": "f21e7f283c22b8f3d0f752d4fcd559bb"
  },
  {
    "url": "assets/js/141.c29ec52f.js",
    "revision": "6b04c03c8969d14f6c10713f15103f71"
  },
  {
    "url": "assets/js/142.84c00c5c.js",
    "revision": "e2c9bd93124da2fdee2990e1573e4104"
  },
  {
    "url": "assets/js/143.9d61a004.js",
    "revision": "bf4d982fbcc8d257380aba7782741452"
  },
  {
    "url": "assets/js/144.9787a305.js",
    "revision": "0192a73be33cde9257a93938a56f751f"
  },
  {
    "url": "assets/js/145.1944b9d7.js",
    "revision": "c2af16d5757f89e4ec793d43408b84b7"
  },
  {
    "url": "assets/js/146.6374d002.js",
    "revision": "7a19071da195edbc91472b55db6b4cd8"
  },
  {
    "url": "assets/js/147.72712129.js",
    "revision": "3cce2ac2f67168e6775e16a6abf5e19c"
  },
  {
    "url": "assets/js/148.8c4ec7cb.js",
    "revision": "e6f336f4ad25a3f024106c35f8345885"
  },
  {
    "url": "assets/js/149.b90395e1.js",
    "revision": "a81451ea406ed21d2912b211d4a31023"
  },
  {
    "url": "assets/js/15.c6909093.js",
    "revision": "9ded4af0896f7fbd6945cca19cae1d7b"
  },
  {
    "url": "assets/js/150.6eaa2f71.js",
    "revision": "2d686aae7c29d5903f3b358e2c64d47d"
  },
  {
    "url": "assets/js/151.8932b46e.js",
    "revision": "e9aaa7b3917dabad7ce5ff5ccc5972f5"
  },
  {
    "url": "assets/js/152.2fc121ab.js",
    "revision": "03532fd9fc48f0514d003245435654b1"
  },
  {
    "url": "assets/js/153.b052bfa7.js",
    "revision": "7c59ad26791c3cb8ed9b24a3470205dd"
  },
  {
    "url": "assets/js/154.1a27e8d9.js",
    "revision": "628b01f19314860e4ec123beaad7fe80"
  },
  {
    "url": "assets/js/155.b6ece8b3.js",
    "revision": "261a9906b962766bb23fbe4fd31ce7cf"
  },
  {
    "url": "assets/js/156.a5075c9c.js",
    "revision": "f9be971fa861ef0b0c0024e291dc41a4"
  },
  {
    "url": "assets/js/157.271f0fb0.js",
    "revision": "047f428b2d18ca8fb6b8763936bff39c"
  },
  {
    "url": "assets/js/158.1d94a875.js",
    "revision": "dfe0a67c6e901798f8617f97e293030a"
  },
  {
    "url": "assets/js/159.b0bdc732.js",
    "revision": "3faa4d7a029e9bcbe9395530904fb50e"
  },
  {
    "url": "assets/js/16.4c805b0f.js",
    "revision": "e58fc308ff94b4653a7a865f03992962"
  },
  {
    "url": "assets/js/160.bab097c5.js",
    "revision": "d64dc6256e10548974cfc423f99e72e2"
  },
  {
    "url": "assets/js/161.b9f6b4e5.js",
    "revision": "74b5e480ce9cc96b0dc889aed6f86fbd"
  },
  {
    "url": "assets/js/162.bbdf1bd2.js",
    "revision": "d0de5afcc3c9e10d6a0682d851babf44"
  },
  {
    "url": "assets/js/163.f9b74612.js",
    "revision": "22f5ae5efa8fd61e29c6c2619445f865"
  },
  {
    "url": "assets/js/164.24a09441.js",
    "revision": "e09d1a7ae5df2bf03999a4a5ec74effb"
  },
  {
    "url": "assets/js/165.84a64731.js",
    "revision": "9dab41f59dd3630dd44aa74e957e1120"
  },
  {
    "url": "assets/js/166.006098f7.js",
    "revision": "809d904445cd99956b946152073ad6c2"
  },
  {
    "url": "assets/js/167.9ee11ce2.js",
    "revision": "a990a167dc2cc336035fd0a246ac2ccb"
  },
  {
    "url": "assets/js/168.d3262fef.js",
    "revision": "832b12e48acbd0971b80de9e41773201"
  },
  {
    "url": "assets/js/169.56b8035d.js",
    "revision": "b56d21f31b8e9f8f90e81a22f4cea4bf"
  },
  {
    "url": "assets/js/17.021c601d.js",
    "revision": "a51b01b8550be583ac9d96d13ab68f81"
  },
  {
    "url": "assets/js/170.1ee4ecd7.js",
    "revision": "9a94857f4390c883f2f1f4c8727ec17e"
  },
  {
    "url": "assets/js/171.60db47c8.js",
    "revision": "a9b6af8040c5a6064746e85e524603ff"
  },
  {
    "url": "assets/js/172.13fe2160.js",
    "revision": "629116dd52e6dbfa0f653175505ac7b4"
  },
  {
    "url": "assets/js/173.26766ce2.js",
    "revision": "f5232b384cd15dedf68958fb3efecf29"
  },
  {
    "url": "assets/js/174.55c4866c.js",
    "revision": "843cfa5e721c5e773009a1856d8cb58a"
  },
  {
    "url": "assets/js/175.44fd9ff3.js",
    "revision": "86c4947ea83ed1b3be129d7b56043f6c"
  },
  {
    "url": "assets/js/176.820cb7f0.js",
    "revision": "b6118e112562e656351a5efb9ea214c4"
  },
  {
    "url": "assets/js/177.8f4b2a2d.js",
    "revision": "42c0447bbee72549843613776ab5f957"
  },
  {
    "url": "assets/js/178.2b85a5fd.js",
    "revision": "40d4f2b479d06cf7aa11e8b4d42f4cca"
  },
  {
    "url": "assets/js/179.01b1d0b7.js",
    "revision": "45042f381ebe3178b2b38666b11d98f7"
  },
  {
    "url": "assets/js/18.1a13b0ce.js",
    "revision": "8bce3f473665c6c39bd7beb114d642f2"
  },
  {
    "url": "assets/js/180.837c4fe9.js",
    "revision": "215762c1893816bf61e96171a81120c8"
  },
  {
    "url": "assets/js/181.bf7eeb31.js",
    "revision": "55ca61ed4aaebed9f38e3a0cff41139a"
  },
  {
    "url": "assets/js/182.97dddd1c.js",
    "revision": "4cbbcf1ccc6a73c98f6af8d3bdbad923"
  },
  {
    "url": "assets/js/183.a3e72e13.js",
    "revision": "539351ff4014191393490983479236b4"
  },
  {
    "url": "assets/js/184.c29284d2.js",
    "revision": "1014e6d4ee88df76e363c2a19efe77aa"
  },
  {
    "url": "assets/js/185.b6180dad.js",
    "revision": "f5cdf8547d448f139a22926fa9749128"
  },
  {
    "url": "assets/js/186.d716cf55.js",
    "revision": "1540725420fa040840ec1a10912c3693"
  },
  {
    "url": "assets/js/187.a2f5df17.js",
    "revision": "968e5c36ccdff46ebc695734986a2d72"
  },
  {
    "url": "assets/js/188.177ae671.js",
    "revision": "57cf78a20ec2bb7d39e214c5fa1d1dbd"
  },
  {
    "url": "assets/js/189.5aa4ca52.js",
    "revision": "b18b169fd1b9c77afa9a20b5a706f612"
  },
  {
    "url": "assets/js/19.0440a8ac.js",
    "revision": "b393c945d18a8256361739483949abe0"
  },
  {
    "url": "assets/js/190.0e60a376.js",
    "revision": "89a6cbcfb24abe273d071d452ce5754b"
  },
  {
    "url": "assets/js/191.03dd0033.js",
    "revision": "248ca096a1811d5745db3d5f81ab24ab"
  },
  {
    "url": "assets/js/192.cb6e409c.js",
    "revision": "ce9c310538e373f7688934e48b12c128"
  },
  {
    "url": "assets/js/193.0b239d7e.js",
    "revision": "e1caedfb7c82201ec1f6808ed43b3d46"
  },
  {
    "url": "assets/js/194.dc8d88ad.js",
    "revision": "d19417ac9ce8772ef4d1a58a3abe3c56"
  },
  {
    "url": "assets/js/195.84d3f354.js",
    "revision": "f059737e0f114abf56ed536f143404f9"
  },
  {
    "url": "assets/js/196.f67c0655.js",
    "revision": "2396f2014a1a54fd10a49b3904bb2d96"
  },
  {
    "url": "assets/js/197.c65df4cc.js",
    "revision": "b253fcdd507aec518186de44b6db5a20"
  },
  {
    "url": "assets/js/198.5b881204.js",
    "revision": "49df3f9bce51a7d0c1b247976d18a880"
  },
  {
    "url": "assets/js/199.1a14f4ea.js",
    "revision": "ac9a13f8e775ae6bce48f9ea9ca83966"
  },
  {
    "url": "assets/js/2.526feb35.js",
    "revision": "ee72fc2084673713d637298538c1310e"
  },
  {
    "url": "assets/js/20.fe618af9.js",
    "revision": "58e06e8df12450cc0b4443e2b2eab868"
  },
  {
    "url": "assets/js/200.dd18f1d2.js",
    "revision": "2b525e22fa29ef4d1d543b0b3b2ac2f2"
  },
  {
    "url": "assets/js/201.20c30e33.js",
    "revision": "a81dafe9ecb031af23fe5f38ba424513"
  },
  {
    "url": "assets/js/202.98380548.js",
    "revision": "437aa2baf6945b65385c16f2f4631e48"
  },
  {
    "url": "assets/js/203.bdf24c89.js",
    "revision": "6eebde4610ebba43b450b26f41a6a705"
  },
  {
    "url": "assets/js/204.c50c71c5.js",
    "revision": "ceed9416ecbfb6c5056ad36a8da9a4fc"
  },
  {
    "url": "assets/js/205.8ad0d81b.js",
    "revision": "1d35b3aa81e844d0388783ba39fe8f2e"
  },
  {
    "url": "assets/js/206.28be4e3f.js",
    "revision": "5bfc7e1b08ab15d683ce7c36a15b6668"
  },
  {
    "url": "assets/js/207.46166273.js",
    "revision": "42bff20600732f91f645df79a037eb97"
  },
  {
    "url": "assets/js/208.8c86e21d.js",
    "revision": "cbf982a3de4b1ca0518cf41409b6d5fe"
  },
  {
    "url": "assets/js/209.01cf4213.js",
    "revision": "786b7e6ae0c30f63ac1216bcaec2effb"
  },
  {
    "url": "assets/js/21.2d245b0e.js",
    "revision": "33dc458eb0bca552c74c2b6e4bacc370"
  },
  {
    "url": "assets/js/210.f019524f.js",
    "revision": "c126919330252b23bc0abb7d938d1c54"
  },
  {
    "url": "assets/js/211.cf52b634.js",
    "revision": "f3c0172feb1b4144975fb6cc9ceb115f"
  },
  {
    "url": "assets/js/212.1094bc62.js",
    "revision": "1e118d1e1fe3f69a76d03be2b56e055d"
  },
  {
    "url": "assets/js/213.bb36406d.js",
    "revision": "2c2480cbc36cbb8bd4b930dfa75adf42"
  },
  {
    "url": "assets/js/214.89af5432.js",
    "revision": "fc6b03f3f02aae6ff90ba47d6247501c"
  },
  {
    "url": "assets/js/215.682a5a43.js",
    "revision": "c8316feaab1ed95f7bb84c7560b0ca83"
  },
  {
    "url": "assets/js/216.18b9c152.js",
    "revision": "ead9ad60dee482a1a512243f624ea5fb"
  },
  {
    "url": "assets/js/217.11d214bf.js",
    "revision": "9cc08ae79d6b076b9e2c949eeb97fe14"
  },
  {
    "url": "assets/js/218.b8df4052.js",
    "revision": "8f9e2b4127d77267eb0fa8893fae61fc"
  },
  {
    "url": "assets/js/219.0e7ede08.js",
    "revision": "357de9471e01c80405990c5de361247f"
  },
  {
    "url": "assets/js/22.d57b4c09.js",
    "revision": "1a87fc083a0fbffccb45ba273c4e6205"
  },
  {
    "url": "assets/js/220.e41c1ee2.js",
    "revision": "81adf15397bb02d49bfbf88360e2ef96"
  },
  {
    "url": "assets/js/221.9deff383.js",
    "revision": "a51750d12a1baf2bec62cb7b5a3d73a1"
  },
  {
    "url": "assets/js/222.d694ea1c.js",
    "revision": "9a80d6ce16cc129c81450a134332afc5"
  },
  {
    "url": "assets/js/223.afcf9342.js",
    "revision": "1c050368368c523117e186aed5f901fd"
  },
  {
    "url": "assets/js/224.dfc468dd.js",
    "revision": "ae3a99be9cff9d453b05a63c2e8d2e6b"
  },
  {
    "url": "assets/js/225.5867ba31.js",
    "revision": "75a46be5075c6990f1b6d82b8f04dec4"
  },
  {
    "url": "assets/js/226.b150c10e.js",
    "revision": "1b4d6eb5a991684b24cc58fe176f6c5a"
  },
  {
    "url": "assets/js/227.2f40c26a.js",
    "revision": "212ef97958936a5015511a0ab2651ad3"
  },
  {
    "url": "assets/js/228.b2525bc7.js",
    "revision": "a9224a1ae1cc091a8da93dbc8bad318e"
  },
  {
    "url": "assets/js/229.70925731.js",
    "revision": "2aa8f5bdec3d93aea8811e408bb87308"
  },
  {
    "url": "assets/js/23.bf8c3b64.js",
    "revision": "1d0b9726403a97b6b31d135f4774655c"
  },
  {
    "url": "assets/js/230.ff89a305.js",
    "revision": "9d1e6155641ddd80d31c1229ddb7d6ff"
  },
  {
    "url": "assets/js/231.14cf4a0f.js",
    "revision": "16b698e0af16156a5e2fa178b9a537c3"
  },
  {
    "url": "assets/js/232.7149f28c.js",
    "revision": "115502bbc15a27dcf1ac8c80ec955d9d"
  },
  {
    "url": "assets/js/233.a0e0ec79.js",
    "revision": "00edcb29ec8e5051841a2cefa4fd4572"
  },
  {
    "url": "assets/js/234.091c1716.js",
    "revision": "06e752da1ec17ec7068b909a9ef9c424"
  },
  {
    "url": "assets/js/235.d6df1f27.js",
    "revision": "0ac6c2f1b8e7a43e6f0873277ab6731c"
  },
  {
    "url": "assets/js/236.c4a2d14b.js",
    "revision": "e2eb1073845b522d2f2e1f5b733b13b4"
  },
  {
    "url": "assets/js/237.0dff2d42.js",
    "revision": "3862e6f2b2ad5720d2823d2f1402e066"
  },
  {
    "url": "assets/js/238.0ccbb231.js",
    "revision": "338a66a49a008ff3f09d14dc12e40be4"
  },
  {
    "url": "assets/js/239.c263e22b.js",
    "revision": "d582053953823ceb4d6263a1e570b833"
  },
  {
    "url": "assets/js/24.cbf1c198.js",
    "revision": "6f6ba061a5cf63e04adf5ec85d16bda5"
  },
  {
    "url": "assets/js/240.9b537744.js",
    "revision": "7a3cf1eae7aac6e12020178fbc4b3911"
  },
  {
    "url": "assets/js/241.b795d900.js",
    "revision": "17a98939b61a205090341be596ae0314"
  },
  {
    "url": "assets/js/242.7f9af47e.js",
    "revision": "b8096d10ab04fdbe7543ce65a14b1aa5"
  },
  {
    "url": "assets/js/243.02f8a6fc.js",
    "revision": "4dffcef48fbd7b22eae3cb629d2b3667"
  },
  {
    "url": "assets/js/244.8f286f5f.js",
    "revision": "f757842e7080c05bb483f0a0b26eacfe"
  },
  {
    "url": "assets/js/245.4b07eadb.js",
    "revision": "a6e0b263ee4c940b2bc2452de02b72ac"
  },
  {
    "url": "assets/js/246.a854c45d.js",
    "revision": "d1a36c9dd00f7de3e2611d71631ec1fd"
  },
  {
    "url": "assets/js/247.1962334e.js",
    "revision": "1f5184e64408da078c76063bcd510433"
  },
  {
    "url": "assets/js/248.2ef9d97c.js",
    "revision": "6add2d206e128f2247e9e2cf0cd42dba"
  },
  {
    "url": "assets/js/249.9f337de7.js",
    "revision": "93499649e914ddc5ffecc64f1acd8396"
  },
  {
    "url": "assets/js/25.27a39b1c.js",
    "revision": "167929a6b19e452f732b93f82fb0c70e"
  },
  {
    "url": "assets/js/250.787f75be.js",
    "revision": "1cd38fb92ce0d691b04dbd139004bcce"
  },
  {
    "url": "assets/js/251.a1988298.js",
    "revision": "23f01fc13b9ceb64fdf7bd0388c42817"
  },
  {
    "url": "assets/js/252.74df74aa.js",
    "revision": "ea280350e101386d08373418a4a5d14d"
  },
  {
    "url": "assets/js/253.fffd57bf.js",
    "revision": "6c9d2ec64cf8d8ecb2cad386250c6178"
  },
  {
    "url": "assets/js/254.6b0b7489.js",
    "revision": "fa5654b14d96d71b6d5b72bf2feafdc3"
  },
  {
    "url": "assets/js/255.a757f807.js",
    "revision": "594d2a71bcac6a2dd8aebd27b717cab0"
  },
  {
    "url": "assets/js/256.1482b5ff.js",
    "revision": "2f8fdd04f550e1d9de4463a913f4b1ce"
  },
  {
    "url": "assets/js/257.948f22db.js",
    "revision": "a01bb1292e7f55f1386e53246bc26d93"
  },
  {
    "url": "assets/js/258.46808217.js",
    "revision": "7861a27e36891e51c54f895b58c5c2f2"
  },
  {
    "url": "assets/js/259.7b00b784.js",
    "revision": "722eb7841cdcd1d76c82d463c85899f8"
  },
  {
    "url": "assets/js/26.8e6aa70a.js",
    "revision": "8c10b01d307f88070ce0e028ba23e79a"
  },
  {
    "url": "assets/js/260.f817512b.js",
    "revision": "9e4df8563960fc67316e599ba719650a"
  },
  {
    "url": "assets/js/261.6e52351e.js",
    "revision": "2c2bd5899dad2a4f5d9c78bc04dbc330"
  },
  {
    "url": "assets/js/262.6c8cfe3b.js",
    "revision": "ca53d65d2a28a6d105a54f1befaf3e14"
  },
  {
    "url": "assets/js/263.60c9c3c7.js",
    "revision": "2ecbf96c3bdfdd5bdade37d209b93435"
  },
  {
    "url": "assets/js/264.e5226081.js",
    "revision": "a34d82ab230a168f6d3a321494a22cdd"
  },
  {
    "url": "assets/js/265.b950b026.js",
    "revision": "27b55f2ea3921080236640a01bfd39f1"
  },
  {
    "url": "assets/js/266.6a3cab0f.js",
    "revision": "464dc8a5f97b0c3b5b72f7b40bc34017"
  },
  {
    "url": "assets/js/267.08fa400b.js",
    "revision": "9e9d9ef49376901016d46ee65a99b58c"
  },
  {
    "url": "assets/js/268.7c5a12a0.js",
    "revision": "ae3fd99bca11d31884147a1012ec439b"
  },
  {
    "url": "assets/js/269.a1a55ea6.js",
    "revision": "74ce41cdab6e17be7087e9283c78b923"
  },
  {
    "url": "assets/js/27.d5c605cb.js",
    "revision": "ce555ce02483983b8ebe8e57866ce684"
  },
  {
    "url": "assets/js/270.b65d5180.js",
    "revision": "376a067b6bcf6e1531ab38e5931cd8bf"
  },
  {
    "url": "assets/js/271.1b9bf3f9.js",
    "revision": "6eae4d5e4c88e9deb9b1a96ef9cc270b"
  },
  {
    "url": "assets/js/272.a893d211.js",
    "revision": "0a1d5b824f2422f4cd7f51f51b1b2854"
  },
  {
    "url": "assets/js/273.d724717a.js",
    "revision": "47127e463d276bd0b059bc3d686b07f3"
  },
  {
    "url": "assets/js/274.ef53a36c.js",
    "revision": "5dd8777def2cae1ff53d463eea887d93"
  },
  {
    "url": "assets/js/275.2c1f595c.js",
    "revision": "c3206f6e0b3571cdd08ebfc6029cd2c1"
  },
  {
    "url": "assets/js/276.84ef4fc5.js",
    "revision": "c5decbb947eb7570b887dc9274032b3a"
  },
  {
    "url": "assets/js/277.3cc323ae.js",
    "revision": "cf7e6c7cf48c8b18778746969bc323fe"
  },
  {
    "url": "assets/js/278.7470f5c2.js",
    "revision": "6317e3c4316bd5d6314bacec4d3b1ccc"
  },
  {
    "url": "assets/js/279.06cbd43e.js",
    "revision": "b87c1191cb91c432a7ca10dec6816a11"
  },
  {
    "url": "assets/js/28.88b850be.js",
    "revision": "2ba33443f59971138d3b5a8d03f08ea0"
  },
  {
    "url": "assets/js/280.ae1ba481.js",
    "revision": "b4d315995ad763f54e573b1b72665a73"
  },
  {
    "url": "assets/js/281.4771cafd.js",
    "revision": "642790f50e2a44ffedd5ebfd429da1d7"
  },
  {
    "url": "assets/js/282.7dab8690.js",
    "revision": "86feff95293faa80ef3e2ce8eb353de8"
  },
  {
    "url": "assets/js/283.dbcd1a79.js",
    "revision": "ff05ee0c23269a5214c67c29292127d1"
  },
  {
    "url": "assets/js/284.eb8afcfc.js",
    "revision": "7d3c81745d8806bd47cbf4594c67d195"
  },
  {
    "url": "assets/js/285.c0452d83.js",
    "revision": "b5abd4d6d87f9733fc581ed9678165a6"
  },
  {
    "url": "assets/js/286.14cb1c47.js",
    "revision": "c91f1cbe61d8573b56522c67b9a7684f"
  },
  {
    "url": "assets/js/287.ceb8ccd5.js",
    "revision": "04d2313e7f81b503da6d58df17208ac8"
  },
  {
    "url": "assets/js/288.788283d6.js",
    "revision": "26944091db6b4e50918ee84f33d857a9"
  },
  {
    "url": "assets/js/289.11673dc7.js",
    "revision": "4f291c1f1cc73daf8568cbb2ac3ccd51"
  },
  {
    "url": "assets/js/29.086c6dfa.js",
    "revision": "6e49340f37f7c412f1bd0647e9079797"
  },
  {
    "url": "assets/js/290.a8b02c65.js",
    "revision": "ff2952b84243008dd2820e7ca9b8576c"
  },
  {
    "url": "assets/js/291.6624a089.js",
    "revision": "e29a5da638e63c2f366b67ce4441f046"
  },
  {
    "url": "assets/js/292.c6841fa8.js",
    "revision": "fedab778e469c716c19e89a8e65624e6"
  },
  {
    "url": "assets/js/293.10487d50.js",
    "revision": "9bb3719f88ea457b79017422bcbb51a5"
  },
  {
    "url": "assets/js/294.9c9f3fe8.js",
    "revision": "619f469203c2910fdf98a67aa5d7235b"
  },
  {
    "url": "assets/js/295.4b1e1bd6.js",
    "revision": "8c473ee5bad728ea9ee898ddbf6b02c8"
  },
  {
    "url": "assets/js/296.2b8d20b0.js",
    "revision": "bea460b7c0e078ef8d4913ec6154cd63"
  },
  {
    "url": "assets/js/297.c8374c65.js",
    "revision": "37221036e9133bebc2b7c1b28ae914f1"
  },
  {
    "url": "assets/js/298.6455d292.js",
    "revision": "d2293e00480510263b402bbc81e84084"
  },
  {
    "url": "assets/js/299.6a064e93.js",
    "revision": "0631acd076de40b38f10ac8591b89657"
  },
  {
    "url": "assets/js/3.173c9da2.js",
    "revision": "960cc214978188dd7ea6631d9e5e5c5b"
  },
  {
    "url": "assets/js/30.7f8d747a.js",
    "revision": "4e7007244260eacb0cdac74ad67e9269"
  },
  {
    "url": "assets/js/300.40db5bbb.js",
    "revision": "d233d06d6ed8bd4496fe3b8b47ffd515"
  },
  {
    "url": "assets/js/301.6e457de0.js",
    "revision": "be5bde25d0301a1b07ba980cfe623322"
  },
  {
    "url": "assets/js/302.9615c8df.js",
    "revision": "75f95a397d263bf98c85289e950425e4"
  },
  {
    "url": "assets/js/303.5cefc312.js",
    "revision": "55c3feb568137638ee3d4e6e304f3505"
  },
  {
    "url": "assets/js/304.c45a4e3a.js",
    "revision": "39473ca9bfb5c758ee0ffe6d958d4302"
  },
  {
    "url": "assets/js/305.db80fe18.js",
    "revision": "d5dead609d77f4f49879e45649e42746"
  },
  {
    "url": "assets/js/306.c02853c1.js",
    "revision": "4389ba660234d605599296b9c599ce3b"
  },
  {
    "url": "assets/js/307.a778fcec.js",
    "revision": "495a902f0fc3efeca41e4d4ad1178888"
  },
  {
    "url": "assets/js/308.c8614fa0.js",
    "revision": "7a5707af1742772db029a444bfdc3540"
  },
  {
    "url": "assets/js/309.8e7073a5.js",
    "revision": "b75e13c8da5279955b105a10889ddc8a"
  },
  {
    "url": "assets/js/31.842c7712.js",
    "revision": "e16a3283c5455b8a4a4999f643bb38da"
  },
  {
    "url": "assets/js/310.deafaf9a.js",
    "revision": "32711695a61e406642b257e232f7e8be"
  },
  {
    "url": "assets/js/311.439e09b3.js",
    "revision": "aafec088faa01ae828fac06f2c1b3e6b"
  },
  {
    "url": "assets/js/312.2ba4e0a0.js",
    "revision": "fec6a58c4fb01c88f2455df18f440538"
  },
  {
    "url": "assets/js/313.bec6292f.js",
    "revision": "e5a83237a2db4ad75f15f504716e2235"
  },
  {
    "url": "assets/js/314.4d9477b3.js",
    "revision": "db31e0b2bd3e35fe770e45c177cb1ca9"
  },
  {
    "url": "assets/js/315.6617c3ba.js",
    "revision": "5dccffda14a21627a573014cecaaaa1b"
  },
  {
    "url": "assets/js/316.d1a21baf.js",
    "revision": "798470adfaf5b787aea16ea151e40417"
  },
  {
    "url": "assets/js/317.22bb5018.js",
    "revision": "518503a9803412bce15aeca009534ba5"
  },
  {
    "url": "assets/js/318.57ee3a63.js",
    "revision": "6050f5b97d15d38ea8292706a84299b9"
  },
  {
    "url": "assets/js/319.a25fbf2b.js",
    "revision": "4091ef3165f04cdf097336686c8f956e"
  },
  {
    "url": "assets/js/32.02239f28.js",
    "revision": "0d5126f8bfb02ca9a29414b359353e46"
  },
  {
    "url": "assets/js/320.654062da.js",
    "revision": "6642e9730d94a3aa2cb93b71b87e47e7"
  },
  {
    "url": "assets/js/321.e42234ba.js",
    "revision": "d76291d9c9abcabc0148295e500e0cb8"
  },
  {
    "url": "assets/js/322.5f5de122.js",
    "revision": "9a3d2ba0c44c40dc2427e4d38faafa6f"
  },
  {
    "url": "assets/js/323.c4ba09f2.js",
    "revision": "f566d1eba42122b52bb985d08b74a33d"
  },
  {
    "url": "assets/js/324.78f8409b.js",
    "revision": "2b8d692e5575c7b1c0625f26de7346fe"
  },
  {
    "url": "assets/js/325.ef11834c.js",
    "revision": "687dc7ede279340ed8943a04ea8637d9"
  },
  {
    "url": "assets/js/326.93a58b11.js",
    "revision": "7ce4cf38244d38ffc9104b292006bc75"
  },
  {
    "url": "assets/js/327.da2825fa.js",
    "revision": "26aff8e784d6a1bcb8b362bdae852843"
  },
  {
    "url": "assets/js/328.94f8d3da.js",
    "revision": "b4e479770af7bfe20b73dc2a6947f2b6"
  },
  {
    "url": "assets/js/329.4d1884fe.js",
    "revision": "3f9ed989c2c9968fbd199232e2b3d45a"
  },
  {
    "url": "assets/js/33.d2f66a16.js",
    "revision": "dbe06957a8337c437b5d0f3c83989599"
  },
  {
    "url": "assets/js/330.ff4b0d92.js",
    "revision": "2e26548e5745f072d03e2baf943d1b46"
  },
  {
    "url": "assets/js/331.7b3effc8.js",
    "revision": "5f7a68185943c8a466bb60afedd68595"
  },
  {
    "url": "assets/js/332.1b853f36.js",
    "revision": "25d0c827516b1bf54c4a6298d51d7b52"
  },
  {
    "url": "assets/js/333.273ee837.js",
    "revision": "e375615a68effbd1b650167157d024c8"
  },
  {
    "url": "assets/js/334.fef553fb.js",
    "revision": "6efb5dfa5f777ef923a49cd3ed56a674"
  },
  {
    "url": "assets/js/335.b66d2f3b.js",
    "revision": "ad594e5719d98baf51f98134869e1827"
  },
  {
    "url": "assets/js/336.d2ce04fb.js",
    "revision": "ba3f12952f774e98d47679d3a5b2ca15"
  },
  {
    "url": "assets/js/337.eb56831d.js",
    "revision": "fd21046f8bc5dfa1f7d58360512cc3d9"
  },
  {
    "url": "assets/js/338.b9c6d756.js",
    "revision": "1fb4ca3e15f17b0efa44c678350f039e"
  },
  {
    "url": "assets/js/339.6262195f.js",
    "revision": "4af1ff77cf7891e0da07d6d4669c35be"
  },
  {
    "url": "assets/js/34.db2dd828.js",
    "revision": "cabb17db228368cbbefabc9c610dfa38"
  },
  {
    "url": "assets/js/340.d8343c73.js",
    "revision": "0e2a2c232e8140f9f60d1a5d0c34e831"
  },
  {
    "url": "assets/js/341.ec078fb9.js",
    "revision": "4ed13851df0c812a095296b1c4543799"
  },
  {
    "url": "assets/js/342.ded5e125.js",
    "revision": "25c3511cca396def7f1d0ae5fdeb41ed"
  },
  {
    "url": "assets/js/343.84a9fa95.js",
    "revision": "4f8dbae8c32e269af2e0f1e6885e8f9f"
  },
  {
    "url": "assets/js/344.0e32980c.js",
    "revision": "affb2b0bd9536e7b9a78ef51e9b66362"
  },
  {
    "url": "assets/js/345.bf2cadb7.js",
    "revision": "53b4afbe49f929740c38fa176581665e"
  },
  {
    "url": "assets/js/35.7f6bf401.js",
    "revision": "188d2cc1268b4477705b1a7da71ada01"
  },
  {
    "url": "assets/js/36.e1332c52.js",
    "revision": "d1fd2198a690594a9e8716e672669146"
  },
  {
    "url": "assets/js/37.0516c95d.js",
    "revision": "364378f0b07445260d2cfb1ca2f02ad6"
  },
  {
    "url": "assets/js/38.a3f8efdb.js",
    "revision": "49e214d99eba3e6dfae049df9916d7fa"
  },
  {
    "url": "assets/js/39.12db79a1.js",
    "revision": "3c301b8542243c9c9fe91b3b5d4cede6"
  },
  {
    "url": "assets/js/4.f802b025.js",
    "revision": "ef80e4fa179f97c4d4c4c88fbd37db8e"
  },
  {
    "url": "assets/js/40.3d61c314.js",
    "revision": "7646417cf05d1dd41a2780f6b0fa815e"
  },
  {
    "url": "assets/js/41.62735886.js",
    "revision": "49044dccd302fbdc20dc390ecf540af3"
  },
  {
    "url": "assets/js/42.5ed0df92.js",
    "revision": "d549f965de5c8a106642b41bba14bc4d"
  },
  {
    "url": "assets/js/43.822d791a.js",
    "revision": "9c842fc151dd08612e54dff2d62cefd7"
  },
  {
    "url": "assets/js/44.2e9b5e83.js",
    "revision": "f896c86bc2d21e1ebd31bc98fecc49a8"
  },
  {
    "url": "assets/js/45.4dd84065.js",
    "revision": "2872a6283f2233ed1f3e13db5d13e69d"
  },
  {
    "url": "assets/js/46.aa2fe8b2.js",
    "revision": "119b1ccec17fe891566d5e0c3c9486d2"
  },
  {
    "url": "assets/js/47.1473b86b.js",
    "revision": "1e39897b10897ed0316505d3efe8837f"
  },
  {
    "url": "assets/js/48.aab21fca.js",
    "revision": "32c3fffefe220484109b9b02fbee8646"
  },
  {
    "url": "assets/js/49.56c87c0a.js",
    "revision": "255ea8fdc4a42a7f31554d9ba106792d"
  },
  {
    "url": "assets/js/5.e9e419ea.js",
    "revision": "47104c7809a2f952c2766794ebef8db8"
  },
  {
    "url": "assets/js/50.03152756.js",
    "revision": "8a3601abb05f44bf46d5e783b4bf4a32"
  },
  {
    "url": "assets/js/51.22598d4e.js",
    "revision": "cb420ad1c4246c303bdbf2e03556d992"
  },
  {
    "url": "assets/js/52.967f3013.js",
    "revision": "59fa0137df1e00f36ea054d6e1c95ccb"
  },
  {
    "url": "assets/js/53.e9abc049.js",
    "revision": "cfc5b475d377f402fde05b2bf2f07d8d"
  },
  {
    "url": "assets/js/54.5534b8f3.js",
    "revision": "6e2b57719f6088cba17cf4eeec236ca9"
  },
  {
    "url": "assets/js/55.e2bca4bb.js",
    "revision": "e2a91f15761313bbf1923ad71e89c1eb"
  },
  {
    "url": "assets/js/56.025de3b5.js",
    "revision": "6e34d2ea123cb908e4a9b109f0d10f4a"
  },
  {
    "url": "assets/js/57.2a29c0d2.js",
    "revision": "51cc237d27582144f912a27e08ee5565"
  },
  {
    "url": "assets/js/58.c0ea4678.js",
    "revision": "d675214e9c32947b0a32147100a201d9"
  },
  {
    "url": "assets/js/59.80d300f4.js",
    "revision": "db34a9a213c53a5c66753d79708bb434"
  },
  {
    "url": "assets/js/6.8e9c3c4a.js",
    "revision": "7fafcd80df0732c7f12f52f4772f6c7b"
  },
  {
    "url": "assets/js/60.81bd886e.js",
    "revision": "fa7d83ca863aec7ba9a25b67a80230b6"
  },
  {
    "url": "assets/js/61.434f7d20.js",
    "revision": "5179c72f96d59324526a8b3feb041944"
  },
  {
    "url": "assets/js/62.f4a27a1d.js",
    "revision": "370f14b13bdd53e06b5ef0a3a4ba40ad"
  },
  {
    "url": "assets/js/63.f9b6d787.js",
    "revision": "39228ab9f2c2364f4768b5b83e096a36"
  },
  {
    "url": "assets/js/64.dca03719.js",
    "revision": "f979a87fc0df8fb9d518302303784b49"
  },
  {
    "url": "assets/js/65.34d4e29c.js",
    "revision": "e57528fb03e5a28a4371825b0d151782"
  },
  {
    "url": "assets/js/66.17f01770.js",
    "revision": "08587bcc3dd9defa67bb740112903faf"
  },
  {
    "url": "assets/js/67.f4771511.js",
    "revision": "3e6f26a545ba23ed00d70ce119054ee2"
  },
  {
    "url": "assets/js/68.a632cf11.js",
    "revision": "76c4e7daa8c3bff8358e07c7d58bea18"
  },
  {
    "url": "assets/js/69.8eddb83b.js",
    "revision": "de54b5ff9f2e7de04202fc31b22dd3c2"
  },
  {
    "url": "assets/js/7.77dbfb3a.js",
    "revision": "fd6febd5aee891dba62754ac05f0d659"
  },
  {
    "url": "assets/js/70.73391f03.js",
    "revision": "f9b840981a8222ba944505d6335fe1df"
  },
  {
    "url": "assets/js/71.940e7dca.js",
    "revision": "e01a0c897641148e5a6653b4906a7051"
  },
  {
    "url": "assets/js/72.d18c902e.js",
    "revision": "801d1e983fb640233e05d4d43e2180cd"
  },
  {
    "url": "assets/js/73.6fa20d3c.js",
    "revision": "59c4d95f3cffd01e67df93fb35a8dc80"
  },
  {
    "url": "assets/js/74.6a4c9500.js",
    "revision": "b9b0cce2181b38651325afcf5e66ca3d"
  },
  {
    "url": "assets/js/75.0b4e0b6a.js",
    "revision": "df2c762754bb65c64dc07113d39ce852"
  },
  {
    "url": "assets/js/76.812096c8.js",
    "revision": "22e644dcd43dd793258f6dc1ef46a9c6"
  },
  {
    "url": "assets/js/77.00fa840c.js",
    "revision": "aa4eb18cd11daf1492ae7275713accff"
  },
  {
    "url": "assets/js/78.be02e8fd.js",
    "revision": "f07193c91d2be70bf719fbc2535670c9"
  },
  {
    "url": "assets/js/79.a4a5e9d5.js",
    "revision": "e4859e7e74b85a3835a1a379de1f7e87"
  },
  {
    "url": "assets/js/8.e3ee8025.js",
    "revision": "c22a6f1f732dbfbf063c2f28fbd84a7b"
  },
  {
    "url": "assets/js/80.ca252bc3.js",
    "revision": "436291c1a04288f2461cfca61de5773b"
  },
  {
    "url": "assets/js/81.f29d9525.js",
    "revision": "bb1ab4008fa9fe59a19356b1979d5d01"
  },
  {
    "url": "assets/js/82.e1a944ca.js",
    "revision": "3f9e238dea43d051e667618d251c8839"
  },
  {
    "url": "assets/js/83.bb47edc3.js",
    "revision": "1ab1edaf300f065e64b020fdf5186d86"
  },
  {
    "url": "assets/js/84.6af9c970.js",
    "revision": "e2cc7bf148f552c043dfcde5570ae23c"
  },
  {
    "url": "assets/js/85.b599c915.js",
    "revision": "830105fe300b426f699bb1865c418cd2"
  },
  {
    "url": "assets/js/86.16a9bbff.js",
    "revision": "4465f0b1f62fee4e22a87cc7a4a0a60b"
  },
  {
    "url": "assets/js/87.d77d39f2.js",
    "revision": "0fa1a8ae34a3c41b502d28691f9af3e2"
  },
  {
    "url": "assets/js/88.e7688752.js",
    "revision": "83123e559df92897e2a34dddd03e52d0"
  },
  {
    "url": "assets/js/89.19535076.js",
    "revision": "802133ae4bdd7f6f30e2b6dab0f5d34b"
  },
  {
    "url": "assets/js/9.4d55aa23.js",
    "revision": "eca99c43ac96c11aa1f8e24065281010"
  },
  {
    "url": "assets/js/90.eda07717.js",
    "revision": "fb9ed213e5bf0361f45f51195e360dfe"
  },
  {
    "url": "assets/js/91.dbec6742.js",
    "revision": "f74e40f4fa11c61718dd482bcaf6cc13"
  },
  {
    "url": "assets/js/92.3348b70c.js",
    "revision": "03cdc44d70cba176f7b7df7e7c3668f1"
  },
  {
    "url": "assets/js/93.fc74a6a9.js",
    "revision": "d0f972259a9c0b4ecb0c618db6413bc8"
  },
  {
    "url": "assets/js/94.27e410bf.js",
    "revision": "b2854612aeb93fe7e9077aee5771ff7c"
  },
  {
    "url": "assets/js/95.aff7d5d8.js",
    "revision": "661ee9fc827b77617960b34417389a90"
  },
  {
    "url": "assets/js/96.d2599d0c.js",
    "revision": "2adcb42889a8fc452c153bc1694a8ca5"
  },
  {
    "url": "assets/js/97.191fadd7.js",
    "revision": "811eef9db2e2fa9a8040ae42096c0cb2"
  },
  {
    "url": "assets/js/98.fe8da972.js",
    "revision": "5b3998d7e1825dbd6be9e045e73fca61"
  },
  {
    "url": "assets/js/99.396a82b3.js",
    "revision": "2eae87da978182c1af8a3a6e0d8fe496"
  },
  {
    "url": "assets/js/app.9c235a9e.js",
    "revision": "2b24904b440dc9996755611a145f2012"
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
    "revision": "b5551ada4a45de70757206a2755d7133"
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
    "revision": "43747fa3998b38cc6a2185540508d646"
  },
  {
    "url": "mx/amuzgo/courses/intermediate/index.html",
    "revision": "365585a2a894a57a21f1e86f775fb2ab"
  },
  {
    "url": "mx/amuzgo/dictionary/glossary.html",
    "revision": "f6ac7bf829182479adcf2a2f36e10dda"
  },
  {
    "url": "mx/amuzgo/dictionary/index.html",
    "revision": "46bbafe88aa64cd5a261996b6cc99caf"
  },
  {
    "url": "mx/amuzgo/grammar/adjective/index.html",
    "revision": "feff698d3dc37050066fb245118b83f2"
  },
  {
    "url": "mx/amuzgo/grammar/adverb/index.html",
    "revision": "1f43120b0611fe90ccc97a72008fcf85"
  },
  {
    "url": "mx/amuzgo/grammar/alphabet/index.html",
    "revision": "3277d3b0645cbf073fc5ea11fec769e1"
  },
  {
    "url": "mx/amuzgo/grammar/article/index.html",
    "revision": "c0a30ced0826194b3b2f28fe03d68b48"
  },
  {
    "url": "mx/amuzgo/grammar/guide/index.html",
    "revision": "d6a590c45e396ababde38d4b27cbb1e1"
  },
  {
    "url": "mx/amuzgo/grammar/verbs/index.html",
    "revision": "468f52b346954fe5323269f9e3f87c10"
  },
  {
    "url": "mx/amuzgo/vocabulary/animals/index.html",
    "revision": "5594cf37f0e9677479f39ab29e1f8e15"
  },
  {
    "url": "mx/amuzgo/vocabulary/greetings/index.html",
    "revision": "6967c5e78c597401faef9c861147d537"
  },
  {
    "url": "mx/amuzgo/vocabulary/more_used/index.html",
    "revision": "8bc7aef100c981c6d32d0205623d4c7c"
  },
  {
    "url": "mx/amuzgo/vocabulary/people/index.html",
    "revision": "de985b14d39082e831d29a5970c9844f"
  },
  {
    "url": "mx/amuzgo/vocabulary/phrases/index.html",
    "revision": "b28192826cd6489194f15bce42c4969b"
  },
  {
    "url": "mx/ayapaneco/courses/basic/index.html",
    "revision": "33492ef7fcdbe0d690991cf2999a07ed"
  },
  {
    "url": "mx/ayapaneco/courses/intermediate/index.html",
    "revision": "e562c4e72fe09ed44f675ae624f6614d"
  },
  {
    "url": "mx/ayapaneco/dictionary/glossary.html",
    "revision": "81c4a136e29399f718b5e45fed233a64"
  },
  {
    "url": "mx/ayapaneco/dictionary/index.html",
    "revision": "3ecdf9573e7805009f65d958f9fb693f"
  },
  {
    "url": "mx/ayapaneco/grammar/adjective/index.html",
    "revision": "5670a95b0fce9fd220a88aeb037f390e"
  },
  {
    "url": "mx/ayapaneco/grammar/adverb/index.html",
    "revision": "b42ca28400e9f3dcd9b7de0602c05a7b"
  },
  {
    "url": "mx/ayapaneco/grammar/alphabet/index.html",
    "revision": "98880c8afe0ca1a99be6037d3cc0715e"
  },
  {
    "url": "mx/ayapaneco/grammar/article/index.html",
    "revision": "68240276f07520ecb77d04fbfa265487"
  },
  {
    "url": "mx/ayapaneco/grammar/guide/index.html",
    "revision": "4d88875e2298d05286597a4ad90ae522"
  },
  {
    "url": "mx/ayapaneco/grammar/verbs/index.html",
    "revision": "dd3436a15bf40fc545586aeb9bad238d"
  },
  {
    "url": "mx/ayapaneco/index.html",
    "revision": "0d6f4a9057a577f08a02b4e197c6b24d"
  },
  {
    "url": "mx/ayapaneco/vocabulary/animals/index.html",
    "revision": "d5f2fb0464b688b50cc4e4ec1c568df8"
  },
  {
    "url": "mx/ayapaneco/vocabulary/greetings/index.html",
    "revision": "e099362b838965ad6b408ef0bdf2b162"
  },
  {
    "url": "mx/ayapaneco/vocabulary/more_used/index.html",
    "revision": "5db947d0b2885d41d4f284b3473d022d"
  },
  {
    "url": "mx/ayapaneco/vocabulary/people/index.html",
    "revision": "bb4f6439eda2c99ede67809105f97a77"
  },
  {
    "url": "mx/ayapaneco/vocabulary/phrases/index.html",
    "revision": "e4f8770d356f876715c716ccd575d525"
  },
  {
    "url": "mx/chatino/courses/basic/index.html",
    "revision": "df10e9f723295a7670284d5ac9e0d63b"
  },
  {
    "url": "mx/chatino/courses/intermediate/index.html",
    "revision": "4b6c7f9c837054bdba2a6544d5fe9e55"
  },
  {
    "url": "mx/chatino/dictionary/glossary.html",
    "revision": "71bb7f8a47b4036fa8510b5e21b81754"
  },
  {
    "url": "mx/chatino/dictionary/index.html",
    "revision": "463686e4431d85f2af534065896f9c62"
  },
  {
    "url": "mx/chatino/grammar/adjective/index.html",
    "revision": "52dd3b1721e65733c97d40df67806b64"
  },
  {
    "url": "mx/chatino/grammar/adverb/index.html",
    "revision": "c5b389c9896aff282bc8bc1339349b29"
  },
  {
    "url": "mx/chatino/grammar/alphabet/index.html",
    "revision": "7e270bbea69c6b1c7765e41aca7fa462"
  },
  {
    "url": "mx/chatino/grammar/article/index.html",
    "revision": "bca6c9d1ba7fe4e0486a6411110fa43d"
  },
  {
    "url": "mx/chatino/grammar/guide/index.html",
    "revision": "3f2a0693c006dd23de305adb1bc9e39b"
  },
  {
    "url": "mx/chatino/grammar/verbs/index.html",
    "revision": "74dcff3c3d471cff1cc6f78d46529ebe"
  },
  {
    "url": "mx/chatino/index.html",
    "revision": "9036b64b6cc1bdd2528c93521d63f3c3"
  },
  {
    "url": "mx/chatino/vocabulary/animals/index.html",
    "revision": "8e54e7a6e5beb5ad921682fcd1ba27a8"
  },
  {
    "url": "mx/chatino/vocabulary/greetings/index.html",
    "revision": "95c13c3c564d11d061e3e9bde41739a4"
  },
  {
    "url": "mx/chatino/vocabulary/more_used/index.html",
    "revision": "4f616526e70ec3cbe73d56074b68fed9"
  },
  {
    "url": "mx/chatino/vocabulary/people/index.html",
    "revision": "729ac7dd31540a2b05e6dd922e6bb668"
  },
  {
    "url": "mx/chatino/vocabulary/phrases/index.html",
    "revision": "bcb170b8cf5d215a24163e2acf30941e"
  },
  {
    "url": "mx/chichimeco/courses/basic/index.html",
    "revision": "82f8160c1d424fabc4e851e3146201ee"
  },
  {
    "url": "mx/chichimeco/courses/intermediate/index.html",
    "revision": "5261c42a38b85f22c11a694e8f448454"
  },
  {
    "url": "mx/chichimeco/dictionary/glossary.html",
    "revision": "48b6c8dfa12b70ea550af255a9be17d8"
  },
  {
    "url": "mx/chichimeco/dictionary/index.html",
    "revision": "415311c234973193aa64d325beab2780"
  },
  {
    "url": "mx/chichimeco/grammar/adjective/index.html",
    "revision": "e0695feea225f59bb92813ae893f18f4"
  },
  {
    "url": "mx/chichimeco/grammar/adverb/index.html",
    "revision": "0bfd60ded2c8329dc3b30e543e783581"
  },
  {
    "url": "mx/chichimeco/grammar/alphabet/index.html",
    "revision": "89eebc68d276b65ef6f26759d943ad9e"
  },
  {
    "url": "mx/chichimeco/grammar/article/index.html",
    "revision": "a48a1a2bdfbd29c0c115122b25b3117e"
  },
  {
    "url": "mx/chichimeco/grammar/guide/index.html",
    "revision": "89a615cf7e044bb6936a73d2d91cba1d"
  },
  {
    "url": "mx/chichimeco/grammar/verbs/index.html",
    "revision": "db80f730d357cef3ae2503796d7b32b6"
  },
  {
    "url": "mx/chichimeco/index.html",
    "revision": "2582d5a7308788c71093376a81f61b8b"
  },
  {
    "url": "mx/chichimeco/vocabulary/animals/index.html",
    "revision": "52a02c1193b5a15f472cb5164f920cbe"
  },
  {
    "url": "mx/chichimeco/vocabulary/greetings/index.html",
    "revision": "348b968c379295d0e1c2d6840bc611fb"
  },
  {
    "url": "mx/chichimeco/vocabulary/more_used/index.html",
    "revision": "712c65716890f7526b8b99b1d99c22bc"
  },
  {
    "url": "mx/chichimeco/vocabulary/people/index.html",
    "revision": "0b26e090a2c5b1b327a375fefe5d4346"
  },
  {
    "url": "mx/chichimeco/vocabulary/phrases/index.html",
    "revision": "7e266897ea5e05d7e0ba5f7c92b1f756"
  },
  {
    "url": "mx/chinanteco/courses/basic/index.html",
    "revision": "6c198cd10aa67b3dba07a32961681fff"
  },
  {
    "url": "mx/chinanteco/courses/intermediate/index.html",
    "revision": "20a74bf6fd68cf306dcd03c89664ddb4"
  },
  {
    "url": "mx/chinanteco/dictionary/glossary.html",
    "revision": "b3596fadfdbb50e72db40166dcd364bc"
  },
  {
    "url": "mx/chinanteco/dictionary/index.html",
    "revision": "c66d391f21082e3773301e548b0341dd"
  },
  {
    "url": "mx/chinanteco/grammar/adjective/index.html",
    "revision": "c0a5499c75357d7efae251edf97ed0d3"
  },
  {
    "url": "mx/chinanteco/grammar/adverb/index.html",
    "revision": "504365812ebf81668289509256508d73"
  },
  {
    "url": "mx/chinanteco/grammar/alphabet/index.html",
    "revision": "8fe7b762b357eb368d46384d3a2f268b"
  },
  {
    "url": "mx/chinanteco/grammar/article/index.html",
    "revision": "7f238a046ff1ab81994bbf0b1ab6ef83"
  },
  {
    "url": "mx/chinanteco/grammar/guide/index.html",
    "revision": "3c3c5d77cbd84a3af75b85bd57f157b5"
  },
  {
    "url": "mx/chinanteco/grammar/verbs/index.html",
    "revision": "4a84339493e653d89c41b7323ae613cd"
  },
  {
    "url": "mx/chinanteco/index.html",
    "revision": "e5880f7482cafaf4a576753eec9f70e1"
  },
  {
    "url": "mx/chinanteco/vocabulary/animals/index.html",
    "revision": "50e9ca4c0ecaffce0abf2fbccb32a99d"
  },
  {
    "url": "mx/chinanteco/vocabulary/greetings/index.html",
    "revision": "23d800430872854ecd47e495f4116b12"
  },
  {
    "url": "mx/chinanteco/vocabulary/more_used/index.html",
    "revision": "cc6c60eeed46f8c40e528c1cdc2994b1"
  },
  {
    "url": "mx/chinanteco/vocabulary/people/index.html",
    "revision": "cd4c0c0a4da53198cb0f18bbe5e96665"
  },
  {
    "url": "mx/chinanteco/vocabulary/phrases/index.html",
    "revision": "494071d58be66bc12613e4156b1f1591"
  },
  {
    "url": "mx/chocholteco/courses/basic/index.html",
    "revision": "4aba6f3deb282c4c2577a39ceb2325cf"
  },
  {
    "url": "mx/chocholteco/courses/intermediate/index.html",
    "revision": "3c6f142a66179cea03c353a02bcc7a47"
  },
  {
    "url": "mx/chocholteco/dictionary/glossary.html",
    "revision": "5cb9691f7b03cb4e2ffbe0d65f56d115"
  },
  {
    "url": "mx/chocholteco/dictionary/index.html",
    "revision": "2811114f6f20fae427d0afd4e05a33a5"
  },
  {
    "url": "mx/chocholteco/grammar/adjective/index.html",
    "revision": "012cdffd0ced9f9c96e54d1b4ad162fd"
  },
  {
    "url": "mx/chocholteco/grammar/adverb/index.html",
    "revision": "d78fd0ade0151e669715979f7795953a"
  },
  {
    "url": "mx/chocholteco/grammar/alphabet/index.html",
    "revision": "2fcb6ac0cf41c55223dc849a182cd84f"
  },
  {
    "url": "mx/chocholteco/grammar/article/index.html",
    "revision": "42ddb3e87f7c960b3fdc22464ed91e60"
  },
  {
    "url": "mx/chocholteco/grammar/guide/index.html",
    "revision": "19d37818a1232771dda374ff21e9d877"
  },
  {
    "url": "mx/chocholteco/grammar/verbs/index.html",
    "revision": "c999a2bca54afd1a25c6de5fc60efbe1"
  },
  {
    "url": "mx/chocholteco/index.html",
    "revision": "25872ce22974d9c77c9ebd14003d8619"
  },
  {
    "url": "mx/chocholteco/vocabulary/animals/index.html",
    "revision": "320de8112d4e376c6d511d3b0f2de1f1"
  },
  {
    "url": "mx/chocholteco/vocabulary/greetings/index.html",
    "revision": "1e11c9ae5944f17bf8db32234ea5908c"
  },
  {
    "url": "mx/chocholteco/vocabulary/more_used/index.html",
    "revision": "1f0a0e7652e32de7a13b9622fd5305c4"
  },
  {
    "url": "mx/chocholteco/vocabulary/people/index.html",
    "revision": "9e8732056345fb42a4831a3f00467a64"
  },
  {
    "url": "mx/chocholteco/vocabulary/phrases/index.html",
    "revision": "c5bd88d649c0cc70deac8eb675be78f7"
  },
  {
    "url": "mx/cuicateco/courses/basic/index.html",
    "revision": "3ccca7e31782ef220bcaa49e3aac1c59"
  },
  {
    "url": "mx/cuicateco/courses/intermediate/index.html",
    "revision": "b3a83ebd455a2ce46d89df5957ba1969"
  },
  {
    "url": "mx/cuicateco/dictionary/glossary.html",
    "revision": "ea435c46da3b0fe5a2f770abe6a6a479"
  },
  {
    "url": "mx/cuicateco/dictionary/index.html",
    "revision": "0ad00ae696516767a5282cf01bdd635a"
  },
  {
    "url": "mx/cuicateco/grammar/adjective/index.html",
    "revision": "d8d759c4aa18a0356ae8e45c764e0578"
  },
  {
    "url": "mx/cuicateco/grammar/adverb/index.html",
    "revision": "f856c923af5d79c5c529485cdedbf3d6"
  },
  {
    "url": "mx/cuicateco/grammar/alphabet/index.html",
    "revision": "1f7efaa8e787aadaa8b74f1e6616bfb6"
  },
  {
    "url": "mx/cuicateco/grammar/article/index.html",
    "revision": "9254875a60d4dcf3f60c1f50ed1841f3"
  },
  {
    "url": "mx/cuicateco/grammar/guide/index.html",
    "revision": "68339b9187e942fafb4d0fac4608a59d"
  },
  {
    "url": "mx/cuicateco/grammar/verbs/index.html",
    "revision": "81e0d044babd1eadefbc0dbf885fd319"
  },
  {
    "url": "mx/cuicateco/index.html",
    "revision": "fe7fa72d9c499e3dba76dfb765f42ba4"
  },
  {
    "url": "mx/cuicateco/vocabulary/animals/index.html",
    "revision": "c4a9ab24b1f45e844d828dbfd6d9f294"
  },
  {
    "url": "mx/cuicateco/vocabulary/greetings/index.html",
    "revision": "96a5075513f1b8e0768726f4d02382be"
  },
  {
    "url": "mx/cuicateco/vocabulary/more_used/index.html",
    "revision": "73c2cb7b8a90c5b788adfbe5657cbf44"
  },
  {
    "url": "mx/cuicateco/vocabulary/people/index.html",
    "revision": "3c09a4bf635dcfbfa416b13c856801af"
  },
  {
    "url": "mx/cuicateco/vocabulary/phrases/index.html",
    "revision": "2b30e071ee33b623eb7b7c0a5f5a829f"
  },
  {
    "url": "mx/ixcateco/courses/basic/index.html",
    "revision": "073f8850ce1c7a5b88338f56b5b37428"
  },
  {
    "url": "mx/ixcateco/courses/intermediate/index.html",
    "revision": "fa6c6af42b29e6634eaaf4c3c783f619"
  },
  {
    "url": "mx/ixcateco/dictionary/glossary.html",
    "revision": "fc4c4163bd71944dd9f1e84a532e30ec"
  },
  {
    "url": "mx/ixcateco/dictionary/index.html",
    "revision": "194f95e4160f7d0c78869f143177e549"
  },
  {
    "url": "mx/ixcateco/grammar/adjective/index.html",
    "revision": "48bc0227f0ba6716b6aa5df19da01cfd"
  },
  {
    "url": "mx/ixcateco/grammar/adverb/index.html",
    "revision": "6fb33f1de08fbd2e8f5b39202a5d4df4"
  },
  {
    "url": "mx/ixcateco/grammar/alphabet/index.html",
    "revision": "9196b02380e335650be9f145b05a0354"
  },
  {
    "url": "mx/ixcateco/grammar/article/index.html",
    "revision": "2097f9f22aa7bd092d59f570f57f3df5"
  },
  {
    "url": "mx/ixcateco/grammar/guide/index.html",
    "revision": "d2a8e4dd047a7089eacc5a7777ae8f8e"
  },
  {
    "url": "mx/ixcateco/grammar/verbs/index.html",
    "revision": "8a8153a08eb98833ac7dc5e012402f56"
  },
  {
    "url": "mx/ixcateco/index.html",
    "revision": "04d8b462210bccd62411964b62869160"
  },
  {
    "url": "mx/ixcateco/vocabulary/animals/index.html",
    "revision": "98fa15c740667562cd5fb0f809c98585"
  },
  {
    "url": "mx/ixcateco/vocabulary/greetings/index.html",
    "revision": "cc202e393a390fc7add6530331e9a7c6"
  },
  {
    "url": "mx/ixcateco/vocabulary/more_used/index.html",
    "revision": "0bde181ca6a3086a2fd56ae925d3af7c"
  },
  {
    "url": "mx/ixcateco/vocabulary/people/index.html",
    "revision": "7e43e826dcfd82b9a228f241ed9b0da8"
  },
  {
    "url": "mx/ixcateco/vocabulary/phrases/index.html",
    "revision": "d580c170f19fe1c6159c1a28c17b05b1"
  },
  {
    "url": "mx/matlatzinca/courses/basic/index.html",
    "revision": "5ce4950dd38bc26c45ae366c1b1f8919"
  },
  {
    "url": "mx/matlatzinca/courses/intermediate/index.html",
    "revision": "b31ebfa64af4d7300b816e8976ef4681"
  },
  {
    "url": "mx/matlatzinca/dictionary/glossary.html",
    "revision": "59201c28cc3ad60c9fa409c5ed67b6c9"
  },
  {
    "url": "mx/matlatzinca/dictionary/index.html",
    "revision": "fe874d8ed4cb68e34d51e44ffa8b3910"
  },
  {
    "url": "mx/matlatzinca/grammar/adjective/index.html",
    "revision": "d7f21efce14d876b880bb9ee33937c49"
  },
  {
    "url": "mx/matlatzinca/grammar/adverb/index.html",
    "revision": "a1dc36728f26aa3e89a2acd197d04233"
  },
  {
    "url": "mx/matlatzinca/grammar/alphabet/index.html",
    "revision": "3af1fad62255dd6de7178cee3cc17bed"
  },
  {
    "url": "mx/matlatzinca/grammar/article/index.html",
    "revision": "491d1fbd2c330e38d0a6bd512ee81def"
  },
  {
    "url": "mx/matlatzinca/grammar/guide/index.html",
    "revision": "d4ff8b5308dbb3faa6c3678fc13d9185"
  },
  {
    "url": "mx/matlatzinca/grammar/verbs/index.html",
    "revision": "05bb4bf088e40a5416671afea24ed75c"
  },
  {
    "url": "mx/matlatzinca/index.html",
    "revision": "83dfccc7f37480ffabf35374876c59fe"
  },
  {
    "url": "mx/matlatzinca/vocabulary/animals/index.html",
    "revision": "aa6b1bfc11f10fce1fb524ac25303ad6"
  },
  {
    "url": "mx/matlatzinca/vocabulary/greetings/index.html",
    "revision": "5c00f315173e36e14a3df92e72ce78b6"
  },
  {
    "url": "mx/matlatzinca/vocabulary/more_used/index.html",
    "revision": "3052292ef0348408fba3cc8aa54c43a5"
  },
  {
    "url": "mx/matlatzinca/vocabulary/people/index.html",
    "revision": "1168d7eb55426f99ff7c83e9c289e72e"
  },
  {
    "url": "mx/matlatzinca/vocabulary/phrases/index.html",
    "revision": "5bd73f81ebf946433f55639102e3868f"
  },
  {
    "url": "mx/maya/courses/basic/index.html",
    "revision": "1832d00f51fd4b75d89231056cee2eda"
  },
  {
    "url": "mx/maya/courses/intermediate/index.html",
    "revision": "2e664109a08203dadffa33216e66496d"
  },
  {
    "url": "mx/maya/dictionary/glossary.html",
    "revision": "d264cc632b4b4d247fddbdaf588f2084"
  },
  {
    "url": "mx/maya/dictionary/index.html",
    "revision": "f808e81e1e90dc461fce22ead013b0b6"
  },
  {
    "url": "mx/maya/grammar/adjective/index.html",
    "revision": "acbfe3f3e240ab64345b43375361cd14"
  },
  {
    "url": "mx/maya/grammar/adverb/index.html",
    "revision": "f4834b2a39f0d002c16384ff96cbe024"
  },
  {
    "url": "mx/maya/grammar/alphabet/index.html",
    "revision": "09a9ad91b1b2ab540e4745e6cd102b9b"
  },
  {
    "url": "mx/maya/grammar/article/index.html",
    "revision": "38dfd16ec429b74bd1adf6559d01e2c8"
  },
  {
    "url": "mx/maya/grammar/guide/index.html",
    "revision": "1feacc99cf097b8eb0753ac9c704349d"
  },
  {
    "url": "mx/maya/grammar/verbs/index.html",
    "revision": "c873dea6ce8af5de4ad983e11de1a51d"
  },
  {
    "url": "mx/maya/index.html",
    "revision": "284df9267cdbe553851e7e1d6b524f72"
  },
  {
    "url": "mx/maya/vocabulary/animals/index.html",
    "revision": "59c4475a96677b366d95e4485556336a"
  },
  {
    "url": "mx/maya/vocabulary/greetings/index.html",
    "revision": "4d6bc407fd9041badf4cf4b25d168bdc"
  },
  {
    "url": "mx/maya/vocabulary/more_used/index.html",
    "revision": "ac7c2a9c8bf4b9b838def2afceaeba9d"
  },
  {
    "url": "mx/maya/vocabulary/people/index.html",
    "revision": "850b9df1b0f6ed401e1db05fe61a0e13"
  },
  {
    "url": "mx/maya/vocabulary/phrases/index.html",
    "revision": "9cabaff2fb6b711042bfb28d620971eb"
  },
  {
    "url": "mx/mazahua/courses/basic/index.html",
    "revision": "80754224f5d7d9b5c964a4d819876512"
  },
  {
    "url": "mx/mazahua/courses/intermediate/index.html",
    "revision": "f45d5b545a5b9342910e00675b945801"
  },
  {
    "url": "mx/mazahua/dictionary/glossary.html",
    "revision": "75bb1229a030a68572ca8f53eb231820"
  },
  {
    "url": "mx/mazahua/dictionary/index.html",
    "revision": "cd524aae1eed4c390efb5f6881435646"
  },
  {
    "url": "mx/mazahua/grammar/adjective/index.html",
    "revision": "bdf5e69f26ef72f3eabfb4ec2b95858b"
  },
  {
    "url": "mx/mazahua/grammar/adverb/index.html",
    "revision": "5fe5c2ddac44e195551d1926cc3ab53c"
  },
  {
    "url": "mx/mazahua/grammar/alphabet/index.html",
    "revision": "c34c528b6c1afef06e1b59e0dd16521b"
  },
  {
    "url": "mx/mazahua/grammar/article/index.html",
    "revision": "dff2e6da32efcd4c6b797599d0a62e00"
  },
  {
    "url": "mx/mazahua/grammar/guide/index.html",
    "revision": "565d4d741881115a0cc3d0eaf77f5647"
  },
  {
    "url": "mx/mazahua/grammar/verbs/index.html",
    "revision": "4054f5cb4a17fbf42c7e2a873fa97bcf"
  },
  {
    "url": "mx/mazahua/index.html",
    "revision": "d36e0c47f5d9bd43bd15f810c90b5cbe"
  },
  {
    "url": "mx/mazahua/vocabulary/animals/index.html",
    "revision": "2dfe852615cf66eaf2e8bdf7f92b61c4"
  },
  {
    "url": "mx/mazahua/vocabulary/greetings/index.html",
    "revision": "c79a2001920b8a63a116ceec7f33a245"
  },
  {
    "url": "mx/mazahua/vocabulary/more_used/index.html",
    "revision": "103b3dea99785d2eecc1aadd826e7131"
  },
  {
    "url": "mx/mazahua/vocabulary/people/index.html",
    "revision": "74256204ef552f619423c72df0b6056e"
  },
  {
    "url": "mx/mazahua/vocabulary/phrases/index.html",
    "revision": "8437e34a2243418c526a4b7d04d5dbfd"
  },
  {
    "url": "mx/mixe/courses/basic/index.html",
    "revision": "8c16e288895d5cd4fe69ce49bbf9e700"
  },
  {
    "url": "mx/mixe/courses/intermediate/index.html",
    "revision": "8cf497aeea3f8b65e5580c5dfa6558da"
  },
  {
    "url": "mx/mixe/dictionary/glossary.html",
    "revision": "5d38176e37dd4e7a1a9a9928b1833b48"
  },
  {
    "url": "mx/mixe/dictionary/index.html",
    "revision": "95c681a6978936960a5de19510601d04"
  },
  {
    "url": "mx/mixe/grammar/adjective/index.html",
    "revision": "63b6b456ed10b058d5ac56e41a3ec01e"
  },
  {
    "url": "mx/mixe/grammar/adverb/index.html",
    "revision": "3ae4d1a5abb37fa3b5ff2133dae44342"
  },
  {
    "url": "mx/mixe/grammar/alphabet/index.html",
    "revision": "25b3dbf2e86f3db04377d8e474e8849f"
  },
  {
    "url": "mx/mixe/grammar/article/index.html",
    "revision": "5e39f173609151b1c2d10245acefc2fc"
  },
  {
    "url": "mx/mixe/grammar/guide/index.html",
    "revision": "629a1d892dd05f86aa209f0ebeafab06"
  },
  {
    "url": "mx/mixe/grammar/verbs/index.html",
    "revision": "6e853cedd0976d8cec0f02b7814590d4"
  },
  {
    "url": "mx/mixe/index.html",
    "revision": "c45598bee72cd99400df8994fb1ed02f"
  },
  {
    "url": "mx/mixe/vocabulary/animals/index.html",
    "revision": "5a77dd7e361773d202f80f4610a30c18"
  },
  {
    "url": "mx/mixe/vocabulary/greetings/index.html",
    "revision": "f723e68181719bd675b8821768e21da8"
  },
  {
    "url": "mx/mixe/vocabulary/more_used/index.html",
    "revision": "16e3ada0b812a9a5c67e5808e07132a1"
  },
  {
    "url": "mx/mixe/vocabulary/people/index.html",
    "revision": "c6f331c2a8350d77d930fe64c8aebc2e"
  },
  {
    "url": "mx/mixe/vocabulary/phrases/index.html",
    "revision": "62fbb89f25b04af4579296e7b4d801d0"
  },
  {
    "url": "mx/oluteco/courses/basic/index.html",
    "revision": "126ed6c4215fa4eb9945dc71335ab914"
  },
  {
    "url": "mx/oluteco/courses/intermediate/index.html",
    "revision": "6ee8c1e07aaac8b38ae9b848d35acfeb"
  },
  {
    "url": "mx/oluteco/dictionary/glossary.html",
    "revision": "173054d96002972345d789c1a15b9dad"
  },
  {
    "url": "mx/oluteco/dictionary/index.html",
    "revision": "d2c11faee1d1c0f521247ce667adcde0"
  },
  {
    "url": "mx/oluteco/grammar/adjective/index.html",
    "revision": "c86e7d4c24570fe7bef290200e92c497"
  },
  {
    "url": "mx/oluteco/grammar/adverb/index.html",
    "revision": "85098152c73c4df7099e177380b0c24d"
  },
  {
    "url": "mx/oluteco/grammar/alphabet/index.html",
    "revision": "08d7aa44267a8741c1a4f3fd49d891da"
  },
  {
    "url": "mx/oluteco/grammar/article/index.html",
    "revision": "9feeb26e34d4e7e1184b921201b1213a"
  },
  {
    "url": "mx/oluteco/grammar/guide/index.html",
    "revision": "ee444b7bedf5b3c9a231aa92b63ddca3"
  },
  {
    "url": "mx/oluteco/grammar/verbs/index.html",
    "revision": "317576bd64ab04d921db1efbea06cb96"
  },
  {
    "url": "mx/oluteco/index.html",
    "revision": "b13e292c165ba5da41cb8a0915cc0aa4"
  },
  {
    "url": "mx/oluteco/vocabulary/animals/index.html",
    "revision": "28f05bbb0a43e3335519f82fc1cd4c17"
  },
  {
    "url": "mx/oluteco/vocabulary/greetings/index.html",
    "revision": "5b594dc75c911b27c73ba399e59b5f55"
  },
  {
    "url": "mx/oluteco/vocabulary/more_used/index.html",
    "revision": "85158584c961579a00ca963c33ad38f8"
  },
  {
    "url": "mx/oluteco/vocabulary/people/index.html",
    "revision": "30030c4a250f6f5bb3ae82805deed188"
  },
  {
    "url": "mx/oluteco/vocabulary/phrases/index.html",
    "revision": "f24ab3f78a18c83d217ad8238938b1c0"
  },
  {
    "url": "mx/popoluca/courses/basic/index.html",
    "revision": "9e4a3e29c4fe4b3373ad2ba4740b6945"
  },
  {
    "url": "mx/popoluca/courses/intermediate/index.html",
    "revision": "c5773fcd05fdd78e898aa0929dd6e233"
  },
  {
    "url": "mx/popoluca/dictionary/glossary.html",
    "revision": "cd94517f6a8055be7c5f9c2020d3e3b2"
  },
  {
    "url": "mx/popoluca/dictionary/index.html",
    "revision": "2f48803ae0c34ec5911bb16b45dae13a"
  },
  {
    "url": "mx/popoluca/grammar/adjective/index.html",
    "revision": "5f005cf116fc778cf06ca14e8225a253"
  },
  {
    "url": "mx/popoluca/grammar/adverb/index.html",
    "revision": "416b45231dbb3730f96705c5dd25d580"
  },
  {
    "url": "mx/popoluca/grammar/alphabet/index.html",
    "revision": "041467144565b327dd3d5dd8b5910dfd"
  },
  {
    "url": "mx/popoluca/grammar/article/index.html",
    "revision": "0b5a5f130d4b89c7191cb7ff71d1f7af"
  },
  {
    "url": "mx/popoluca/grammar/guide/index.html",
    "revision": "3b9b3dd8bb082bf2d3b7cb428e7499a5"
  },
  {
    "url": "mx/popoluca/grammar/verbs/index.html",
    "revision": "78382a486a4e431316a8dce97e28135e"
  },
  {
    "url": "mx/popoluca/index.html",
    "revision": "63a8405bec6b026f866773f798ec59f6"
  },
  {
    "url": "mx/popoluca/vocabulary/animals/index.html",
    "revision": "e6c60f8b16a3eb34743bffc127b44e17"
  },
  {
    "url": "mx/popoluca/vocabulary/greetings/index.html",
    "revision": "58d88c49e21c98692e03b0b428b3b904"
  },
  {
    "url": "mx/popoluca/vocabulary/more_used/index.html",
    "revision": "935b16fdbaa6a691d4c5433820e11dcb"
  },
  {
    "url": "mx/popoluca/vocabulary/people/index.html",
    "revision": "9f57671917008369477d6bc4811be5a0"
  },
  {
    "url": "mx/popoluca/vocabulary/phrases/index.html",
    "revision": "cc6966254e3b8bc89f6aadabac7ed4b1"
  },
  {
    "url": "mx/sayulteco/courses/basic/index.html",
    "revision": "7c48a02ca569db66a4917c75002b22e6"
  },
  {
    "url": "mx/sayulteco/courses/intermediate/index.html",
    "revision": "91974789f271c8f4f9a890a19883f06d"
  },
  {
    "url": "mx/sayulteco/dictionary/glossary.html",
    "revision": "1f4710b2c4a87286454c8a30200e73a8"
  },
  {
    "url": "mx/sayulteco/dictionary/index.html",
    "revision": "0a40daa9e30595b3eb3a1f026d577b7e"
  },
  {
    "url": "mx/sayulteco/grammar/adjective/index.html",
    "revision": "74dd7149223254307e79874d0a097d32"
  },
  {
    "url": "mx/sayulteco/grammar/adverb/index.html",
    "revision": "b24b445a2cdaf1e4911201ecd18432eb"
  },
  {
    "url": "mx/sayulteco/grammar/alphabet/index.html",
    "revision": "27cfdad48dce2da1f424b189086ce603"
  },
  {
    "url": "mx/sayulteco/grammar/article/index.html",
    "revision": "99de0a350559fc8124dd06f47a3bb031"
  },
  {
    "url": "mx/sayulteco/grammar/guide/index.html",
    "revision": "8fd5d4afe02a363eb286f7fd6d518870"
  },
  {
    "url": "mx/sayulteco/grammar/verbs/index.html",
    "revision": "50fd245a34307280c97accbcb23c35a7"
  },
  {
    "url": "mx/sayulteco/index.html",
    "revision": "4321009eb771db0dc013d323ddd1f91d"
  },
  {
    "url": "mx/sayulteco/vocabulary/animals/index.html",
    "revision": "3361f616570a4494ae882fbf00d8e1cc"
  },
  {
    "url": "mx/sayulteco/vocabulary/greetings/index.html",
    "revision": "6ffe249e6502307aec63c030c65e9a52"
  },
  {
    "url": "mx/sayulteco/vocabulary/more_used/index.html",
    "revision": "1e6545ea9ece759848aa538896904f9f"
  },
  {
    "url": "mx/sayulteco/vocabulary/people/index.html",
    "revision": "f879f61d22dd3a8cbfe1886b229d980f"
  },
  {
    "url": "mx/sayulteco/vocabulary/phrases/index.html",
    "revision": "e603aa2ea51ecbb1aeceac730910f063"
  },
  {
    "url": "mx/texistepequeno/courses/basic/index.html",
    "revision": "7f6fed479272f0b721c7f0c94d969c02"
  },
  {
    "url": "mx/texistepequeno/courses/intermediate/index.html",
    "revision": "3e4363294b6073618772c2f5edacb361"
  },
  {
    "url": "mx/texistepequeno/dictionary/glossary.html",
    "revision": "30772d9327a260067a5fc82fffc67379"
  },
  {
    "url": "mx/texistepequeno/dictionary/index.html",
    "revision": "fe7346650da4104fd9323c404251507f"
  },
  {
    "url": "mx/texistepequeno/grammar/adjective/index.html",
    "revision": "8cb75b0c1d36c3b3ee8fa9f8f85fe869"
  },
  {
    "url": "mx/texistepequeno/grammar/adverb/index.html",
    "revision": "ab88b216ed4a9ce1e75cd0bef88604b4"
  },
  {
    "url": "mx/texistepequeno/grammar/alphabet/index.html",
    "revision": "546d5d12b508b7c241029056a4a04dee"
  },
  {
    "url": "mx/texistepequeno/grammar/article/index.html",
    "revision": "2d28e463a5aba54ed2cf289a92478159"
  },
  {
    "url": "mx/texistepequeno/grammar/guide/index.html",
    "revision": "93d5713132eaf7f6b4dec336cbdef26a"
  },
  {
    "url": "mx/texistepequeno/grammar/verbs/index.html",
    "revision": "3a10d72d5963bed50bb09e0ef4646a42"
  },
  {
    "url": "mx/texistepequeno/index.html",
    "revision": "a90bbdb1fd49851be2b14c37a4150d01"
  },
  {
    "url": "mx/texistepequeno/vocabulary/animals/index.html",
    "revision": "396ee6f358e4c9ad252b00d99cf385c3"
  },
  {
    "url": "mx/texistepequeno/vocabulary/greetings/index.html",
    "revision": "0cb3177c77437123ccdf9d99a617de4d"
  },
  {
    "url": "mx/texistepequeno/vocabulary/more_used/index.html",
    "revision": "ff63006b6c649cb08ac1aecc09d5e479"
  },
  {
    "url": "mx/texistepequeno/vocabulary/people/index.html",
    "revision": "f74845d168b362dcd828aa8af9b0f561"
  },
  {
    "url": "mx/texistepequeno/vocabulary/phrases/index.html",
    "revision": "443ac96e0c44af2fd6238fa01df52b21"
  },
  {
    "url": "mx/tlahuica/courses/basic/index.html",
    "revision": "2be70b837265aae58a370a45c08f3440"
  },
  {
    "url": "mx/tlahuica/courses/intermediate/index.html",
    "revision": "e735a982d876367333707d34c4635def"
  },
  {
    "url": "mx/tlahuica/dictionary/glossary.html",
    "revision": "df680011c2d480c6b615ed87be9627e1"
  },
  {
    "url": "mx/tlahuica/dictionary/index.html",
    "revision": "752185eea065e9f6af3f82c24f054d7b"
  },
  {
    "url": "mx/tlahuica/grammar/adjective/index.html",
    "revision": "9ff50b4faabe79c335de0ee7d4932601"
  },
  {
    "url": "mx/tlahuica/grammar/adverb/index.html",
    "revision": "57a8da3ffec2ca8b9eca47c6a496fb19"
  },
  {
    "url": "mx/tlahuica/grammar/alphabet/index.html",
    "revision": "6a41dfe945e45d7c402942de6c3fb043"
  },
  {
    "url": "mx/tlahuica/grammar/article/index.html",
    "revision": "8ee0928dd81f52763bc775fd8df75a10"
  },
  {
    "url": "mx/tlahuica/grammar/guide/index.html",
    "revision": "892b13ed4e8d398b4a1d4916e2b8652b"
  },
  {
    "url": "mx/tlahuica/grammar/verbs/index.html",
    "revision": "22a14a922d1b10bdabaec983412bbafe"
  },
  {
    "url": "mx/tlahuica/index.html",
    "revision": "ff6b2c29c6be0ff70e4fb6f2a93d1866"
  },
  {
    "url": "mx/tlahuica/vocabulary/animals/index.html",
    "revision": "639aa14880742d45fa3d508ff1b27cac"
  },
  {
    "url": "mx/tlahuica/vocabulary/greetings/index.html",
    "revision": "ca02943b37d352f6eb34eb4d833619df"
  },
  {
    "url": "mx/tlahuica/vocabulary/more_used/index.html",
    "revision": "e7889e451d6c27e4eb5e18af20a9440a"
  },
  {
    "url": "mx/tlahuica/vocabulary/people/index.html",
    "revision": "cdfe8f681c09777dde4f227a762b6e28"
  },
  {
    "url": "mx/tlahuica/vocabulary/phrases/index.html",
    "revision": "f378237fc8857d3c12434956f41f27fd"
  },
  {
    "url": "mx/tlapaneco/courses/basic/index.html",
    "revision": "161e776abcc66e042397be5dde861323"
  },
  {
    "url": "mx/tlapaneco/courses/intermediate/index.html",
    "revision": "0286ffea3b93338172cbe25cdbbc12ca"
  },
  {
    "url": "mx/tlapaneco/dictionary/glossary.html",
    "revision": "12202d592b426c0a888e1e57b80bacd0"
  },
  {
    "url": "mx/tlapaneco/dictionary/index.html",
    "revision": "6db160fc79790284a86ae7ab526bd225"
  },
  {
    "url": "mx/tlapaneco/grammar/adjective/index.html",
    "revision": "fb39ad7f882b57188bb255d95d8319b0"
  },
  {
    "url": "mx/tlapaneco/grammar/adverb/index.html",
    "revision": "a3230bf7dde7cd00699e82bb0f6a253b"
  },
  {
    "url": "mx/tlapaneco/grammar/alphabet/index.html",
    "revision": "809a8e513931f372a80c788fc3b6686a"
  },
  {
    "url": "mx/tlapaneco/grammar/article/index.html",
    "revision": "805cf27f3d4c7d851b79db88f7cecc66"
  },
  {
    "url": "mx/tlapaneco/grammar/guide/index.html",
    "revision": "7a578e22a593a136784c351197abfe1a"
  },
  {
    "url": "mx/tlapaneco/grammar/verbs/index.html",
    "revision": "fbfd5bfc14290c78eb94e9bad7684637"
  },
  {
    "url": "mx/tlapaneco/index.html",
    "revision": "acdaa582c69fe51466d4c7a38b71d4d3"
  },
  {
    "url": "mx/tlapaneco/vocabulary/animals/index.html",
    "revision": "b430f82f3118fda9175e87842c41d28c"
  },
  {
    "url": "mx/tlapaneco/vocabulary/greetings/index.html",
    "revision": "eace95b0b9d5ebd08c910e8fa644083d"
  },
  {
    "url": "mx/tlapaneco/vocabulary/more_used/index.html",
    "revision": "afb24b701f0ab7fa4271c85edd451783"
  },
  {
    "url": "mx/tlapaneco/vocabulary/people/index.html",
    "revision": "19e50522dabf34e6f195c30b51a9f89c"
  },
  {
    "url": "mx/tlapaneco/vocabulary/phrases/index.html",
    "revision": "c6dd03c49ca50004c2f43975fb0a0558"
  },
  {
    "url": "mx/tojolabal/courses/basic/index.html",
    "revision": "87fa52bc90c06b2af4f85525dc94fba2"
  },
  {
    "url": "mx/tojolabal/courses/intermediate/index.html",
    "revision": "f5a467a0d341ff5be225823c67de7d3a"
  },
  {
    "url": "mx/tojolabal/dictionary/glossary.html",
    "revision": "5cc90caed4ebcc2ab997344ab639daa8"
  },
  {
    "url": "mx/tojolabal/dictionary/index.html",
    "revision": "703aaec202496bb64043071a5cc29d19"
  },
  {
    "url": "mx/tojolabal/grammar/adjective/index.html",
    "revision": "4cc1a4ae63c060ba7a16f44b92737797"
  },
  {
    "url": "mx/tojolabal/grammar/adverb/index.html",
    "revision": "afc94818714db4e4f6f6a5bcb7e1bd8b"
  },
  {
    "url": "mx/tojolabal/grammar/alphabet/index.html",
    "revision": "22b9ed4838ca4207007aa17f0151e223"
  },
  {
    "url": "mx/tojolabal/grammar/article/index.html",
    "revision": "0a5a32058f0e268f70ffb6ee753b276b"
  },
  {
    "url": "mx/tojolabal/grammar/guide/index.html",
    "revision": "9560ce722efd8aab46c1ce6df7535ef8"
  },
  {
    "url": "mx/tojolabal/grammar/verbs/index.html",
    "revision": "5c8069dd4d63c4474f2f2b2800112364"
  },
  {
    "url": "mx/tojolabal/index.html",
    "revision": "9afb18d91b778157237112c87162d06c"
  },
  {
    "url": "mx/tojolabal/vocabulary/animals/index.html",
    "revision": "530a7d9440746514b0c06def51937d02"
  },
  {
    "url": "mx/tojolabal/vocabulary/greetings/index.html",
    "revision": "d41234a8ea1d39c99d159ae30e8cb567"
  },
  {
    "url": "mx/tojolabal/vocabulary/more_used/index.html",
    "revision": "295e6f20f585965eedebb67181cd9fba"
  },
  {
    "url": "mx/tojolabal/vocabulary/people/index.html",
    "revision": "76462098a548260c2d903a4da756b636"
  },
  {
    "url": "mx/tojolabal/vocabulary/phrases/index.html",
    "revision": "9df50f8d94e1a6e86975d270a9ab94de"
  },
  {
    "url": "mx/triqui/courses/basic/index.html",
    "revision": "6f71b4adbc838e5afe0d17176bb9eb90"
  },
  {
    "url": "mx/triqui/courses/intermediate/index.html",
    "revision": "dc077fa42a97242714930b77e29c31f0"
  },
  {
    "url": "mx/triqui/dictionary/glossary.html",
    "revision": "4cabe320f8248dd681985a077e62accc"
  },
  {
    "url": "mx/triqui/dictionary/index.html",
    "revision": "4abbea484659eb766344a1e49c1e74aa"
  },
  {
    "url": "mx/triqui/grammar/adjective/index.html",
    "revision": "35368e4a597d6c8cb6813e994b9bb578"
  },
  {
    "url": "mx/triqui/grammar/adverb/index.html",
    "revision": "3554b5a3a1f88b917c28c9a08993d1c5"
  },
  {
    "url": "mx/triqui/grammar/alphabet/index.html",
    "revision": "c3adc63bddbb18d073c0cab44fe77792"
  },
  {
    "url": "mx/triqui/grammar/article/index.html",
    "revision": "d1e1666d70525fedd611c294184db7cf"
  },
  {
    "url": "mx/triqui/grammar/guide/index.html",
    "revision": "6d581de4fe1ea507dcc19edfa0270283"
  },
  {
    "url": "mx/triqui/grammar/verbs/index.html",
    "revision": "91fa0f659156024534ec643d91830f8d"
  },
  {
    "url": "mx/triqui/index.html",
    "revision": "228d4af4bc2e1f893085bf7ac378b7d0"
  },
  {
    "url": "mx/triqui/vocabulary/animals/index.html",
    "revision": "60bbe31bb09832965bcb354c3af4bfbd"
  },
  {
    "url": "mx/triqui/vocabulary/greetings/index.html",
    "revision": "b54cc1c8515adc2acde6b5761faf391f"
  },
  {
    "url": "mx/triqui/vocabulary/more_used/index.html",
    "revision": "4a022da0f86e2a94e91c03166dc2fc9b"
  },
  {
    "url": "mx/triqui/vocabulary/people/index.html",
    "revision": "5fc69634e12d149c3cc9e6311ea03831"
  },
  {
    "url": "mx/triqui/vocabulary/phrases/index.html",
    "revision": "9749b019adc3a8ba9f44b6dd6b2d5031"
  },
  {
    "url": "mx/tseltal/courses/basic/index.html",
    "revision": "6a528bad5d3da01da71f3f9e14791c39"
  },
  {
    "url": "mx/tseltal/courses/intermediate/index.html",
    "revision": "0b0b9ca3d862c3b220d4b43e2459693d"
  },
  {
    "url": "mx/tseltal/dictionary/glossary.html",
    "revision": "02e211c503e4ef3fd937312375c80ec7"
  },
  {
    "url": "mx/tseltal/dictionary/index.html",
    "revision": "b2c10171719581fc7c367e65d74774b9"
  },
  {
    "url": "mx/tseltal/grammar/adjective/index.html",
    "revision": "afc51c6f403ad72e2a865e4d04ed669b"
  },
  {
    "url": "mx/tseltal/grammar/adverb/index.html",
    "revision": "fd617ea56e0d0d12270140a0e25a03ee"
  },
  {
    "url": "mx/tseltal/grammar/alphabet/index.html",
    "revision": "9f9933088c7e993a7fb057da87bfeb48"
  },
  {
    "url": "mx/tseltal/grammar/article/index.html",
    "revision": "db5f5c9764bd4df05d1b0f5457bc3681"
  },
  {
    "url": "mx/tseltal/grammar/guide/index.html",
    "revision": "8ea3835ba954b6fef1b933277617803a"
  },
  {
    "url": "mx/tseltal/grammar/verbs/index.html",
    "revision": "5af0cd8a8fc93dd040e0900238267c4b"
  },
  {
    "url": "mx/tseltal/index.html",
    "revision": "2ec2024ff9c6610b4581f997627cd3cd"
  },
  {
    "url": "mx/tseltal/vocabulary/animals/index.html",
    "revision": "0cac4250ba9cfa810b984d921cf6b165"
  },
  {
    "url": "mx/tseltal/vocabulary/greetings/index.html",
    "revision": "5472c5379b100007c7cc0ac1e66c15b5"
  },
  {
    "url": "mx/tseltal/vocabulary/more_used/index.html",
    "revision": "f88c6b32f4fe51875c18b3c95f5c1b6a"
  },
  {
    "url": "mx/tseltal/vocabulary/people/index.html",
    "revision": "3729de242eb64cf6ae3e70dc75b8cf30"
  },
  {
    "url": "mx/tseltal/vocabulary/phrases/index.html",
    "revision": "1ba4dc8fa5adf95c56a9b9439ea25199"
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
